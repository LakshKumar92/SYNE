const fs = require('fs');

const code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

const startIdx = code.indexOf('{filteredProducts.map((item, idx) => (');
const endMarker = '))}';
let endIdx = code.indexOf(endMarker, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  // Move endIdx past the marker
  endIdx += endMarker.length;
  
  const before = code.substring(0, startIdx);
  const after = code.substring(endIdx);
  
  const newMap = `{filteredProducts.map((item, idx) => (
                <motion.div 
    key={idx} 
    className="product-card group flex flex-col gap-4" 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 70, damping: 15, delay: idx * 0.05 }}
  >
                  <motion.div 
    className="product-image-container aspect-[4/5] bg-[#EAE2D8] relative rounded-[2rem] border border-outline-variant/30 overflow-hidden"
    initial={{ scale: 0.96 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  >
                    {/* Shimmer Placeholder Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none"></div>
                    
                    <motion.img 
                      loading="lazy"
                      className="product-image w-full h-full object-cover relative z-10"
                      src={item.image} 
                      alt={item.title} 
                      initial={{ scale: 1.1, opacity: 0 }}
                      whileInView={{ scale: 1.0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
                        href={\`https://www.google.com/search?q=\${encodeURIComponent(item.brand + ' ' + item.title)}\`} 
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
              ))}`;
  
  fs.writeFileSync('src/pages/Collections.tsx', before + newMap + after);
  console.log("Collections replaced successfully!");
} else {
  console.error("Could not find bounds");
}
