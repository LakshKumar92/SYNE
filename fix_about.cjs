const fs = require('fs');
let code = fs.readFileSync('src/pages/About.tsx', 'utf8');

const headerRegex = /<header className="fixed top-0 left-0 w-full z-50[^>]*>[\s\S]*?<\/header>/;

if (!code.includes("import Header from '../components/Header';")) {
  code = code.replace(
    "import { Link } from 'react-router-dom';",
    "import { Link } from 'react-router-dom';\nimport Header from '../components/Header';"
  );
}

code = code.replace(headerRegex, "<Header />");

fs.writeFileSync('src/pages/About.tsx', code);
console.log('Fixed About page header');
