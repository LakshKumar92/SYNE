import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { initialProducts, Product } from '../data/products';
import { Link } from 'react-router-dom';
import { ImageMappingService } from '../services/ImageMappingService';
import { ImageWithSkeleton } from '../components/ImageWithSkeleton';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  
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
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary-container/40 blur-[150px]"></div>
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
                    className="flex-1 w-full relative mt-6 lg:mt-12"
                    style={{ y: y1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-lg mx-auto lg:ml-auto overflow-hidden rounded-[3rem] border border-outline-variant/30 shadow-2xl">
                        <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
                        <ImageWithSkeleton src={ImageMappingService.getImageUrl('Womenswear', 'Shirts', 'Hourglass', 991)} alt="Editorial Fashion" className="w-full h-full" imgClassName="w-full h-full object-cover" />
                    </div>
                    {/* Decorative floating element */}
                    <motion.div 
                        className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary-container rounded-full blur-3xl opacity-60 z-0"
                        style={{ y: y2 }}
                    ></motion.div>
                </motion.div>
            </motion.div>
          </section>
          
          {/* Outfit Generator Section */}
          <section className="w-full py-32 px-6 lg:px-12 bg-primary">
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
                            className={`px-6 py-2.5 rounded-full font-label-caps text-[10px] tracking-widest transition-all duration-300 ${shuffleGender === 'Menswear' ? 'bg-on-primary text-primary shadow-sm' : 'text-on-primary-container hover:text-on-primary'}`}
                        >
                            MENSWEAR
                        </button>
                        <button 
                            onClick={() => handleGenderSwitch('Womenswear')}
                            className={`px-6 py-2.5 rounded-full font-label-caps text-[10px] tracking-widest transition-all duration-300 ${shuffleGender === 'Womenswear' ? 'bg-on-primary text-primary shadow-sm' : 'text-on-primary-container hover:text-on-primary'}`}
                        >
                            WOMENSWEAR
                        </button>
                    </div>
                    <button 
                        onClick={() => generateOutfit(shuffleGender)}
                        className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-on-primary hover:scale-105 transition-all duration-300 shadow-md group"
                    >
                        <span className={`material-symbols-outlined text-[20px] ${isShuffling ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`}>shuffle</span>
                    </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {[outfit.top, outfit.bottom, outfit.shoe].map((item, idx) => (
                      <motion.div 
                          key={`${item ? item.id : 'empty'}-${idx}-${Date.now()}`}
                          className="group flex flex-col gap-4"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: isShuffling ? 0.3 : 1, scale: isShuffling ? 0.98 : 1 }}
                          transition={{ duration: 0.4 }}
                      >
                          {item ? (
                              <Link to="/collections">
                                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30 bg-surface-variant">
                                      <ImageWithSkeleton src={item.image} alt={item.title} className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />
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
                              <div className="relative w-full aspect-[4/5] rounded-[2rem] border border-outline-variant/30 bg-surface-variant/50 flex items-center justify-center">
                                  <span className="font-label-caps text-[10px] text-on-primary-container tracking-widest">NO ITEM FOUND</span>
                              </div>
                          )}
                      </motion.div>
                  ))}
              </div>
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
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <Link className="group flex flex-col gap-6 cursor-pointer" to="/collections">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30">
                        <ImageWithSkeleton src={ImageMappingService.getImageUrl('Womenswear', 'Pants', 'Slim', 992)} alt="Silk & Drape Elements" className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                    </div>
                    <div className="flex justify-between items-start pt-2">
                        <h3 className="font-headline-md text-xl text-on-primary group-hover:text-secondary transition-colors italic">Silk & Drape</h3>
                        <span className="font-label-caps text-[10px] tracking-widest text-on-primary-container">01</span>
                    </div>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="md:mt-12"
                >
                    <Link className="group flex flex-col gap-6 cursor-pointer" to="/collections">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30">
                        <ImageWithSkeleton src={ImageMappingService.getImageUrl('Menswear', 'Shirts', 'Broad', 993)} alt="Structured Silhouettes" className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                    </div>
                    <div className="flex justify-between items-start pt-2">
                        <h3 className="font-headline-md text-xl text-on-primary group-hover:text-secondary transition-colors italic">Structured Silhouette</h3>
                        <span className="font-label-caps text-[10px] tracking-widest text-on-primary-container">02</span>
                    </div>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="md:mt-24"
                >
                    <Link className="group flex flex-col gap-6 cursor-pointer" to="/collections">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-outline-variant/30">
                        <ImageWithSkeleton src={ImageMappingService.getImageUrl('Menswear', 'Shoes', 'Athletic', 994)} alt="Elevated Essentials" className="w-full h-full" imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                    </div>
                    <div className="flex justify-between items-start pt-2">
                        <h3 className="font-headline-md text-xl text-on-primary group-hover:text-secondary transition-colors italic">Elevated Essentials</h3>
                        <span className="font-label-caps text-[10px] tracking-widest text-on-primary-container">03</span>
                    </div>
                    </Link>
                </motion.div>
              </div>
            </motion.div>
          </section>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
