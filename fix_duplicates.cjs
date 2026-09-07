const fs = require('fs');

async function getImagesFromUnsplash(query) {
    console.log(`Fetching images for ${query}...`);
    const res = await fetch(`https://unsplash.com/s/photos/${query}`);
    const html = await res.text();
    const regex = /images\.unsplash\.com\/(photo-[a-zA-Z0-9\-]+)/g;
    let match;
    const ids = new Set();
    while ((match = regex.exec(html)) !== null) {
        ids.add(match[1]);
    }
    const arr = [...ids].map(id => `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`);
    console.log(`Found ${arr.length} unique images for ${query}.`);
    return arr;
}

async function fixDuplicates() {
    let code = fs.readFileSync('src/data/products.ts', 'utf8');
    const match = code.match(/export const initialProducts: Product\[\] = (\[[\s\S]*\]);/);
    if (!match) return console.log("No products array found");
    
    let products = JSON.parse(match[1]);

    const usedImages = new Set();
    const pools = {
        'Shirts': await getImagesFromUnsplash('mens-designer-shirt'),
        'Pants': await getImagesFromUnsplash('designer-trousers'),
        'Shoes': await getImagesFromUnsplash('designer-shoes')
    };
    
    let changed = false;
    
    for (let p of products) {
        if (usedImages.has(p.image)) {
            // Find a new image from the pool
            let pool = pools[p.category] || pools['Shirts'];
            let newImg = null;
            
            // Just to be safe, filter the pool so it doesn't overlap with already used ones
            for (let img of pool) {
                if (!usedImages.has(img)) {
                    newImg = img;
                    break;
                }
            }
            
            if (newImg) {
                console.log(`Replacing duplicate for [${p.category}] ${p.title} with ${newImg}`);
                p.image = newImg;
                usedImages.add(newImg);
                changed = true;
            } else {
                console.log(`Not enough unique images for ${p.category}!`);
            }
        } else {
            usedImages.add(p.image);
        }
    }
    
    if (changed) {
        const newProductsStr = JSON.stringify(products, null, 2);
        code = code.replace(match[1], newProductsStr);
        fs.writeFileSync('src/data/products.ts', code);
        console.log("Fixed duplicates.");
    } else {
        console.log("No duplicates found.");
    }
}
fixDuplicates();
