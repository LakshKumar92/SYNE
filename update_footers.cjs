const fs = require('fs');

const files = ['src/pages/Home.tsx', 'src/pages/Collections.tsx', 'src/pages/NewArrivals.tsx'];

for (const file of files) {
  let code = fs.readFileSync(file, 'utf8');
  
  if (!code.includes('import Footer')) {
    code = code.replace(/import Shader from '\.\.\/components\/Shader';/g, "import Shader from '../components/Shader';\nimport Footer from '../components/Footer';");
    if (!code.includes('import Footer')) {
      code = code.replace(/import \{ Link \} from 'react-router-dom';/, "import { Link } from 'react-router-dom';\nimport Footer from '../components/Footer';");
    }
  }

  // Find <footer and replace until </footer>
  const startIdx = code.indexOf('<footer');
  const endIdx = code.indexOf('</footer>', startIdx);
  
  if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + '<Footer />' + code.substring(endIdx + 9);
  }

  fs.writeFileSync(file, code);
}
console.log('Footers updated');
