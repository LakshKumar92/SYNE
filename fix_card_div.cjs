const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

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

fs.writeFileSync('src/pages/Collections.tsx', code);
