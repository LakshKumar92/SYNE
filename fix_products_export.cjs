const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

if (code.includes('export const products: Product[] =')) {
    code = code.replace('export const products: Product[] =', 'export const initialProducts: Product[] =');
    fs.writeFileSync('src/data/products.ts', code);
    console.log('Fixed export in products.ts');
}
