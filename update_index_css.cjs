const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Replace base colors
css = css.replace(/:root\s*\{([^}]*)\}/, (match, p1) => {
  return `:root {
    --color-primary: #FAF8F5;
    --color-on-primary: #2A2826;
    --color-primary-container: #F0EBE1;
    --color-on-primary-container: #8C857B;
    --color-secondary: #C08768; /* muted terracotta/camel */
    --color-on-secondary: #FAF8F5;
    --color-secondary-container: #E6D5C9;
    --color-on-secondary-container: #2A2826;
    --color-tertiary: #FAF8F5;
    --color-on-tertiary: #2A2826;
    --color-tertiary-container: #F0EBE1;
    --color-on-tertiary-container: #8C857B;
    --color-surface: #FAF8F5;
    --color-on-surface: #2A2826;
    --color-surface-variant: #F0EBE1;
    --color-on-surface-variant: #8C857B;
    --color-outline: #2A2826;
    --color-outline-variant: #D9D2C5;
    --color-surface-container-lowest: #FFFFFF;
    --color-surface-container-low: #FAF8F5;
    --color-surface-container: #F0EBE1;
    --color-surface-container-high: #EBE5D9;
    --color-surface-container-highest: #E0D9CB;
  }`;
});

css = css.replace(/\.theme-dark\s*\{([^}]*)\}/, (match, p1) => {
  return `.theme-dark {
    --color-primary: #FAF8F5;
    --color-on-primary: #2A2826;
    --color-primary-container: #F0EBE1;
    --color-on-primary-container: #8C857B;
    --color-secondary: #C08768;
    --color-on-secondary: #FAF8F5;
    --color-secondary-container: #E6D5C9;
    --color-on-secondary-container: #2A2826;
    --color-tertiary: #FAF8F5;
    --color-on-tertiary: #2A2826;
    --color-tertiary-container: #F0EBE1;
    --color-on-tertiary-container: #8C857B;
    --color-surface: #FAF8F5;
    --color-on-surface: #2A2826;
    --color-surface-variant: #F0EBE1;
    --color-on-surface-variant: #8C857B;
    --color-outline: #2A2826;
    --color-outline-variant: #D9D2C5;
    --color-surface-container-lowest: #FFFFFF;
    --color-surface-container-low: #FAF8F5;
    --color-surface-container: #F0EBE1;
    --color-surface-container-high: #EBE5D9;
    --color-surface-container-highest: #E0D9CB;
  }`;
});

fs.writeFileSync('src/index.css', css);
console.log('Updated index.css');
