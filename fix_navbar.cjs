const fs = require('fs');

let headerCode = fs.readFileSync('src/components/Header.tsx', 'utf8');
// The issue is that bg-primary/80 means the background is slightly transparent #FAF8F5.
// If the body is FAF8F5, the background of the header should blend into it.
// However, maybe the header should just have bg-primary (100% opaque) and no blur, or bg-primary/90 so it matches the theme perfectly without showing white underneath (if the browser default background is white).
// Wait, `backdrop-blur-xl` combined with `bg-primary/80` might make it look lighter/whiter because of the blur over a light background, or because it's blurring a white background behind it.

headerCode = headerCode.replace(/bg-primary\/80 backdrop-blur-xl/, 'bg-primary/95 backdrop-blur-sm');

fs.writeFileSync('src/components/Header.tsx', headerCode);

let indexCss = fs.readFileSync('src/index.css', 'utf8');
// Let's also make sure html and body have the background color explicitly set so the blur doesn't catch white.
if (!indexCss.includes('background-color: var(--color-primary);')) {
  indexCss = indexCss.replace(/body\s*\{\s*overscroll-behavior/g, 'body {\n    background-color: var(--color-primary);\n    overscroll-behavior');
  fs.writeFileSync('src/index.css', indexCss);
}

