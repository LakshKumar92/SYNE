const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /<Link className="inline-flex items-center justify-center border border-on-primary\/90 text-on-primary uppercase tracking-\[0\.2em\] text-\[11px\] px-10 py-4 hover:bg-on-primary hover:text-primary transition-all duration-500 hover:scale-\[1\.02\] backdrop-blur-\[2px\] shadow-sm hover:shadow-\[0_0_25px_rgba\(255,255,255,0\.2\)\] mt-4" to="\/collections">/g,
  `<motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}>
    <Link className="inline-flex items-center justify-center border border-on-primary/90 text-on-primary uppercase tracking-[0.2em] text-[11px] px-10 py-4 hover:bg-on-primary hover:text-primary transition-colors duration-500 backdrop-blur-[2px] shadow-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] mt-4" to="/collections">`
);

if (code.indexOf('Find Your Style\n              </Link>\n            </motion.div>') === -1) {
  code = code.replace(/Find Your Style\s*<\/Link>/g, 'Find Your Style\n              </Link>\n            </motion.div>');
}

fs.writeFileSync('src/pages/Home.tsx', code);
