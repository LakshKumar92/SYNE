const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(/alt="High-fashion draped dress"/g, 'alt="Timeless Evening Wear"');
code = code.replace(/alt="High-fashion editorial grid design"/g, 'alt="Editorial Outerwear"');
code = code.replace(/alt="Tailored precision jackets"/g, 'alt="Urban Utility Wear"');

fs.writeFileSync('src/pages/Home.tsx', code);
