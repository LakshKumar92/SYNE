const fs = require('fs');

// 1. Update Home.tsx with full body images
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const fullBodyImages = `const heroImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop", // Woman walking in coat
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000&auto=format&fit=crop", // Woman in trendy outfit
  "https://images.unsplash.com/photo-1509631179647-0c5000508c11?q=80&w=2000&auto=format&fit=crop", // Man in streetwear
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", // Woman walking in city
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"  // Woman in vintage dress
];`;

homeCode = homeCode.replace(/const heroImages = \[[\s\S]*?\];/, fullBodyImages);
fs.writeFileSync('src/pages/Home.tsx', homeCode);


// 2. Update products.ts with clothing item images
const clothingImages = [
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop", // White shirt
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop", // Jeans
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop", // Shoes
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop", // Leather jacket
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop", // Colorful shirt
  "https://images.unsplash.com/photo-1542272604-780c8d52a5ce?q=80&w=800&auto=format&fit=crop", // Denim jacket/jeans
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop", // Nike shoe
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop", // Knit sweater
  "https://images.unsplash.com/photo-1604176354204-926873812d4e?q=80&w=800&auto=format&fit=crop", // Cargo pants
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop", // Sneakers
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop", // Black t-shirt
  "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop", // Leather bag
  "https://images.unsplash.com/photo-1578587018452-892bace0353c?q=80&w=800&auto=format&fit=crop", // Winter coat
  "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=800&auto=format&fit=crop", // High-waisted jeans
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop", // Vans shoes
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop", // Striped shirt
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"  // Dress shoes
];

let productsCode = fs.readFileSync('src/data/products.ts', 'utf8');

// Replace all occurrences of "image": "https://loremflickr.com/..." with a cycled clothing image
let imageIndex = 0;
productsCode = productsCode.replace(/"image":\s*"https:\/\/loremflickr\.com[^"]+"/g, (match) => {
  const replacement = `"image": "${clothingImages[imageIndex % clothingImages.length]}"`;
  imageIndex++;
  return replacement;
});

fs.writeFileSync('src/data/products.ts', productsCode);

console.log('Images updated successfully!');
