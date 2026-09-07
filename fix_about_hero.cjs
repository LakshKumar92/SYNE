const fs = require('fs');
let code = fs.readFileSync('src/pages/About.tsx', 'utf8');

// Update Hero heading to Playfair Display italic
code = code.replace(
  /className="font-headline-md text-5xl md:text-8xl tracking-tight mb-8 leading-\[0\.9\]"/g,
  'className="font-display-lg text-6xl md:text-8xl tracking-tight mb-8 leading-[0.9] italic"'
);

code = code.replace(
  /<span className="text-on-primary-container">Of Subtraction\.<\/span>/g,
  '<span className="text-secondary">Of Subtraction.</span>'
);

code = code.replace(
  /className="font-headline-md text-3xl md:text-5xl text-center max-w-3xl leading-snug px-6 text-on-primary"/g,
  'className="relative z-10 font-display-lg italic text-3xl md:text-5xl text-center max-w-3xl leading-snug px-6 text-on-primary"'
);

fs.writeFileSync('src/pages/About.tsx', code);
console.log('Fixed About hero');
