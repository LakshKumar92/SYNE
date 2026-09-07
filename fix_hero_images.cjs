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

// Ensure background position is appropriate, bg-center is usually best for full-body shots if they are well-framed.
code = code.replace(/bg-cover bg-top/g, 'bg-cover bg-[center_top_15%]');

fs.writeFileSync('src/pages/Home.tsx', code);
