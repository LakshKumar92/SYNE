const { initialProducts } = require('./dist/server.cjs'); // Wait, we can't easily import TS directly without ts-node, let's just parse the file.
const fs = require('fs');

const code = fs.readFileSync('src/data/products.ts', 'utf8');
const match = code.match(/export const initialProducts: Product\[\] = (\[[\s\S]*\]);/);
if(match) {
    const products = JSON.parse(match[1]);
    console.log(`Checking ${products.length} images...`);
    
    // We'll just check a few or all of them quickly via fetch.
    async function checkAll() {
        let failures = 0;
        for(let p of products) {
            try {
                const res = await fetch(p.image, { method: 'HEAD' });
                if (!res.ok) {
                    console.log(`FAILED: ${p.image} - ${res.status}`);
                    failures++;
                }
            } catch (e) {
                console.log(`ERROR: ${p.image} - ${e.message}`);
                failures++;
            }
        }
        console.log(`Done. Failures: ${failures}`);
    }
    checkAll();
}
