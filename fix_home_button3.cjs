const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// There's a missing closing </motion.div> for the text container? Wait.
// Let's check the lines around Find Your Style again.
// <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}> // (line 89)
// <Link...>
// Find Your Style // (91)
// </Link> // (92)
// </motion.div> // (93)
// </section> // (94)
//
// But wait, what happened to the </motion.div> that was closing the text block `className="relative z-10 text-center ..."` ?
// It looks like line 93 closes the whileHover motion.div.
// The text block was opened on line 79 probably. Does it have a closing tag?
// Let's find out.

code = code.replace(
  /Find Your Style\n              <\/Link>\n            <\/motion\.div>\n          <\/section>/,
  `Find Your Style\n              </Link>\n            </motion.div>\n            </motion.div>\n          </section>`
);

fs.writeFileSync('src/pages/Home.tsx', code);
