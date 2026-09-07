const fs = require('fs');

const code = `import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  return (
    <div className="bg-primary text-on-primary font-body-md overflow-x-hidden" data-mode="connect">
      <Header />
      
      <main className="pt-20 min-h-screen">
        <div className="flex flex-col w-full bg-primary text-on-primary">
          
          {/* Refined Premium Hero */}
          <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center -mt-20 overflow-hidden px-6 lg:px-12 bg-primary">
            
            {/* Minimal Background Setup */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F0EBE1] to-primary opacity-60"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E5D5C5]/40 blur-[150px]"></div>
            </div>

            <motion.div 
                className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start text-left">
                    <motion.span 
                        className="font-label-caps text-[11px] uppercase tracking-[0.25em] text-secondary mb-8 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        THE ARCHIVE COLLECTION
                    </motion.span>
                    
                    <motion.h1 
                        className="font-display-lg text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-on-primary mb-10 italic"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Form,<br/>
                        <span className="text-secondary">Refined.</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-body-lg md:text-xl text-on-primary-container max-w-lg leading-relaxed mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Discover editorial pieces crafted with quiet intentionality and timeless silhouette engineering. Tailored to your true form.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link 
                            to="/collections"
                            className="inline-flex items-center justify-center bg-on-primary text-primary hover:bg-secondary hover:text-white uppercase tracking-[0.25em] text-[11px] font-label-caps px-12 py-5 rounded-full transition-all duration-500 shadow-lg"
                        >
                            Explore Collection
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div 
                    className="flex-1 w-full relative"
                    style={{ y: y1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-lg mx-auto lg:ml-auto overflow-hidden rounded-[3rem] border border-outline-variant/30 shadow-2xl">
                        <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1500&auto=format&fit=crop" 
                            alt="Editorial Fashion" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    {/* Decorative floating element */}
                    <motion.div 
                        className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#F0EBE1] rounded-full blur-3xl opacity-60 z-0"
                        style={{ y: y2 }}
                    ></motion.div>
                </motion.div>
            </motion.div>
          </section>
          
          {/* Latest Collection Section */}
          <section className="w-full py-32 px-6 lg:px-12 bg-primary">
            <motion.div 
              className="max-w-7xl mx-auto flex flex-col gap-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-outline-variant/40 pb-8">
                <div>
                    <span className="font-label-caps text-[11px] uppercase tracking-[0.25em] text-secondary block mb-4">SEASONAL CURATION</span>
                    <h2 className="font-display-lg text-4xl lg:text-5xl tracking-tight leading-tight text-on-primary italic">
                    Latest Arrivals
                    </h2>
                </div>
                <Link to="/new-arrivals" className="group flex items-center gap-3 text-secondary hover:text-on-primary transition-colors">
                    <span className="font-label-caps text-[11px] uppercase tracking-widest">View All</span>
                    <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <Link className="group flex flex-col gap-6 cursor-pointer" to="/collections">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30">
                    <img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop" alt="Silk & Drape Elements" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                  </div>
                  <div className="flex justify-between items-start pt-2">
                    <h3 className="font-headline-md text-xl text-on-primary group-hover:text-secondary transition-colors italic">Silk & Drape</h3>
                    <span className="font-label-caps text-[10px] tracking-widest text-on-primary-container">01</span>
                  </div>
                </Link>

                <Link className="group flex flex-col gap-6 cursor-pointer md:mt-12" to="/collections">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30">
                    <img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" alt="Structured Silhouettes" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                  </div>
                  <div className="flex justify-between items-start pt-2">
                    <h3 className="font-headline-md text-xl text-on-primary group-hover:text-secondary transition-colors italic">Structured Silhouette</h3>
                    <span className="font-label-caps text-[10px] tracking-widest text-on-primary-container">02</span>
                  </div>
                </Link>

                <Link className="group flex flex-col gap-6 cursor-pointer md:mt-24" to="/collections">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30">
                    <img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop" alt="Elevated Essentials" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                  </div>
                  <div className="flex justify-between items-start pt-2">
                    <h3 className="font-headline-md text-xl text-on-primary group-hover:text-secondary transition-colors italic">Elevated Essentials</h3>
                    <span className="font-label-caps text-[10px] tracking-widest text-on-primary-container">03</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </section>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
`;
fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Fixed home page performance and lag');
