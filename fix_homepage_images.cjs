const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Hero Images
const newHeroImages = `const heroImages = [
  "https://images.unsplash.com/photo-1492633423594-469a4c58f005?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1524504388266-1c731e0f0653?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1494326588939-505f98a287ee?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1516762689616-e1e405103c80?q=80&w=2000&auto=format&fit=crop"
];`;
code = code.replace(/const heroImages = \[[\s\S]*?\];/, newHeroImages);

// 2. Bottom 3 Curated Images
// Image 1
code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"]+"/g,
  (match, offset, original) => {
     // I need to be careful here not to overwrite the hero images I just replaced.
     return match;
  }
);
// Safer replacement for the 3 images in the Latest Collection block
code = code.replace(
  /<img className="w-full h-full object-\[center_top\] transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105" src="[^"]+" alt="Timeless Evening Wear" \/>/,
  '<img className="w-full h-full object-[center_top] transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105" src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop" alt="Silk & Drape Elements" />'
);
code = code.replace(
  /<h3 className="font-body-md text-body-md text-on-primary\/90 group-hover:text-on-primary transition-colors">Timeless Evening Wear<\/h3>/,
  '<h3 className="font-body-md text-body-md text-on-primary/90 group-hover:text-on-primary transition-colors">Silk & Drape Elements</h3>'
);

code = code.replace(
  /<img className="w-full h-full object-\[center_top\] transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105" src="[^"]+" alt="Editorial Outerwear" \/>/,
  '<img className="w-full h-full object-[center_top] transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop" alt="Structured Silhouettes" />'
);
code = code.replace(
  /<h3 className="font-body-md text-body-md text-on-primary\/90 group-hover:text-on-primary transition-colors">Editorial Outerwear<\/h3>/,
  '<h3 className="font-body-md text-body-md text-on-primary/90 group-hover:text-on-primary transition-colors">Structured Silhouettes</h3>'
);

code = code.replace(
  /<img className="w-full h-full object-\[center_top\] transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105" src="[^"]+" alt="Urban Utility Wear" \/>/,
  '<img className="w-full h-full object-[center_top] transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105" src="https://images.unsplash.com/photo-1475181128362-790100f2824e?q=80&w=1000&auto=format&fit=crop" alt="Elevated Essentials" />'
);
code = code.replace(
  /<h3 className="font-body-md text-body-md text-on-primary\/90 group-hover:text-on-primary transition-colors">Urban Utility Wear<\/h3>/,
  '<h3 className="font-body-md text-body-md text-on-primary/90 group-hover:text-on-primary transition-colors">Elevated Essentials</h3>'
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Homepage images updated');
