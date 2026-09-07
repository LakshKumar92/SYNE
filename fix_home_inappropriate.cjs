const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1469334031218-e382a71b716b\?q=80&w=1000&auto=format&fit=crop"/g,
  '"https://images.unsplash.com/photo-1550614000-4b95d4158223?q=80&w=1000&auto=format&fit=crop"'
);

// Just in case it's in the hero array too
code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1469334031218-e382a71b716b\?q=80&w=2000&auto=format&fit=crop"/g,
  '"https://images.unsplash.com/photo-1550614000-4b95d4158223?q=80&w=2000&auto=format&fit=crop"'
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Homepage fixed');
