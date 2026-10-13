const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Find function Ot or how Ot is defined
const otMatch = content.match(/function Ot\s*\([^)]*\)\s*\{[^}]+\}/g) || [];
console.log('--- Ot definition ---');
console.log(otMatch);

// Search for 'const Ot' or 'function Ot'
const idx = content.indexOf('function Ot(');
if (idx !== -1) {
  console.log(content.slice(idx, idx + 800));
} else {
  const idx2 = content.indexOf('const Ot =');
  if (idx2 !== -1) console.log(content.slice(idx2, idx2 + 800));
}
