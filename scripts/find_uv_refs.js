const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Search for references to Uv
const matches = content.match(/[a-zA-Z0-9_$]+\.create\s*\(/g) || [];
console.log('Total .create( calls:', matches.length);
console.log([...new Set(matches)]);

// Find where Uv is used
const uvRegex = /\bUv\b/g;
let count = 0;
let match;
while ((match = uvRegex.exec(content)) !== null) {
  const start = Math.max(0, match.index - 100);
  const end = Math.min(content.length, match.index + 150);
  console.log(`Match ${++count} at ${match.index}:`);
  console.log(content.slice(start, end));
  console.log('---');
  if (count >= 10) break;
}
