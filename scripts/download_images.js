const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  'necklace_earringset-Wkr9Vv7w.webp',
  'bracelet-cHy5FZKi.webp',
  'tops-BpnZaVVo.webp',
  'ring-DUl_mvHS.webp',
  'bangles-Dazgn-L6.webp',
  'anklet-CtQHfBSu.webp',
  'maangteeka-40kRiqAa.webp',
  'upload-photo-ClPBxgk2.jpeg',
  'select-style-DY-PpyRQ.png',
  'final-optimized-CbSs0wQj.jpg',
  'landing_animation/input/input-1.jpg',
  'landing_animation/output/output-1.jpg',
  'landing_animation/input/input-2.jpg',
  'landing_animation/output/output-2.jpg'
];

const targetBase = path.join(__dirname, 'public', 'assets');

function download(urlPath) {
  const fullUrl = `https://gehnaphoto.com/assets/${urlPath}`;
  const destPath = path.join(targetBase, urlPath);
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  return new Promise((resolve) => {
    https.get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Fetched ${urlPath}`);
          resolve(true);
        });
      } else {
        console.log(`- Skipped ${urlPath} (${res.statusCode})`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`- Error ${urlPath}: ${err.message}`);
      resolve(false);
    });
  });
}

(async () => {
  for (const img of images) {
    await download(img);
  }
  console.log('Finished downloading available image assets.');
})();
