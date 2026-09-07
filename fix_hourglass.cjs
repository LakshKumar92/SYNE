const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

const target = `<FilterButton label="Broad" current={selectedBodyType} setter={setSelectedBodyType} />
                </ul>`;

const replacement = `<FilterButton label="Broad" current={selectedBodyType} setter={setSelectedBodyType} />
                  <FilterButton label="Hourglass" current={selectedBodyType} setter={setSelectedBodyType} />
                </ul>`;

code = code.replace(target, replacement);

fs.writeFileSync('src/pages/Collections.tsx', code);
console.log("Added Hourglass to UI filters.");
