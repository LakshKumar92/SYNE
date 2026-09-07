const fs = require('fs');

let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

// 1. Fix FilterButton
const filterTarget = `  const FilterButton = ({ label, current, setter }: { label: string, current: string, setter: (v: string) => void }) => {
    const isActive = current === label;
    return (
      <li>
        <button 
          onClick={() => setter(label)}
          className={\`group inline-flex items-center gap-2 transition-all duration-300 \${isActive ? 'border-b border-secondary pb-0.5 text-secondary font-medium' : 'text-on-primary-container hover:text-secondary transform hover:translate-x-1'}\`}
        >
          <span className={\`w-1 h-1 rounded-full bg-secondary transition-opacity duration-300 \${isActive ? 'w-1.5 h-1.5 opacity-100' : 'opacity-0 group-hover:opacity-100'}\`}></span>
          {label}
        </button>
      </li>
    );
  };`;

const newFilter = `  const FilterButton = ({ label, current, setter }: { label: string, current: string, setter: (v: string) => void }) => {
    const isActive = current === label;
    return (
      <li>
        <button 
          onClick={() => setter(label)}
          className={\`group flex items-center w-full px-4 py-2.5 rounded-xl text-[13px] transition-all duration-300 \${isActive ? 'bg-[#EAE2D8]/80 text-on-primary font-medium shadow-sm' : 'bg-transparent text-on-primary-container hover:bg-[#EAE2D8]/40 hover:text-on-primary'}\`}
        >
          <span className={\`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-300 \${isActive ? 'bg-secondary' : 'bg-transparent group-hover:bg-outline-variant/40'}\`}></span>
          {label}
        </button>
      </li>
    );
  };`;

if (code.includes(filterTarget)) {
    code = code.replace(filterTarget, newFilter);
}

// 2. Fix Product Card (remove onClick from card, fix image opacity, move button)
// We need to replace the card rendering part entirely.
const cardTargetStart = `{filteredProducts.map((item, idx) => (`;
const cardTargetEnd = `</motion.div>
              ))}
            </div>`;

// We'll replace using regex or exact string matching if possible, but the string is long.
// Let's use regex to replace everything between {filteredProducts.map(....)}
