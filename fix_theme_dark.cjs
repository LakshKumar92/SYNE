const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.theme-dark\s*{[^}]*}/, `.theme-dark {
    --color-primary: #1C1B1A;
    --color-on-primary: #FAF8F5;
    --color-primary-container: #262524;
    --color-on-primary-container: #A39F99;
    
    --color-secondary: #D09B7A; 
    --color-on-secondary: #1C1B1A;
    
    --color-secondary-container: #332B25;
    --color-on-secondary-container: #FAF8F5;
    
    --color-tertiary: #1C1B1A;
    --color-on-tertiary: #FAF8F5;
    
    --color-tertiary-container: #262524;
    --color-on-tertiary-container: #A39F99;
    
    --color-surface: #1C1B1A;
    --color-on-surface: #FAF8F5;
    
    --color-surface-variant: #262524;
    --color-on-surface-variant: #A39F99;
    
    --color-outline: #FAF8F5;
    --color-outline-variant: #3D3B39;
    
    --color-surface-container-lowest: #141312;
    --color-surface-container-low: #1C1B1A;
    --color-surface-container: #262524;
    --color-surface-container-high: #2E2D2B;
    --color-surface-container-highest: #383634;
  }`);

fs.writeFileSync('src/index.css', css);
console.log("Updated theme-dark in index.css");
