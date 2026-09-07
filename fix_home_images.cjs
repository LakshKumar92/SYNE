const fs = require('fs');

async function fixImages() {
    let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');
    
    // Find all Unsplash images in the Home.tsx file
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?q=80&w=\d+&auto=format&fit=crop/g;
    const matches = code.match(regex) || [];
    
    let changed = false;
    let index = 1;
    
    for (let url of matches) {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            if (res.status !== 200) {
                console.log(`Dead image found in Home (${res.status}): ${url}`);
                // Replace with picsum seed
                code = code.replace(url, `https://picsum.photos/seed/editorial_home_${index}/800/1000`);
                changed = true;
            } else {
                console.log(`OK: ${url}`);
            }
        } catch (e) {
            console.log(`Error fetching ${url}: ${e.message}`);
            code = code.replace(url, `https://picsum.photos/seed/editorial_home_${index}/800/1000`);
            changed = true;
        }
        index++;
    }
    
    if (changed) {
        fs.writeFileSync('src/pages/Home.tsx', code);
        console.log("Updated Home.tsx with working images.");
    } else {
        console.log("All Home images are working.");
    }
}

fixImages();
