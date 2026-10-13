const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'extracted_target', 'chunks');
const outDir = path.join(__dirname, 'decompiled_pages');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));

console.log(`Decompiling ${files.length} chunk files into JSX components...`);

for (const file of files) {
  const inputPath = path.join(srcDir, file);
  const baseName = file.split('-')[0]; // e.g. Generator, HomePage, AdminPage
  const pageOutDir = path.join(outDir, baseName);
  
  try {
    execSync(`npx webcrack "${inputPath}" -o "${pageOutDir}" -f`, { stdio: 'pipe' });
    console.log(`✓ Decompiled ${baseName} (${file})`);
  } catch (err) {
    console.error(`✗ Error decompiling ${file}:`, err.message);
  }
}

console.log('All pages decompiled!');
