const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// I might have replaced incorrectly, let's fix it properly.
// Check if the </Link></motion.div> was replaced properly.
code = code.replace(/Find Your Style\s*<\/Link>\s*<\/motion\.div>/g, 'Find Your Style\n              </Link>\n            </motion.div>');
// Actually wait, earlier I replaced `<Link...>` with `<motion.div><Link...>` but didn't close it correctly.
// Let's do it manually.
let linkStart = code.indexOf('<motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}>');
if(linkStart !== -1) {
  let findYourStyle = code.indexOf('Find Your Style', linkStart);
  let linkEnd = code.indexOf('</Link>', findYourStyle);
  if (code.substring(linkEnd, linkEnd + 20).indexOf('</motion.div>') === -1) {
    code = code.substring(0, linkEnd + 7) + '\n            </motion.div>' + code.substring(linkEnd + 7);
  }
}
fs.writeFileSync('src/pages/Home.tsx', code);
