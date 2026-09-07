const fs = require('fs');

let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const newHeroImages = `const heroImages = [
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2000&auto=format&fit=crop", // Shirt
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2000&auto=format&fit=crop", // Pants
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=2000&auto=format&fit=crop", // Shoes
  "https://images.unsplash.com/photo-1489987707023-afc31e66bf45?q=80&w=2000&auto=format&fit=crop", // Clothes rack
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2000&auto=format&fit=crop"  // Leather jacket
];`;

// Replace heroImages
code = code.replace(/const heroImages = \[[\s\S]*?\];/, newHeroImages);

// Remove mix-blend-luminosity and change opacity-50 to opacity-80 or 70 (so it's colorful but still lets some shader through or just looks nice)
code = code.replace(/mix-blend-luminosity/g, '');
code = code.replace(/'opacity-50'/g, "'opacity-80'");

// Fix the radial gradient vignette to use the primary color (FAF8F5 which is approx 250, 248, 245) instead of black
code = code.replace(/rgba\(0,0,0,0\.7\)/g, 'rgba(250,248,245,0.7)');

// The text currently has drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)], which might look bad on a light background.
// Change to a lighter shadow or remove it.
code = code.replace(/drop-shadow-\[0_4px_24px_rgba\(0,0,0,0\.8\)\]/g, 'drop-shadow-[0_4px_24px_rgba(250,248,245,0.8)]');

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Home images and blending updated');
