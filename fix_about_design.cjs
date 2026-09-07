const fs = require('fs');
let code = fs.readFileSync('src/pages/About.tsx', 'utf8');

// Replace standard images with rounded ones
// The hero image
code = code.replace(
  /className="aspect-\[16\/9\] md:aspect-\[21\/9\] bg-surface border-y border-outline-variant relative overflow-hidden group"/g,
  'className="aspect-[16/9] md:aspect-[21/9] bg-surface relative overflow-hidden group mx-margin-mobile md:mx-margin-desktop rounded-[2rem] border border-outline-variant/30"'
);

// Explore archive button
code = code.replace(
  /className="inline-block border border-on-primary px-8 py-4 text-xs uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-colors"/g,
  'className="inline-block border border-on-primary px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300 rounded-full"'
);

// The Studio image
code = code.replace(
  /className="aspect-\[3\/4\] bg-surface border border-outline-variant relative overflow-hidden group"/g,
  'className="aspect-[3/4] bg-surface border border-outline-variant/30 relative overflow-hidden group rounded-[2rem]"'
);

// Replace "The Studio" label with the terracotta secondary
code = code.replace(
  /className="text-xs uppercase tracking-widest text-on-primary-container block mb-4"/g,
  'className="text-[11px] uppercase tracking-[0.25em] text-secondary block mb-4"'
);
code = code.replace(
  /className="font-headline-md text-4xl mb-8"/g,
  'className="font-display-lg text-5xl lg:text-7xl mb-8 italic tracking-tight"'
);

// Pillars numbers
code = code.replace(
  /className="text-xs uppercase tracking-widest text-on-primary-container block"/g,
  'className="text-[11px] uppercase tracking-[0.25em] text-secondary block"'
);
// Make the pillar headers Playfair
code = code.replace(
  /className="font-headline-md text-2xl mb-4"/g,
  'className="font-headline-md text-2xl mb-4 italic"'
);

fs.writeFileSync('src/pages/About.tsx', code);
console.log('Fixed About design');
