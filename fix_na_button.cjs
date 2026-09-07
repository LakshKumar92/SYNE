const fs = require('fs');
let code = fs.readFileSync('src/pages/NewArrivals.tsx', 'utf8');

code = code.replace(
`<button className="w-full bg-on-tertiary text-primary py-3 uppercase tracking-[0.2em] text-[11px] uppercase tracking-widest shadow-xl hover:bg-on-primary-container hover:text-on-primary transition-colors">
                          Quick View
                        </button>`,
`<motion.button 
                          whileHover={{ scale: 1.02 }}
                          className="group/btn w-full bg-on-tertiary text-primary py-3 uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-on-primary-container hover:text-on-primary transition-colors"
                        >
                          <span className="blur-[1px] group-hover/btn:blur-0 transition-all duration-300">Quick View</span>
                        </motion.button>`
);

fs.writeFileSync('src/pages/NewArrivals.tsx', code);
