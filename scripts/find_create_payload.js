const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Search for Uv.create
let idx = 0;
while ((idx = content.indexOf('Uv.create', idx)) !== -1) {
  const start = Math.max(0, idx - 400);
  const end = Math.min(content.length, idx + 800);
  console.log('--- FOUND Uv.create USAGE ---');
  console.log(content.slice(start, end));
  console.log('\n=====================================\n');
  idx += 10;
}
