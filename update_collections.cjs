const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

if (!code.includes('sortOption')) {
  // Add sortOption state
  code = code.replace("const [selectedStyle, setSelectedStyle] = useState<string>('All');", "const [selectedStyle, setSelectedStyle] = useState<string>('All');\n  const [sortOption, setSortOption] = useState<string>('Newest First');");

  // Update useMemo
  const oldUseMemo = `  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      const matchGender = selectedGender === 'All' || p.gender.includes(selectedGender);
      const matchBodyType = selectedBodyType === 'All' || p.bodyType.includes(selectedBodyType);
      const matchStyle = selectedStyle === 'All' || p.style.includes(selectedStyle);
      return matchGender && matchBodyType && matchStyle;
    });
  }, [selectedGender, selectedBodyType, selectedStyle]);`;

  const newUseMemo = `  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];
    
    result = result.filter(p => {
      const matchGender = selectedGender === 'All' || p.gender.includes(selectedGender);
      const matchBodyType = selectedBodyType === 'All' || p.bodyType.includes(selectedBodyType);
      const matchStyle = selectedStyle === 'All' || p.style.includes(selectedStyle);
      return matchGender && matchBodyType && matchStyle;
    });

    if (sortOption === 'Color Harmony') {
      result.sort((a, b) => a.category.localeCompare(b.category) || a.bodyType[0].localeCompare(b.bodyType[0]));
    } else if (sortOption === 'Most Popular') {
      result.sort((a, b) => b.price - a.price);
    } else {
      // Newest First (default is chronological so we can just leave it or reverse it, let's just leave it or reverse it based on id)
      // Since it's a static list, reversing the order creates a "newest" feel if it was chronological.
      // Or we can just use ID sorting.
      result.sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [selectedGender, selectedBodyType, selectedStyle, sortOption]);`;

  code = code.replace(oldUseMemo, newUseMemo);

  // Add the Sorting UI above the grid
  const targetHeader = `<div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">`;
  const sortingUI = `
            <div className="flex-grow flex flex-col gap-8">
              <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
                <span className="font-label-caps tracking-widest text-[11px] text-on-primary-container uppercase">
                  Showing {filteredProducts.length} Items
                </span>
                
                <div className="relative group">
                  <select 
                    value={sortOption} 
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-transparent font-body-md text-on-primary pr-8 py-1 border-none focus:ring-0 cursor-pointer text-right"
                  >
                    <option value="Newest First">Newest First</option>
                    <option value="Color Harmony">Color Harmony</option>
                    <option value="Most Popular">Most Popular</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">`;
              
  code = code.replace(targetHeader, sortingUI);
  
  // Now we have to fix the closing tags. Wait, targetHeader didn't include the closing tags.
  // We replaced `<div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">` with `<div className="flex-grow flex flex-col gap-8"> ... <div className="grid ...">`. This means we opened an extra div. We must close it.
  
  // Find where it's closed.
  const oldClose = `              {filteredProducts.length === 0 && (
                <div className="col-span-full py-32 text-center text-on-primary-container font-body-md">
                  No items match your selected filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>`;
      
  const newClose = `              {filteredProducts.length === 0 && (
                <div className="col-span-full py-32 text-center text-on-primary-container font-body-md">
                  No items match your selected filters.
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </main>`;
  
  code = code.replace(oldClose, newClose);
}

fs.writeFileSync('src/pages/Collections.tsx', code);
console.log("Updated Collections.tsx with sort option");
