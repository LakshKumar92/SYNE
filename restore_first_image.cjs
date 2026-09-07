const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// The first image was "https://images.unsplash.com/photo-1485968579580-b6d095142e6e..." originally.
// Let's find what is currently in the first 'a' tag of that section and replace it.

const matches = Array.from(code.matchAll(/src="https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?q=80&w=1000&auto=format&fit=crop"/g));
// 0, 1, 2 should be the three images.
if (matches.length >= 3) {
   const firstImg = matches[0][0];
   code = code.replace(firstImg, 'src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop"');
   const secondImg = matches[1][0];
   code = code.replace(secondImg, 'src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop"');
   const thirdImg = matches[2][0];
   code = code.replace(thirdImg, 'src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop"');
}

fs.writeFileSync('src/pages/Home.tsx', code);
