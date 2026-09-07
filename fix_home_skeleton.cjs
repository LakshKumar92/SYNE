const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

if (!code.includes('ImageWithSkeleton')) {
  code = code.replace(`import { ImageMappingService } from '../services/ImageMappingService';`, `import { ImageMappingService } from '../services/ImageMappingService';\nimport { ImageWithSkeleton } from '../components/ImageWithSkeleton';`);
}

// Hero Image
code = code.replace(
  /<img[\s]*src=\{ImageMappingService.getImageUrl\('Womenswear', 'Shirts', 'Hourglass', 991\)\}[\s]*alt="Editorial Fashion"[\s]*className="w-full h-full object-cover"[\s]*referrerPolicy="no-referrer"[\s]*\/>/ms,
  `<ImageWithSkeleton src={ImageMappingService.getImageUrl('Womenswear', 'Shirts', 'Hourglass', 991)} alt="Editorial Fashion" className="w-full h-full" imgClassName="w-full h-full object-cover" />`
);

// We have 3 smaller images at the bottom.
const regexes = [
  /<img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src=\{ImageMappingService\.getImageUrl\('Womenswear', 'Pants', 'Slim', 992\)\} alt="Silk & Drape Elements" \/>/ms,
  /<img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src=\{ImageMappingService\.getImageUrl\('Menswear', 'Shirts', 'Broad', 993\)\} alt="Structured Silhouettes" \/>/ms,
  /<img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src=\{ImageMappingService\.getImageUrl\('Menswear', 'Shoes', 'Athletic', 994\)\} alt="Elevated Essentials" \/>/ms
];

code = code.replace(regexes[0], `<ImageWithSkeleton src={ImageMappingService.getImageUrl('Womenswear', 'Pants', 'Slim', 992)} alt="Silk & Drape Elements" className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />`);
code = code.replace(regexes[1], `<ImageWithSkeleton src={ImageMappingService.getImageUrl('Menswear', 'Shirts', 'Broad', 993)} alt="Structured Silhouettes" className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />`);
code = code.replace(regexes[2], `<ImageWithSkeleton src={ImageMappingService.getImageUrl('Menswear', 'Shoes', 'Athletic', 994)} alt="Elevated Essentials" className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />`);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log("Updated Home.tsx");
