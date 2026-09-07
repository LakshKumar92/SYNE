const fs = require('fs');
let code = fs.readFileSync('src/pages/Profile.tsx', 'utf8');

const headerRegex = /<header className={`bg-primary\/95[^>]*>[\s\S]*?<\/header>/;

if (!code.includes("import Header from '../components/Header';")) {
  code = code.replace(
    "import { Link } from 'react-router-dom';",
    "import { Link } from 'react-router-dom';\nimport Header from '../components/Header';"
  );
}

code = code.replace(headerRegex, "<Header />");

fs.writeFileSync('src/pages/Profile.tsx', code);
console.log('Fixed Profile page header');
