const fs = require('fs');
const code = fs.readFileSync('src/data/products.ts', 'utf8');
const match = code.match(/export const initialProducts: Product\[\] = (\[[\s\S]*\]);/);
const products = JSON.parse(match[1]);
const map = new Map();
for(let p of products) {
  if(!map.has(p.image)) map.set(p.image, []);
  map.get(p.image).push(p.title);
}
for (let [img, titles] of map.entries()) {
  console.log(`${img} -> ${titles.length} uses (${titles.join(', ')})`);
}
