const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1509631179647-0c5000508c11\?q=80&w=2000&auto=format&fit=crop",/g,
  '"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop",'
);

fs.writeFileSync('src/pages/Home.tsx', code);
