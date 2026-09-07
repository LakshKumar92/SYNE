const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Add import
const importStatement = `import { ImageMappingService } from '../services/ImageMappingService';\n`;
if (!code.includes('ImageMappingService')) {
  code = code.replace(`import { Link } from 'react-router-dom';`, `import { Link } from 'react-router-dom';\n${importStatement}`);
}

// Replace the 4 hero images with dedicated mappings
const u1 = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1500&auto=format&fit=crop';
const u2 = 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop';
const u3 = 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop';
const u4 = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop';

code = code.replace(u1, `ImageMappingService.getImageUrl('Womenswear', 'Shirts', 'Hourglass', 991)`);
// Note: u1 is inside JSX quotes usually: src="https..."
// Let's replace the whole src="..." 
code = code.replace(`src="${u1}"`, `src={ImageMappingService.getImageUrl('Womenswear', 'Shirts', 'Hourglass', 991)}`);
code = code.replace(`src="${u2}"`, `src={ImageMappingService.getImageUrl('Womenswear', 'Pants', 'Slim', 992)}`);
code = code.replace(`src="${u3}"`, `src={ImageMappingService.getImageUrl('Menswear', 'Shirts', 'Broad', 993)}`);
code = code.replace(`src="${u4}"`, `src={ImageMappingService.getImageUrl('Menswear', 'Shoes', 'Athletic', 994)}`);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log("Updated Home.tsx with ImageMappingService");
