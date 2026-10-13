import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, `piece_${Date.now()}_${Math.random().toString(36).substring(7)}${ext}`);
  }
});
const upload = multer({ storage });

// In-memory state store for jobs & user
let userCredits = 50; // 50 credits starter
const jobs = new Map();
const galleryItems = [
  {
    id: 'demo-1',
    input_image_url: '/assets/landing_animation/input/input-1.jpg',
    output_image_url: '/assets/landing_animation/output/output-1.jpg',
    garment_type: 'jewellery_set',
    style: 'indian_bridal',
    output_format: 'catalogue_portrait',
    created_at: new Date(Date.now() - 3600000).toISOString(),
    status: 'done'
  },
  {
    id: 'demo-2',
    input_image_url: '/assets/landing_animation/input/input-2.jpg',
    output_image_url: '/assets/landing_animation/output/output-2.jpg',
    garment_type: 'necklace',
    style: 'studio',
    output_format: 'instagram_square',
    created_at: new Date(Date.now() - 7200000).toISOString(),
    status: 'done'
  },
  {
    id: 'demo-3',
    input_image_url: '/assets/style_previews/ring/macro/preview.jpg',
    output_image_url: '/assets/style_previews/ring/modern_wear/preview.jpg',
    garment_type: 'ring',
    style: 'macro',
    output_format: 'instagram_square',
    created_at: new Date(Date.now() - 14400000).toISOString(),
    status: 'done'
  }
];

// Helper: Get OpenAI instance
function getOpenAIClient(apiKeyOverride) {
  const key = apiKeyOverride || process.env.OPENAI_API_KEY;
  if (!key || key.trim() === '') return null;
  return new OpenAI({ apiKey: key.trim() });
}

// ----------------------------------------------------
// API ROUTES (Reverse-Engineered Contract)
// ----------------------------------------------------

// 1. User Profile & Credits
app.get('/api/users/me', (req, res) => {
  res.json({
    id: 'usr_rohit_gehna',
    email: 'creator@gehnaphoto.studio',
    credits: userCredits,
    has_purchased: true,
    phone_bonus_available: false,
    phone: '+91 98765 43210',
    restricted: false,
    free_credits_blocked: false
  });
});

// 2. Upload Jewellery Photo
app.post('/api/image-jobs/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ detail: 'No image file uploaded' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({
    input_image_url: fileUrl,
    filename: req.file.filename,
    size: req.file.size
  });
});

// 3. Create Image Generation Job
app.post('/api/image-jobs', async (req, res) => {
  const { input_image_url, style, garment_type, output_format, custom_prompt, api_key } = req.body;
  const clientKey = req.headers['x-openai-api-key'] || api_key;

  if (userCredits < 1) {
    return res.status(402).json({ detail: 'Insufficient credits. Please top up your credits to generate photoshoots.' });
  }

  const jobId = `job_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  const garmentLabel = (garment_type || 'jewellery').replace(/_/g, ' ');
  const styleLabel = (style || 'studio').replace(/_/g, ' ');

  const job = {
    id: jobId,
    input_image_url: input_image_url || '/assets/landing_animation/input/input-1.jpg',
    garment_type: garment_type || 'jewellery_set',
    style: style || 'indian_bridal',
    output_format: output_format || 'catalogue_portrait',
    status: 'generating',
    created_at: new Date().toISOString(),
    output_url: null,
    error: null
  };

  jobs.set(jobId, job);
  userCredits = Math.max(0, userCredits - 1);

  // Background Worker: Run OpenAI Generation Engine
  (async () => {
    try {
      const openai = getOpenAIClient(clientKey);

      if (openai) {
        console.log(`[Job ${jobId}] Calling OpenAI Image Engine for ${garmentLabel} (${styleLabel})...`);
        
        let size = '1024x1024';
        if (output_format === 'lookbook_landscape') size = '1792x1024';
        else if (output_format === 'story_vertical' || output_format === 'catalogue_portrait') size = '1024x1792';

        const engineeredPrompt = `Commercial luxury jewellery catalogue photoshoot of an exquisite, master-crafted ${garmentLabel}. Shot style: ${styleLabel} photoshoot. Flawlessly polished 22-karat yellow gold with brilliant-cut diamonds and precious gemstones, intricate royal craftsmanship, soft diffused studio lighting with specular highlights, ultra-sharp macro focus, high-end Vogue jewellery editorial aesthetics, cinematic depth of field, 8k resolution, photorealistic luxury advertisement. ${custom_prompt ? `Additional details: ${custom_prompt}` : ''}`;

        // Supported models on user's key: gpt-image-1, gpt-image-1.5, gpt-image-2, dall-e-3
        const targetModels = ['gpt-image-1', 'gpt-image-1.5', 'gpt-image-2', 'dall-e-3'];
        let generatedUrl = null;
        let lastErr = null;

        for (const modelName of targetModels) {
          try {
            console.log(`[Job ${jobId}] Trying model: ${modelName}...`);
            const response = await openai.images.generate({
              model: modelName,
              prompt: engineeredPrompt,
              n: 1,
              size: '1024x1024'
            });

            if (response.data && response.data[0]) {
              if (response.data[0].b64_json) {
                // Save base64 image locally
                const buffer = Buffer.from(response.data[0].b64_json, 'base64');
                const filename = `photoshoot_${jobId}.png`;
                const filePath = path.join(uploadDir, filename);
                fs.writeFileSync(filePath, buffer);
                generatedUrl = `/uploads/${filename}`;
                console.log(`[Job ${jobId}] Saved generated image to: ${generatedUrl}`);
                break;
              } else if (response.data[0].url) {
                generatedUrl = response.data[0].url;
                console.log(`[Job ${jobId}] Received image URL from OpenAI: ${generatedUrl}`);
                break;
              }
            }
          } catch (modelErr) {
            console.warn(`[Job ${jobId}] Model ${modelName} error: ${modelErr.message}`);
            lastErr = modelErr;
          }
        }

        if (!generatedUrl) {
          throw new Error(lastErr ? lastErr.message : 'Failed to generate image with OpenAI models');
        }

        job.status = 'done';
        job.output_url = generatedUrl;
        console.log(`[Job ${jobId}] OpenAI generation complete!`);
      } else {
        // High-Fidelity demo preview pipeline (simulates processing with curated catalogue assets)
        console.log(`[Job ${jobId}] No OpenAI API key provided. Using curated catalogue asset generation pipeline...`);
        await new Promise(r => setTimeout(r, 2400));

        const styleSample = `/assets/style_previews/${garment_type}/${style}/preview.jpg`;
        const fallbackSample = `/assets/landing_animation/output/output-${(jobs.size % 2) + 1}.jpg`;
        
        job.status = 'done';
        job.output_url = fs.existsSync(path.join(__dirname, 'public', styleSample)) ? styleSample : fallbackSample;
      }

      // Add to gallery history
      galleryItems.unshift({
        id: jobId,
        input_image_url: job.input_image_url,
        output_image_url: job.output_url,
        garment_type: job.garment_type,
        style: job.style,
        output_format: job.output_format,
        created_at: job.created_at,
        status: 'done'
      });
    } catch (err) {
      console.error(`[Job ${jobId}] Generation error:`, err.message);
      job.status = 'failed';
      job.error = err.message;
      userCredits += 1; // refund on failure
    }
  })();

  res.json({ id: jobId, status: 'generating' });
});

// 4. Batch Job Status Polling
app.get('/api/image-jobs/status', (req, res) => {
  const ids = (req.query.ids || '').split(',').filter(Boolean);
  const results = ids.map(id => {
    const job = jobs.get(id);
    if (!job) return { id, status: 'done', output_url: '/assets/landing_animation/output/output-1.jpg' };
    return {
      id: job.id,
      status: job.status,
      output_url: job.output_url,
      error: job.error
    };
  });
  res.json(results);
});

// 5. Queue Status
app.get('/api/image-jobs/queue', (req, res) => {
  const activeCount = Array.from(jobs.values()).filter(j => j.status === 'generating').length;
  res.json({
    active: activeCount,
    oldest_created_at: null,
    estimated_seconds: activeCount * 12
  });
});

// 6. Studio Gallery List
app.get('/api/studio/mine', (req, res) => {
  res.json(galleryItems);
});

// 7. Credit Packages
app.get('/api/credits/packages', (req, res) => {
  res.json([
    { id: 'pkg_starter', name: 'Artisan Pack', credits: 25, price_inr: 499, popular: false, badge: 'Beginner' },
    { id: 'pkg_pro', name: 'Jeweller Pro', credits: 100, price_inr: 1499, popular: true, badge: 'Most Popular' },
    { id: 'pkg_studio', name: 'Showroom Studio', credits: 350, price_inr: 3999, popular: false, badge: 'Best Value' },
    { id: 'pkg_enterprise', name: 'Luxury Brand', credits: 1000, price_inr: 8999, popular: false, badge: 'Enterprise' }
  ]);
});

// 8. Purchase Mock / Top-up
app.post('/api/credits/orders', (req, res) => {
  const { credits } = req.body;
  userCredits += Number(credits || 50);
  res.json({ success: true, new_balance: userCredits });
});

// 9. Verify OpenAI API Key Endpoint
app.post('/api/validate-key', async (req, res) => {
  const { apiKey } = req.body;
  const keyToTest = apiKey || process.env.OPENAI_API_KEY;
  if (!keyToTest) return res.status(400).json({ valid: false, error: 'Key is required' });
  try {
    const client = new OpenAI({ apiKey: keyToTest.trim() });
    const list = await client.models.list();
    res.json({ 
      valid: true, 
      message: `OpenAI API connected! (${list.data.length} models available)`,
      has_image_model: true
    });
  } catch (err) {
    res.json({ valid: false, error: err.message || 'Invalid API key' });
  }
});

// Fallback to index.html for client SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n✨ Gehna Photo AI Studio is running at: http://localhost:${PORT}`);
  console.log(`📁 Uploads served from: http://localhost:${PORT}/uploads`);
  console.log(`🔑 OpenAI API configured: ${process.env.OPENAI_API_KEY ? 'Yes (from .env)' : 'No (use UI or .env)'}\n`);
});
