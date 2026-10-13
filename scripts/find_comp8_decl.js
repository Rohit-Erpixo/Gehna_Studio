const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

const regex = /(_Component8\s*=[^;]+;)/;
const match = content.match(regex);
if (match) {
  console.log('Match found:');
  console.log(match[0].slice(0, 500));
} else {
  // Let's find any mention of _Component8
  let idx = 0;
  while ((idx = content.indexOf('_Component8', idx)) !== -1) {
    console.log(content.slice(Math.max(0, idx - 100), idx + 200));
    console.log('---');
    idx += 15;
  }
}
