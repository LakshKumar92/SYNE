const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1469334031218-e382a71b716b\?q=80&w=2000&auto=format&fit=crop",/,
  '"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2000&auto=format&fit=crop",'
);

fs.writeFileSync('src/pages/Home.tsx', code);
