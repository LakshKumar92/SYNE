const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1550614000-4b95d4158223\?q=80&w=1000&auto=format&fit=crop"/g,
  '"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"'
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Fixed 404 image');
