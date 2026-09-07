const fs = require('fs');
let code = fs.readFileSync('src/pages/Profile.tsx', 'utf8');

// The main EDIT PROFILE button
code = code.replace(/bg-on-primary text-primary/g, 'bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary');

// The SIGN OUT button
code = code.replace(/hover:border-on-primary hover:text-on-primary/g, 'hover:border-secondary hover:text-secondary');

fs.writeFileSync('src/pages/Profile.tsx', code);
console.log('Added warm accents to Profile');
