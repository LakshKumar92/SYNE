const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /<div className="max-w-container-max mx-auto flex flex-col gap-24">/g,
  `<motion.div 
    className="max-w-container-max mx-auto flex flex-col gap-24"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
  >`
);

code = code.replace(
  /<\/div>\n          <\/section>\n        <\/div>\n      <\/main>/,
  `</motion.div>\n          </section>\n        </div>\n      </main>`
);

fs.writeFileSync('src/pages/Home.tsx', code);
