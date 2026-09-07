const fs = require('fs');
const files = ['src/pages/About.tsx', 'src/pages/Contact.tsx', 'src/pages/Account.tsx', 'src/pages/Profile.tsx'];

files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  
  // Replace the inline footer block with <Footer />
  const footerRegex = /\{\/\*\s*Footer\s*\*\/\}\s*<footer[\s\S]*?<\/footer>/;
  if (code.match(footerRegex)) {
    code = code.replace(footerRegex, '<Footer />');
    
    if (!code.includes("import Footer from '../components/Footer';")) {
      code = code.replace(
        "import Header from '../components/Header';",
        "import Header from '../components/Header';\nimport Footer from '../components/Footer';"
      );
    }
  } else {
      // Sometimes it might just be <footer...
      const footerRegex2 = /<footer[\s\S]*?<\/footer>/;
      if (code.match(footerRegex2)) {
        code = code.replace(footerRegex2, '<Footer />');
        
        if (!code.includes("import Footer from '../components/Footer';")) {
          code = code.replace(
            "import Header from '../components/Header';",
            "import Header from '../components/Header';\nimport Footer from '../components/Footer';"
          );
        }
      }
  }

  fs.writeFileSync(file, code);
  console.log('Fixed footer in ' + file);
});
