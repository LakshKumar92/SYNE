const fs = require('fs');
let code = fs.readFileSync('src/pages/NewArrivals.tsx', 'utf8');

if (!code.includes("import { motion }")) {
  code = code.replace("import { useState", "import { motion } from 'motion/react';\nimport { useState");
}

// 1. Grid Stagger & Cards
code = code.replace(
  /<div key={idx} className="product-card group flex flex-col gap-4 cursor-pointer" onClick=\{\(\) => window\.open\(item\.url, '_blank'\)\}>/g,
  `<motion.div 
    key={idx} 
    className="product-card group flex flex-col gap-4 cursor-pointer" 
    onClick={() => window.open(item.url, '_blank')}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 70, damping: 15, delay: idx * 0.05 }}
  >`
);

// We need to carefully replace the closing tag of the card.
code = code.replace(
`                    </div>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0`,
`                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredProducts.length === 0`
);

// In NewArrivals, we might not have `filteredProducts.length === 0`, maybe it's `newProducts.length === 0`?
// Let's check NewArrivals.tsx content first.
