const fs = require('fs');
const content = fs.readFileSync('decompiled_src/deobfuscated.js', 'utf8');

// Find route paths
const routeMatches = content.match(/path:\s*['"]([^'"]+)['"]/g) || [];
console.log('--- Routes found ---');
console.log([...new Set(routeMatches)]);

// Find Supabase anon key or URL
const sbUrl = content.match(/https:\/\/[a-z0-9]+\.supabase\.co/g) || [];
console.log('\n--- Supabase URL ---');
console.log([...new Set(sbUrl)]);

// Find anon key
const anonKey = content.match(/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/g) || [];
console.log('\n--- Supabase Anon Key (Public JWT) ---');
console.log(anonKey ? anonKey[0]?.substring(0, 50) + '...' : 'Not found');

// Find all API endpoints called with fetch or similar
const apiCalls = content.match(/\/api\/[a-zA-Z0-9/_-]+/g) || [];
console.log('\n--- API Endpoints ---');
console.log([...new Set(apiCalls)]);

// Find UI Navigation links
const navLinks = content.match(/href:\s*['"]([^'"]+)['"]/g) || [];
console.log('\n--- Navigation Links ---');
console.log([...new Set(navLinks)].slice(0, 20));

// Find modal/state names
const stateNames = content.match(/useState\s*\(\s*['"][^'"]*['"]\s*\)/g) || [];
console.log('\n--- Sample State Initializers ---');
console.log([...new Set(stateNames)].slice(0, 15));
