const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('ThemeProvider')) {
  code = code.replace("import About from './pages/About';", "import About from './pages/About';\nimport { ThemeProvider } from './contexts/ThemeContext';");
  code = code.replace("<BrowserRouter>", "<ThemeProvider>\n    <BrowserRouter>");
  code = code.replace("</BrowserRouter>", "</BrowserRouter>\n    </ThemeProvider>");
}

fs.writeFileSync('src/App.tsx', code);
