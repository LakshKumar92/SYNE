const fs = require('fs');
let code = fs.readFileSync('src/pages/NewArrivals.tsx', 'utf8');

code = code.replace(
  /<img[\s\S]*?src=\{product\.image\}[\s\S]*?\/>/m,
  `<ImageWithSkeleton src={product.image} alt={product.title} className="w-full h-full absolute inset-0 z-10" imgClassName="group-hover:scale-105 transition-transform duration-1000" />`
);

fs.writeFileSync('src/pages/NewArrivals.tsx', code);
console.log("Updated NewArrivals.tsx");
