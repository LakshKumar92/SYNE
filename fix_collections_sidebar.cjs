const fs = require('fs');

let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

// I need to add the Category filter section in the sidebar.
const targetSidebarStr = `<aside className="w-full lg:w-[240px] flex-shrink-0 flex flex-col gap-12">`;
const newSidebarStr = `<aside className="w-full lg:w-[240px] flex-shrink-0 flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="uppercase tracking-[0.2em] text-[11px] text-on-primary-container">CATEGORY</h3>
                <ul className="flex flex-col gap-3 font-body-md text-on-primary">
                  <FilterButton label="All" current={selectedCategory} setter={setSelectedCategory} />
                  <FilterButton label="Shirts" current={selectedCategory} setter={setSelectedCategory} />
                  <FilterButton label="Pants" current={selectedCategory} setter={setSelectedCategory} />
                  <FilterButton label="Shoes" current={selectedCategory} setter={setSelectedCategory} />
                </ul>
              </div>`;

if (code.includes(targetSidebarStr)) {
    code = code.replace(targetSidebarStr, newSidebarStr);
    fs.writeFileSync('src/pages/Collections.tsx', code);
    console.log('Category filter added.');
} else {
    console.log('Could not find sidebar target');
}
