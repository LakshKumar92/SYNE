const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

const regex = /<motion\.img[\s\S]*?src=\{item\.image\}[\s\S]*?\/>/m;
code = code.replace(regex, `<ImageWithSkeleton 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full absolute inset-0 z-10"
                      imgClassName="group-hover:scale-105 transition-transform duration-1000"
                    />`);

fs.writeFileSync('src/pages/Collections.tsx', code);
console.log("Regex replaced Image");
