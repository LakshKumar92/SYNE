const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

// Update product image container
code = code.replace(
  /className="product-image-container aspect-\[4\/5\] bg-tertiary-container relative rounded-sm overflow-hidden"/g,
  'className="product-image-container aspect-[4/5] bg-tertiary-container relative rounded-[2rem] border border-outline-variant/30 overflow-hidden"'
);

// Update Quick Add button
code = code.replace(
  /className="group\/btn flex-1 py-2\.5 px-3 bg-primary\/80 hover:bg-on-primary hover:text-primary backdrop-blur-md border border-outline\/20 text-on-primary text-\[11px\] uppercase tracking-\[0\.2em\] transition-all duration-300 rounded-full flex items-center justify-center gap-1\.5 shadow-lg"/g,
  'className="group/btn flex-1 py-3 px-6 bg-primary/95 backdrop-blur-md text-on-primary text-[11px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center gap-1.5 shadow-lg"'
);

// Update tags at the bottom of the card
code = code.replace(
  /className="px-2 py-0\.5 bg-primary-container text-on-primary-container text-\[11px\] uppercase tracking-\[0\.2em\] rounded-sm border border-outline-variant\/30"/g,
  'className="px-3 py-1 bg-primary/90 text-on-primary text-[10px] uppercase tracking-widest rounded-full border border-outline-variant/30 backdrop-blur-sm"'
);

// Update the active state of filter buttons in the sidebar to use secondary (terracotta)
code = code.replace(
  /isActive \? 'border-b border-on-primary pb-0\.5 text-on-primary font-medium' : 'text-on-primary-container hover:text-on-primary transform hover:translate-x-1'/g,
  "isActive ? 'border-b border-secondary pb-0.5 text-secondary font-medium' : 'text-on-primary-container hover:text-secondary transform hover:translate-x-1'"
);
// The little dot next to the active filter
code = code.replace(
  /className={`w-1 h-1 rounded-full bg-on-primary transition-opacity duration-300 \$\{isActive \? 'w-1\.5 h-1\.5 opacity-100' : 'opacity-0 group-hover:opacity-100'\}`\}/g,
  'className={`w-1 h-1 rounded-full bg-secondary transition-opacity duration-300 ${isActive ? \'w-1.5 h-1.5 opacity-100\' : \'opacity-0 group-hover:opacity-100\'}`}'
);

// Price filter
code = code.replace(
  /border-b border-on-primary\/60 hover:border-on-primary pb-2 font-body-md text-on-primary transition-colors duration-300 cursor-pointer flex items-center justify-between/g,
  'border-b border-outline-variant/60 hover:border-secondary hover:text-secondary pb-2 font-body-md text-on-primary transition-colors duration-300 cursor-pointer flex items-center justify-between'
);

fs.writeFileSync('src/pages/Collections.tsx', code);
console.log('Fixed Collections design');
