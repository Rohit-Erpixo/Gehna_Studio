const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Search for jewelry categories, poses, backgrounds, models, props
const terms = ['necklace', 'ring', 'earring', 'bangle', 'bracelet', 'model', 'background', 'lighting', 'preset', 'aspect_ratio', 'credits'];

console.log('--- Parameter & Options Extraction ---');
for (const t of terms) {
  const regex = new RegExp(`['"][^'"]*${t}[^'"]*['"]`, 'gi');
  const matches = [...new Set(content.match(regex) || [])];
  console.log(`\nMatches for "${t}" (${matches.length}):`);
  console.log(matches.slice(0, 10));
}
