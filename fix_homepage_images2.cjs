const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const newHeroImages = `const heroImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1509631179647-0c5000508c11?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop"
];`;
code = code.replace(/const heroImages = \[[\s\S]*?\];/, newHeroImages);

// Fix the bottom 3 images
code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"]+"/g,
  (match, offset, original) => {
     if (original.substring(0, offset).includes('<section className="mb-24 md:mb-40">')) {
         return match; 
     }
     return match;
  }
);
// Hard replacement for the bottom 3 images
code = code.replace(/src="https:\/\/images\.unsplash\.com\/photo-1485968579580-b6d095142e6e\?q=80&w=1000&auto=format&fit=crop"/g, 'src="https://images.unsplash.com/photo-1485230895905-ef41725514f7?q=80&w=1000&auto=format&fit=crop"');
code = code.replace(/src="https:\/\/images\.unsplash\.com\/photo-1496747611176-843222e1e57c\?q=80&w=1000&auto=format&fit=crop"/g, 'src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop"');
code = code.replace(/src="https:\/\/images\.unsplash\.com\/photo-1475181128362-790100f2824e\?q=80&w=1000&auto=format&fit=crop"/g, 'src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop"');

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Homepage images updated');
