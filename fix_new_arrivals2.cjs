const fs = require('fs');
let code = fs.readFileSync('src/pages/NewArrivals.tsx', 'utf8');

code = code.replace(
  /<img[\s\S]*?src=\{item\.image\}[\s\S]*?\/>/m,
  `<ImageWithSkeleton src={item.image} alt={item.title} className="w-full h-full absolute inset-0 z-10" imgClassName="group-hover:scale-105 transition-transform duration-1000" />`
);

fs.writeFileSync('src/pages/NewArrivals.tsx', code);
console.log("Updated NewArrivals.tsx");
