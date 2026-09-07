const fs = require('fs');
let code = fs.readFileSync('src/pages/Collections.tsx', 'utf8');

if (!code.includes('ImageWithSkeleton')) {
  code = code.replace(`import { motion } from 'framer-motion';`, `import { motion, AnimatePresence } from 'framer-motion';\nimport { ImageWithSkeleton } from '../components/ImageWithSkeleton';`);
}

const targetImage = `<motion.img 
                      loading="lazy"
                      className="product-image w-full h-full object-cover relative z-10"
                      src={item.image} 
                      alt={item.title} 
                      initial={{ scale: 1.1, opacity: 0 }}
                      whileInView={{ scale: 1.0, opacity: 1 }}
                      viewport={{ once: true }}
                    />`;

const newImage = `<ImageWithSkeleton 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full"
                      imgClassName="group-hover:scale-105 transition-transform duration-1000"
                    />`;

code = code.replace(targetImage, newImage);

// Sometimes formatting might not exactly match targetImage. Let's use regex if needed
if(code.indexOf('ImageWithSkeleton') !== -1 && code.indexOf('src={item.image}') !== -1 && code.indexOf('<motion.img') !== -1) {
  // Try regex replacement
  code = code.replace(/<motion\.img[^>]*src=\{item\.image\}[^>]*\/>/s, newImage);
}

fs.writeFileSync('src/pages/Collections.tsx', code);
console.log("Updated Collections.tsx");
