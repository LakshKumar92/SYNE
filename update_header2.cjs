const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

if (!code.includes('useTheme')) {
  code = code.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport { useTheme } from '../contexts/ThemeContext';");
  code = code.replace("const [hidden, setHidden] = useState(false);", "const [hidden, setHidden] = useState(false);\n  const { theme, toggleTheme } = useTheme();");
  
  const target = `<button className="p-2 text-on-primary-container hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>`;
          
  const replacement = `<button onClick={toggleTheme} className="p-2 text-on-primary-container hover:text-on-primary transition-colors" aria-label="Toggle Theme">
            <span className="material-symbols-outlined text-[20px]">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
          </button>\n          ` + target;
          
  code = code.replace(target, replacement);
}

fs.writeFileSync('src/components/Header.tsx', code);
