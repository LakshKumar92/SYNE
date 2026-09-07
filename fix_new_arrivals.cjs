const fs = require('fs');
let code = fs.readFileSync('src/pages/NewArrivals.tsx', 'utf8');

if (!code.includes('ImageWithSkeleton')) {
  code = code.replace(`import { motion, useScroll, useTransform } from 'framer-motion';`, `import { motion, useScroll, useTransform } from 'framer-motion';\nimport { ImageWithSkeleton } from '../components/ImageWithSkeleton';`);
}
if (!code.includes('ImageMappingService')) {
  code = code.replace(`import { motion`, `import { ImageMappingService } from '../services/ImageMappingService';\nimport { motion`);
}

// Check if we need to replace specific img tags
// Let's replace the first one
code = code.replace(
  /<img[\s\S]*?src=\{item\.image\}[\s\S]*?\/>/ms,
  `<ImageWithSkeleton src={item.image} alt={item.title} className="w-full h-full absolute inset-0 z-10" imgClassName="group-hover:scale-105 transition-transform duration-1000" />`
);

code = code.replace(
  /<img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?q=80&w=1200&auto=format&fit=crop" alt="Winter Capsule Preview" \/>/ms,
  `<ImageWithSkeleton src={ImageMappingService.getImageUrl('Menswear', 'Shirts', 'Athletic', 995)} alt="Winter Capsule Preview" className="w-full h-full absolute inset-0" imgClassName="group-hover:scale-105 transition-transform duration-1000" />`
);

fs.writeFileSync('src/pages/NewArrivals.tsx', code);
console.log("Updated NewArrivals.tsx");
