const fs = require('fs');

let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');
code = code.replace(/<button([\s\S]*?)<\/motion\.button>/g, (match, p1) => {
  // If the opening tag is <button, then the closing tag should be </button>
  // Unless it's the specific motion button that we actually wanted to convert.
  // Wait, I already changed the target motion button opening tag to <motion.button!
  // So ANY <button ...> </motion.button> is a mistake!
  return `<button${p1}</button>`;
});

// Also fix mismatched </div> vs </motion.div> around line 158. Let's see the end of the file.
fs.writeFileSync('src/pages/Collections.tsx', code);
