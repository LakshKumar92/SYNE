const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /<img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src=\{item\.image\} alt=\{item\.title\} \/>/ms,
  `<ImageWithSkeleton src={item.image} alt={item.title} className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />`
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log("Updated Home.tsx");
