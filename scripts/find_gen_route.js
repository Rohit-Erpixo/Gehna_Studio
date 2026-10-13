const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Find where path: "/generator" is defined
const genIdx = content.indexOf('path: "/generator"');
if (genIdx !== -1) {
  console.log('--- Generator Route Block ---');
  console.log(content.slice(Math.max(0, genIdx - 100), genIdx + 500));
}

// Find where path: "/studio/:slug" is defined
const studioIdx = content.indexOf('path: "/studio/:slug"');
if (studioIdx !== -1) {
  console.log('--- Studio Slug Route Block ---');
  console.log(content.slice(Math.max(0, studioIdx - 100), studioIdx + 500));
}
