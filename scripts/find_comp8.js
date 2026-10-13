const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

const idx = content.indexOf('function _Component8(');
if (idx !== -1) {
  console.log('--- _Component8 (Generator Page) ---');
  console.log(content.slice(idx, idx + 4000));
} else {
  console.log('function _Component8 not found directly, searching regex');
  const m = content.match(/function _Component8\b[^{]*\{/);
  console.log(m);
}
