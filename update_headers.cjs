const fs = require('fs');

const files = ['src/pages/Home.tsx', 'src/pages/Collections.tsx', 'src/pages/NewArrivals.tsx'];

for (const file of files) {
  let code = fs.readFileSync(file, 'utf8');
  
  if (!code.includes('import Header')) {
    code = code.replace(/import Footer from '\.\.\/components\/Footer';/g, "import Footer from '../components/Footer';\nimport Header from '../components/Header';");
  }

  // Find <header and replace until </header>
  const startIdx = code.indexOf('<header');
  const endIdx = code.indexOf('</header>', startIdx);
  
  if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + '<Header />' + code.substring(endIdx + 9);
  }

  fs.writeFileSync(file, code);
}
console.log('Headers updated');
