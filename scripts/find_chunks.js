const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Find declaration of Or
const orIdx = content.indexOf('const Or =');
if (orIdx !== -1) {
  console.log('--- Or declaration ---');
  console.log(content.slice(orIdx, orIdx + 1500));
} else {
  const orIdx2 = content.indexOf('Or =');
  console.log(content.slice(orIdx2, orIdx2 + 1500));
}
