const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

code = code.replace(
  /<motion.img\s+className="product-image w-full h-full object-cover"\s+src=\{item\.image\}\s+alt=\{item\.title\}/g,
  '<motion.img \n                    loading="lazy"\n                    className="product-image w-full h-full object-cover" \n                    src={item.image} \n                    alt={item.title}'
);

fs.writeFileSync('src/pages/Collections.tsx', code);
console.log('Added lazy loading');
