const fs = require('fs');
let code = fs.readFileSync('src/pages/Profile.tsx', 'utf8');

// Replace text-[#EDEDED] with text-on-primary (which is dark gray because bg-primary is light cream)
code = code.replace(/text-\[\#EDEDED\]/g, 'text-on-primary');

// Replace border-outline-variant/70 with border-outline-variant
code = code.replace(/border-outline-variant\/70/g, 'border-outline-variant');

// Let's also check for any text-[#71717A] and make it text-on-surface-variant
code = code.replace(/text-\[\#71717A\]/g, 'text-on-surface-variant');

// Let's also replace text-white/60 or similar if they exist
code = code.replace(/text-white\/60/g, 'text-on-surface-variant');

fs.writeFileSync('src/pages/Profile.tsx', code);
console.log('Fixed Profile.tsx colors');
