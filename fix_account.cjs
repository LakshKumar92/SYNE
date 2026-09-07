const fs = require('fs');
let code = fs.readFileSync('src/pages/Account.tsx', 'utf8');

const headerRegex = /<header className="flex justify-between items-center py-8 mb-12 border-b border-outline-variant px-margin-desktop">[\s\S]*?<\/header>/;

if (!code.includes("import Header from '../components/Header';")) {
  code = code.replace(
    "import { Link } from 'react-router-dom';",
    "import { Link } from 'react-router-dom';\nimport Header from '../components/Header';"
  );
}

// Replace the inner header but we need to inject <Header /> outside the main div ideally, 
// or just replace it. Let's just replace it and add some pt-20 to the main wrapper
code = code.replace(headerRegex, "");

// Add Header to the top of the return block
code = code.replace(
  /<main className="w-full flex min-h-screen items-center justify-center p-margin-mobile">/,
  '<Header />\n      <main className="w-full flex min-h-screen items-center justify-center p-margin-mobile pt-32">'
);


fs.writeFileSync('src/pages/Account.tsx', code);
console.log('Fixed Account page header');
