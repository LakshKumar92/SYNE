const fs = require('fs');
let collections = fs.readFileSync('src/pages/Collections.tsx', 'utf8');
collections = collections.replace(/whileHover=\{\{ scale: 1\.02 \}\}/g, 'whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}');
fs.writeFileSync('src/pages/Collections.tsx', collections);

let newArrivals = fs.readFileSync('src/pages/NewArrivals.tsx', 'utf8');
newArrivals = newArrivals.replace(/whileHover=\{\{ scale: 1\.02 \}\}/g, 'whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}');
fs.writeFileSync('src/pages/NewArrivals.tsx', newArrivals);
