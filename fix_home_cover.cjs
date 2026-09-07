const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(/object-cover object-\[center_top\]/g, 'object-cover');

// Remove the md:mt-12 in case they thought it was a size mismatch
code = code.replace(/<Link className="group flex flex-col gap-6 cursor-pointer md:mt-12" to="\/collections">/g, '<Link className="group flex flex-col gap-6 cursor-pointer" to="/collections">');

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Homepage fixed');
