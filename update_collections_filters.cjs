const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

// 1. Add selectedCategory state
if (!code.includes('selectedCategory')) {
  code = code.replace(
    "const [selectedGender, setSelectedGender] = useState<string>('All');",
    "const [selectedGender, setSelectedGender] = useState<string>('All');\n  const [selectedCategory, setSelectedCategory] = useState<string>('All');"
  );
}

// 2. Update filteredProducts logic
if (!code.includes('matchCategory')) {
  code = code.replace(
    /const matchGender = selectedGender === 'All' \|\| p\.gender\.includes\(selectedGender\);/,
    "const matchGender = selectedGender === 'All' || p.gender.includes(selectedGender);\n      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;"
  );
  code = code.replace(
    /return matchGender && matchBodyType && matchStyle;/,
    "return matchGender && matchBodyType && matchStyle && matchCategory;"
  );
  code = code.replace(
    /}, \[selectedGender, selectedBodyType, selectedStyle\]\);/,
    "}, [selectedGender, selectedBodyType, selectedStyle, selectedCategory]);"
  );
}

// 3. Add the Category filter section in JSX
if (!code.includes('>Category<')) {
  const categoryFilterJSX = `
              <div className="flex flex-col gap-5">
                <h3 className="font-headline-sm uppercase tracking-widest text-on-primary">Category</h3>
                <ul className="flex flex-col gap-4 font-body-md">
                  {['All', 'T-Shirts', 'Shirts', 'Pants', 'Dresses', 'Outerwear', 'Sweaters', 'Accessories'].map(cat => (
                    <FilterButton key={cat} label={cat} current={selectedCategory} setter={setSelectedCategory} />
                  ))}
                </ul>
              </div>
`;
  // Insert before the Gender filter
  code = code.replace(
    /<div className="flex flex-col gap-5">\s*<h3 className="font-headline-sm uppercase tracking-widest text-on-primary">Gender<\/h3>/,
    categoryFilterJSX + '\n              <div className="flex flex-col gap-5">\n                <h3 className="font-headline-sm uppercase tracking-widest text-on-primary">Gender</h3>'
  );
}

fs.writeFileSync('src/pages/Collections.tsx', code);
