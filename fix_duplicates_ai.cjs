const fs = require('fs');

const potentialIds = [
  '1532453288672-3a27e9be9efd',
  '1509319117193-57bab727e09d',
  '1490481651871-ab68de25d43d',
  '1483985988355-763728e1935b',
  '1445205170230-053b83016050',
  '1517841905240-472988babdf9',
  '1524504280061-33f0e8a75ce8',
  '1469334031218-e382a71b716b',
  '1502716119720-b23a93e5fe1b',
  '1495385794356-15371f348c31',
  '1485230405346-71acb9518d9c',
  '1475179604612-9c3f4e1f72df',
  '1434389678369-0268571c4801',
  '1487222477894-8943e31ef7b2',
  '1503342217505-b0a15ec3261c',
  '1496747611176-843222e1e57c',
  '1495121605193-b116b5b9c5fe',
  '1503341455253-b2e723bb3dbb',
  '1529139574466-a303027c1d8b',
  '1492707892479-7bc8d5a4ee93',
  '1487920786523-952b1b36bb03',
  '1499939667732-c280dc5824e0',
  '1485968579580-b6d095142e6e',
  '1543163521-1bf539c55dd2',
  '1512436991641-6745cdb1723f',
  '1483985988355-763728e1935b',
  '1484081064812-8d88456ea74f',
  '1462392246754-28dfa2df8e6b'
];

async function fix() {
    let code = fs.readFileSync('src/data/products.ts', 'utf8');
    const match = code.match(/export const initialProducts: Product\[\] = (\[[\s\S]*\]);/);
    if(!match) return;
    
    let products = JSON.parse(match[1]);
    let usedImages = new Set();
    
    // Pass 1: Add existing unique images to the set
    for (let p of products) {
        usedImages.add(p.image);
    }
    
    console.log(`Currently using ${usedImages.size} unique images for 30 products.`);
    
    // Gather valid backup images
    let validBackups = [];
    for (let id of potentialIds) {
        let url = `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`;
        if (usedImages.has(url)) continue; // already used
        
        try {
            const res = await fetch(url, { method: 'HEAD' });
            if (res.status === 200) {
                validBackups.push(url);
            }
        } catch(e) {}
    }
    
    console.log(`Found ${validBackups.length} valid unique backups.`);
    
    // Pass 2: Replace duplicates
    usedImages.clear();
    let changed = false;
    
    for (let p of products) {
        if (usedImages.has(p.image)) {
            if (validBackups.length > 0) {
                let newImg = validBackups.shift();
                console.log(`Replaced duplicate for ${p.title} with ${newImg}`);
                p.image = newImg;
                usedImages.add(newImg);
                changed = true;
            } else {
                console.log(`Ran out of backups for ${p.title}!`);
            }
        } else {
            usedImages.add(p.image);
        }
    }
    
    if (changed) {
        const newStr = JSON.stringify(products, null, 2);
        code = code.replace(match[1], newStr);
        fs.writeFileSync('src/data/products.ts', code);
        console.log("Products successfully updated without duplicates!");
    }
}
fix();
