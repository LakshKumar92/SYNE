const fs = require('fs');
const code = fs.readFileSync('src/data/products.ts', 'utf8');
const match = code.match(/export const initialProducts: Product\[\] = (\[[\s\S]*\]);/);
const products = JSON.parse(match[1]);

for (let i = 0; i < products.length; i++) {
  console.log(`${i+1}: ${products[i].title} - ${products[i].image}`);
}
