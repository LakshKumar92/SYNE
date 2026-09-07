const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');
// The images on the bottom are using `object-cover`. Since the user complained about heads being cropped,
// we can use `object-[center_top_20%]` or `object-top` for these portrait images to ensure the head/upper body is visible.

code = code.replace(/<img className="w-full h-full object-cover transition-transform/g, '<img className="w-full h-full object-[center_top] transition-transform');
fs.writeFileSync('src/pages/Home.tsx', code);
