const https = require('https');
const fs = require('fs');
const path = require('path');

const chunks = [
  'AppLayout-DgGCk1so.js',
  'HomePage-Cqnef8qL.js',
  'LoginPage-DhUqSI9X.js',
  'Dashboard-BHa4pJmE.js',
  'Generator-BMUnqwzy.js',
  'Gallery-4RzBWD2z.js',
  'Settings-BH2J0Q6V.js',
  'AccountSettings-ByFlYTx6.js',
  'PrivacyPolicy-BJ-fYufK.js',
  'AdminPage-CbHMnXUD.js',
  'StudioPage-DJ2Y9SrO.js',
  'Terms-r6HTZghg.js'
];

const targetDir = path.join(__dirname, 'extracted_target', 'chunks');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

(async () => {
  console.log('Downloading all application chunks...');
  for (const chunk of chunks) {
    const url = `https://gehnaphoto.com/assets/${chunk}`;
    const dest = path.join(targetDir, chunk);
    try {
      await download(url, dest);
      const stat = fs.statSync(dest);
      console.log(`✓ Downloaded ${chunk} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Failed ${chunk}:`, err.message);
    }
  }
  console.log('All chunks downloaded!');
})();
