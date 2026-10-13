const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Find occurrences of /api/image-jobs
let idx = 0;
while ((idx = content.indexOf('/api/image-jobs', idx)) !== -1) {
  const start = Math.max(0, idx - 400);
  const end = Math.min(content.length, idx + 800);
  console.log('--- FOUND IMAGE-JOBS OCCURRENCE ---');
  console.log(content.slice(start, end));
  console.log('\n=====================================\n');
  idx += 15;
}
