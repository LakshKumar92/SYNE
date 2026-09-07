const fs = require('fs');

async function fixImages() {
    let code = fs.readFileSync('src/data/products.ts', 'utf8');
    const match = code.match(/export const initialProducts: Product\[\] = (\[[\s\S]*\]);/);
    if (!match) {
        console.log("Could not find products array.");
        return;
    }
    
    let products = JSON.parse(match[1]);
    let changed = false;
    
    for (let i = 0; i < products.length; i++) {
        let p = products[i];
        try {
            const res = await fetch(p.image, { method: 'HEAD' });
            if (res.status !== 200) {
                console.log(`Dead image found (${res.status}): ${p.image}`);
                p.image = `https://picsum.photos/seed/editorial_fashion_${p.id}/800/1000`;
                changed = true;
            } else {
                console.log(`OK: ${p.image}`);
            }
        } catch (e) {
            console.log(`Error fetching ${p.image}: ${e.message}`);
            p.image = `https://picsum.photos/seed/editorial_fashion_${p.id}/800/1000`;
            changed = true;
        }
    }
    
    if (changed) {
        const newProductsStr = JSON.stringify(products, null, 2);
        code = code.replace(match[1], newProductsStr);
        fs.writeFileSync('src/data/products.ts', code);
        console.log("Updated products.ts with working images.");
    } else {
        console.log("All images are working.");
    }
}

fixImages();
