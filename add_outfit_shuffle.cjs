const fs = require('fs');

let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Add imports
const importTarget = `import { Link } from 'react-router-dom';`;
const newImports = `import { useState, useEffect } from 'react';
import { initialProducts, Product } from '../data/products';
import { Link } from 'react-router-dom';`;

if (code.includes(importTarget)) {
    code = code.replace(importTarget, newImports);
} else {
    console.error("Could not find import target");
}

// 2. Add state and logic to Home component
const stateTarget = `  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);`;
const newState = `  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  const [shuffleGender, setShuffleGender] = useState<string>('Menswear');
  const [outfit, setOutfit] = useState<{ top: Product | null, bottom: Product | null, shoe: Product | null }>({ top: null, bottom: null, shoe: null });
  const [isShuffling, setIsShuffling] = useState(false);

  const generateOutfit = (gender: string) => {
    setIsShuffling(true);
    
    setTimeout(() => {
      const validProducts = initialProducts.filter(p => p.gender.includes(gender) || p.gender.includes('Unisex') || p.gender.includes('All'));
      
      const tops = validProducts.filter(p => p.category === 'Shirts');
      const bottoms = validProducts.filter(p => p.category === 'Pants');
      const shoes = validProducts.filter(p => p.category === 'Shoes');
      
      const randomTop = tops.length > 0 ? tops[Math.floor(Math.random() * tops.length)] : null;
      const randomBottom = bottoms.length > 0 ? bottoms[Math.floor(Math.random() * bottoms.length)] : null;
      const randomShoe = shoes.length > 0 ? shoes[Math.floor(Math.random() * shoes.length)] : null;
      
      setOutfit({ top: randomTop, bottom: randomBottom, shoe: randomShoe });
      setIsShuffling(false);
    }, 400);
  };

  useEffect(() => {
    generateOutfit(shuffleGender);
  }, []);

  const handleGenderSwitch = (gender: string) => {
    setShuffleGender(gender);
    generateOutfit(gender);
  };
`;

if (code.includes(stateTarget)) {
    code = code.replace(stateTarget, newState);
} else {
    console.error("Could not find state target");
}

// 3. Add section before Latest Collection
const sectionTarget = `          {/* Latest Collection Section */}`;
const newSection = `          {/* Outfit Generator Section */}
          <section className="w-full py-32 px-6 lg:px-12 bg-[#FAF7F2]">
            <motion.div 
              className="max-w-7xl mx-auto flex flex-col gap-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-outline-variant/40 pb-8">
                <div>
                    <span className="font-label-caps text-[11px] uppercase tracking-[0.25em] text-secondary block mb-4">THE DIGITAL STYLIST</span>
                    <h2 className="font-display-lg text-4xl lg:text-5xl tracking-tight leading-tight text-on-primary italic">
                    Outfit Shuffle
                    </h2>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                    <div className="flex bg-tertiary-container rounded-full p-1 border border-outline-variant/20 shadow-sm">
                        <button 
                            onClick={() => handleGenderSwitch('Menswear')}
                            className={\`px-6 py-2.5 rounded-full font-label-caps text-[10px] tracking-widest transition-all duration-300 \${shuffleGender === 'Menswear' ? 'bg-on-primary text-primary shadow-sm' : 'text-on-primary-container hover:text-on-primary'}\`}
                        >
                            MENSWEAR
                        </button>
                        <button 
                            onClick={() => handleGenderSwitch('Womenswear')}
                            className={\`px-6 py-2.5 rounded-full font-label-caps text-[10px] tracking-widest transition-all duration-300 \${shuffleGender === 'Womenswear' ? 'bg-on-primary text-primary shadow-sm' : 'text-on-primary-container hover:text-on-primary'}\`}
                        >
                            WOMENSWEAR
                        </button>
                    </div>
                    <button 
                        onClick={() => generateOutfit(shuffleGender)}
                        className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-on-primary hover:scale-105 transition-all duration-300 shadow-md group"
                    >
                        <span className={\`material-symbols-outlined text-[20px] \${isShuffling ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}\`}>shuffle</span>
                    </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {[outfit.top, outfit.bottom, outfit.shoe].map((item, idx) => (
                      <motion.div 
                          key={\`\${item ? item.id : 'empty'}-\${idx}-\${Date.now()}\`}
                          className="group flex flex-col gap-4"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: isShuffling ? 0.3 : 1, scale: isShuffling ? 0.98 : 1 }}
                          transition={{ duration: 0.4 }}
                      >
                          {item ? (
                              <Link to="/collections">
                                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30 bg-[#EAE2D8]">
                                      <img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src={item.image} alt={item.title} />
                                      <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-outline-variant/30">
                                          <span className="font-label-caps text-[9px] tracking-widest uppercase text-on-primary">{item.category}</span>
                                      </div>
                                  </div>
                                  <div className="flex justify-between items-start pt-3 px-2">
                                      <div>
                                          <h3 className="font-headline-md text-lg text-on-primary italic group-hover:text-secondary transition-colors">{item.title}</h3>
                                          <p className="font-body-sm text-on-primary-container mt-1">{item.brand}</p>
                                      </div>
                                      <span className="font-label-caps text-[11px] text-secondary mt-1">{item.formattedPrice}</span>
                                  </div>
                              </Link>
                          ) : (
                              <div className="relative w-full aspect-[4/5] rounded-[2rem] border border-outline-variant/30 bg-[#EAE2D8]/50 flex items-center justify-center">
                                  <span className="font-label-caps text-[10px] text-on-primary-container tracking-widest">NO ITEM FOUND</span>
                              </div>
                          )}
                      </motion.div>
                  ))}
              </div>
            </motion.div>
          </section>

          {/* Latest Collection Section */}`;

if (code.includes(sectionTarget)) {
    code = code.replace(sectionTarget, newSection);
} else {
    console.error("Could not find section target");
}

fs.writeFileSync('src/pages/Home.tsx', code);
console.log("Outfit shuffle injected.");
