const fs = require('fs');

let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

if (!code.includes("import { motion")) {
  code = code.replace("import { useState", "import { motion, useScroll, useTransform } from 'motion/react';\nimport { useState");
}

if (!code.includes("const { scrollY } = useScroll();")) {
  code = code.replace("export default function Home() {", `export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]); // Translate slightly downwards as we scroll so it moves slower than the page (creating parallax)
`);
}

// Wrap hero images in parallax div
// Wait, the images are absolute inset-0. If they move down, they will reveal the background. 
// We should make the images slightly taller (e.g. h-[120%]) and translate them.
// Let's replace the whole hero section background mapper.
const oldHeroDiv = `{heroImages.map((img, idx) => (
                <div 
                  key={idx}
                  className={\`absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full mix-blend-luminosity transition-opacity duration-1000 \${idx === currentSlide ? 'opacity-50' : 'opacity-0'}\`} 
                  style={{backgroundImage: \`url('\${img}')\`}}
                ></div>
              ))}`;

const newHeroDiv = `<motion.div style={{ y: y1 }} className="absolute inset-[-10%] w-[120%] h-[120%]">
              {heroImages.map((img, idx) => (
                <div 
                  key={idx}
                  className={\`absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full mix-blend-luminosity transition-opacity duration-1000 \${idx === currentSlide ? 'opacity-50' : 'opacity-0'}\`} 
                  style={{backgroundImage: \`url('\${img}')\`}}
                ></div>
              ))}
              </motion.div>`;

code = code.replace(oldHeroDiv, newHeroDiv);

// Typography changes
// Headlines: tracking-tighter leading-tight
code = code.replace(/font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary uppercase tracking-tight/g, 'font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary tracking-tighter leading-none');
code = code.replace(/font-headline-md text-headline-md/g, 'font-headline-md tracking-tighter leading-tight');

// Labels / Navigation: uppercase, tracking-[0.2em], text-[11px]
code = code.replace(/font-navigation text-navigation/g, 'uppercase tracking-[0.2em] text-[11px]');
code = code.replace(/font-label-caps text-label-caps uppercase tracking-widest/g, 'uppercase tracking-[0.2em] text-[11px]');
code = code.replace(/font-label-caps text-label-caps/g, 'uppercase tracking-[0.2em] text-[11px]');

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Home updated');
