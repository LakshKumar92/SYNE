const fs = require('fs');
let code = fs.readFileSync('src/pages/Account.tsx', 'utf8');

// Replace border-on-surface with border-secondary for accents
code = code.replace(/border-l-2 border-on-surface/g, 'border-l-2 border-secondary text-secondary');
code = code.replace(/bg-surface text-on-surface border-l-2/g, 'bg-surface text-secondary border-l-2');

// Make the hover states of sidebar links use text-secondary
code = code.replace(/hover:text-on-surface/g, 'hover:text-secondary');

// View order button
code = code.replace(/hover:border-on-surface hover:bg-on-surface hover:text-surface/g, 'hover:border-secondary hover:bg-secondary hover:text-white');
// The button has text-on-surface, let's change it to text-secondary
code = code.replace(/rounded flex items-center gap-2 text-on-surface/g, 'rounded flex items-center gap-2 text-secondary');

// Quick view buttons
code = code.replace(/hover:bg-on-surface hover:text-surface/g, 'hover:bg-secondary hover:text-white');
code = code.replace(/translate-y-0 text-on-surface/g, 'translate-y-0 text-secondary');

fs.writeFileSync('src/pages/Account.tsx', code);
console.log('Added warm accents to Account');
