const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(/object-\[center_top\]/g, 'object-cover object-[center_top]');

fs.writeFileSync('src/pages/Home.tsx', code);
