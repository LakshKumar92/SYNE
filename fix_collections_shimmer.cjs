const fs = require('fs');

let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

const targetStr = `                  <motion.div 
    className="product-image-container aspect-[4/5] bg-tertiary-container relative rounded-[2rem] border border-outline-variant/30 overflow-hidden"
    initial={{ scale: 0.96 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  >
                    <motion.img 
                    loading="lazy"
                    className="product-image w-full h-full object-cover" 
                    src={item.image} 
                    alt={item.title} 
    initial={{ scale: 1.1 }}
    whileInView={{ scale: 1.0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  />`;

const newStr = `                  <motion.div 
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
                    className="product-image w-full h-full object-cover relative z-10 transition-opacity duration-700 opacity-0"
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.opacity = '1';
                    }}
                    src={item.image} 
                    alt={item.title} 
    initial={{ scale: 1.1 }}
    whileInView={{ scale: 1.0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  />`;

if (code.includes(targetStr)) {
    code = code.replace(targetStr, newStr);
    fs.writeFileSync('src/pages/Collections.tsx', code);
    console.log('Shimmer effect added successfully.');
} else {
    console.log('Could not find target string in Collections.tsx');
}

// Add the shimmer keyframes to index.css if not present
let cssCode = fs.readFileSync('src/index.css', 'utf8');
if (!cssCode.includes('@keyframes shimmer')) {
    cssCode += `

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
`;
    fs.writeFileSync('src/index.css', cssCode);
    console.log('Shimmer keyframes added to index.css');
}
