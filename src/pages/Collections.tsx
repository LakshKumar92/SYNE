import { ImageWithSkeleton } from '../components/ImageWithSkeleton';
import { motion } from 'motion/react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { initialProducts, Product } from '../data/products';

export default function Collections() {
  const [selectedGender, setSelectedGender] = useState<string>('All');
    const [selectedBodyType, setSelectedBodyType] = useState<string>('All');
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [sortOption, setSortOption] = useState<string>('Newest First');

  const filteredProducts = useMemo(() => {
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
  }, [selectedGender, selectedBodyType, selectedStyle, sortOption]);

  const FilterButton = ({ label, current, setter }: { label: string, current: string, setter: (v: string) => void }) => {
    const isActive = current === label;
    return (
      <li>
        <button 
          onClick={() => setter(label)}
          className={`group inline-flex items-center gap-2 transition-all duration-300 ${isActive ? 'border-b border-secondary pb-0.5 text-secondary font-medium' : 'text-on-primary-container hover:text-secondary transform hover:translate-x-1'}`}
        >
          <span className={`w-1 h-1 rounded-full bg-secondary transition-opacity duration-300 ${isActive ? 'w-1.5 h-1.5 opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
          {label}
        </button>
      </li>
    );
  };

  return (
    <div className="bg-primary text-on-primary font-body-md">
      <Header />
      
      <main className="pt-20 min-h-screen">
        <div className="flex flex-col w-full bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-24 flex flex-col lg:flex-row gap-16">
            <aside className="w-full lg:w-[240px] flex-shrink-0 flex flex-col gap-12">

              <div className="flex flex-col gap-6">
                <h3 className="uppercase tracking-[0.2em] text-[11px] text-on-primary-container">GENDER</h3>
                <ul className="flex flex-col gap-3 font-body-md text-on-primary">
                  <FilterButton label="All" current={selectedGender} setter={setSelectedGender} />
                  <FilterButton label="Menswear" current={selectedGender} setter={setSelectedGender} />
                  <FilterButton label="Womenswear" current={selectedGender} setter={setSelectedGender} />
                  <FilterButton label="Unisex" current={selectedGender} setter={setSelectedGender} />
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="uppercase tracking-[0.2em] text-[11px] text-on-primary-container">BODY TYPE</h3>
                <ul className="flex flex-col gap-3 font-body-md text-on-primary">
                  <FilterButton label="All" current={selectedBodyType} setter={setSelectedBodyType} />
                  <FilterButton label="Slim" current={selectedBodyType} setter={setSelectedBodyType} />
                  <FilterButton label="Athletic" current={selectedBodyType} setter={setSelectedBodyType} />
                  <FilterButton label="Broad" current={selectedBodyType} setter={setSelectedBodyType} />
                  <FilterButton label="Hourglass" current={selectedBodyType} setter={setSelectedBodyType} />
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="uppercase tracking-[0.2em] text-[11px] text-on-primary-container">STYLE</h3>
                <ul className="flex flex-col gap-3 font-body-md text-on-primary">
                  <FilterButton label="All" current={selectedStyle} setter={setSelectedStyle} />
                  <FilterButton label="Casual" current={selectedStyle} setter={setSelectedStyle} />
                  <FilterButton label="Streetwear" current={selectedStyle} setter={setSelectedStyle} />
                  <FilterButton label="Formal" current={selectedStyle} setter={setSelectedStyle} />
                  <FilterButton label="Avant-Garde" current={selectedStyle} setter={setSelectedStyle} />
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="uppercase tracking-[0.2em] text-[11px] text-on-primary-container">PRICE</h3>
                <div className="border-b border-outline-variant/60 hover:border-secondary hover:text-secondary pb-2 font-body-md text-on-primary transition-colors duration-300 cursor-pointer flex items-center justify-between">
                  <span>$0 – $500</span>
                  <span className="material-symbols-outlined text-[16px] text-on-primary-container">tune</span>
                </div>
              </div>
            </aside>
            
            
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {filteredProducts.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="product-card group flex flex-col gap-4" 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (idx % 4) * 0.1 }}
                >
                  <motion.div 
                    className="product-image-container aspect-[4/5] bg-surface-variant relative rounded-[2rem] border border-outline-variant/30 overflow-hidden"
                    initial={{ scale: 0.96 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Shimmer Placeholder Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none"></div>
                    
                    <ImageWithSkeleton 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full absolute inset-0 z-10"
                      imgClassName="group-hover:scale-105 transition-transform duration-1000"
                    />
                  </motion.div>
                  
                  <div className="flex flex-col gap-1 flex-grow">
                    <div className="flex justify-between gap-4">
                      <h2 className="font-headline-md tracking-tighter leading-tight text-on-primary line-clamp-1">
                        <span className="title-underline-anim inline-block pb-0.5">{item.title}</span>
                      </h2>
                    </div>
                    <div className="flex justify-between items-center text-on-primary-container text-sm mt-1">
                      <span className="uppercase tracking-widest">{item.brand}</span>
                      <span className="group-hover:text-on-primary transition-colors duration-300 font-medium">{item.formattedPrice}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 mt-2 mb-2">
                      {[...item.gender, ...item.bodyType, ...item.style]
                        .filter(tag => tag !== 'All')
                        .slice(0, 3)
                        .map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-primary/90 text-on-primary text-[10px] uppercase tracking-widest rounded-full border border-outline-variant/30 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-2">
                      <a 
                        href={`https://www.google.com/search?q=${encodeURIComponent(item.brand + ' ' + item.title)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-6 bg-transparent border border-outline-variant/60 text-on-primary text-[11px] font-medium uppercase tracking-widest hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 rounded-full flex items-center justify-between group/link"
                      >
                        <span>Shop at {item.brand}</span>
                        <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center text-on-primary-container">
                  No matches found for your selected aesthetic.
                </div>
              )}
            </div>
              </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}