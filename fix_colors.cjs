const fs = require('fs');

const files = {
  'src/pages/Home.tsx': [
    { target: /bg-\[#E5D5C5\]\/40/g, replacement: 'bg-secondary-container/40' },
    { target: /bg-\[#F0EBE1\]/g, replacement: 'bg-primary-container' },
    { target: /bg-\[#FAF7F2\]/g, replacement: 'bg-primary' },
    { target: /bg-\[#EAE2D8\]\/50/g, replacement: 'bg-surface-variant/50' },
    { target: /bg-\[#EAE2D8\]/g, replacement: 'bg-surface-variant' }
  ],
  'src/pages/NewArrivals.tsx': [
    { target: /bg-\[#F3E5D8\]/g, replacement: 'bg-surface-variant' }
  ],
  'src/pages/Collections.tsx': [
    { target: /bg-\[#EAE2D8\]/g, replacement: 'bg-surface-variant' }
  ],
  'src/components/Footer.tsx': [
    { target: /bg-\[#F3E5D8\]/g, replacement: 'bg-surface-variant' }
  ],
  'src/components/Header.tsx': [
    { target: /bg-\[#F3E5D8\]\/90/g, replacement: 'bg-surface-variant/90' },
    { target: /border-\[#E8CBAF\]\/40/g, replacement: 'border-outline-variant/60' },
    { target: /text-\[#F8F4EF\]/g, replacement: 'text-surface' }
  ],
  'src/components/ImageWithSkeleton.tsx': [
    { target: /bg-\[#E5DCD0\]/g, replacement: 'bg-surface-container-highest' },
    { target: /rgba\(255, 255, 255, 0\.4\)/g, replacement: 'rgba(255, 255, 255, 0.2)' } // less harsh in dark mode? wait, lenis is already there. For skeleton, we might want dynamic gradient but white 0.2 is ok for dark/light if subtle.
  ]
};

for (const [file, replacements] of Object.entries(files)) {
  let content = fs.readFileSync(file, 'utf8');
  for (const { target, replacement } of replacements) {
    content = content.replace(target, replacement);
  }
  fs.writeFileSync(file, content);
}

// Update index.css
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/\.theme-dark\s*{[^}]*}/, `.theme-dark {
    --color-primary: #0C0C0C;
    --color-on-primary: #F4F4F5;
    --color-primary-container: #18181B;
    --color-on-primary-container: #A1A1AA;
    
    --color-secondary: #E3B294; 
    --color-on-secondary: #09090B;
    
    --color-secondary-container: #2A221E;
    --color-on-secondary-container: #F4F4F5;
    
    --color-tertiary: #0C0C0C;
    --color-on-tertiary: #F4F4F5;
    
    --color-tertiary-container: #18181B;
    --color-on-tertiary-container: #A1A1AA;
    
    --color-surface: #0C0C0C;
    --color-on-surface: #F4F4F5;
    
    --color-surface-variant: #111113;
    --color-on-surface-variant: #A1A1AA;
    
    --color-outline: #F4F4F5;
    --color-outline-variant: #27272A;
    
    --color-surface-container-lowest: #000000;
    --color-surface-container-low: #09090B;
    --color-surface-container: #111113;
    --color-surface-container-high: #18181B;
    --color-surface-container-highest: #27272A;
  }`);
fs.writeFileSync('src/index.css', css);

console.log("Colors fixed");
