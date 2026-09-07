const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1485230895905-ef41725514f7\?q=80&w=1000&auto=format&fit=crop"/g,
  '"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop"'
);

fs.writeFileSync('src/pages/Home.tsx', code);
