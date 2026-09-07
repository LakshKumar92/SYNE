const fs = require('fs');

let headerCode = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Let's completely remove the blur because heavy blurs can cause Chrome to render them extremely white over certain backgrounds.
// Let's just use bg-primary (100% opaque) and no blur, or very very light.
headerCode = headerCode.replace(/bg-primary\/95 backdrop-blur-sm/, 'bg-primary');

fs.writeFileSync('src/components/Header.tsx', headerCode);

