const fs = require('fs');

const validShirts = [
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop"
];

const validPants = [
  "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584323803806-7b041fea92f4?q=80&w=800&auto=format&fit=crop"
];

const validShoes = [
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop"
];

let code = fs.readFileSync('src/data/products.ts', 'utf8');
const match = code.match(/export const initialProducts: Product\[\] = (\[[\s\S]*\]);/);
if (match) {
    let products = JSON.parse(match[1]);
    let changed = false;
    
    let shirtIdx = 0;
    let pantIdx = 0;
    let shoeIdx = 0;
    
    for (let p of products) {
        if (p.image.includes('picsum.photos')) {
            if (p.category === 'Shirts') {
                p.image = validShirts[shirtIdx % validShirts.length];
                shirtIdx++;
            } else if (p.category === 'Pants') {
                p.image = validPants[pantIdx % validPants.length];
                pantIdx++;
            } else if (p.category === 'Shoes') {
                p.image = validShoes[shoeIdx % validShoes.length];
                shoeIdx++;
            }
            changed = true;
        }
    }
    
    if (changed) {
        const newProductsStr = JSON.stringify(products, null, 2);
        code = code.replace(match[1], newProductsStr);
        fs.writeFileSync('src/data/products.ts', code);
        console.log("Fixed dummy images with actual clothing images.");
    }
}
