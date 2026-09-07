const fs = require('fs');
let code = fs.readFileSync('src/pages/NewArrivals.tsx', 'utf8');

code = code.replace(
`                      </div>
                    </div>
                    <div className="flex justify-between items-start pt-1">`,
`                      </div>
                    </motion.div>
                    <div className="flex justify-between items-start pt-1">`
);

fs.writeFileSync('src/pages/NewArrivals.tsx', code);
