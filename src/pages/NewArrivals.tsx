import { ImageWithSkeleton } from '../components/ImageWithSkeleton';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ImageMappingService } from '../services/ImageMappingService';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function NewArrivals() {
  const [notifyState, setNotifyState] = useState(false);

  const products = [
    { title: 'Sculpted Wool Overcoat', price: '$1,250', color: 'Deep Charcoal', category: 'outerwear', tag: 'RUNWAY', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop', swatches: ['bg-[#1b1c1c]', 'bg-[#3d403e]', 'bg-[#524a42]'] },
    { title: 'Architectural Structured Tote', price: '$720', color: 'Noir Leather', category: 'leather', tag: '', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop', swatches: ['bg-[#0a0a0a]', 'bg-[#2a2421]'] },
    { title: 'Merino Cashmere Funnel Neck', price: '$380', color: 'Washed Slate', category: 'knitwear', tag: '', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop', swatches: ['bg-[#5d6365]', 'bg-[#1e2022]', 'bg-[#dedbd4]'] },
    { title: 'Fluid Crepe Tailored Trouser', price: '$490', color: 'Obsidian', category: 'tailoring', tag: '', image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=800&auto=format&fit=crop', swatches: ['bg-[#111112]', 'bg-[#383a37]'] },
    { title: 'Sheer Silk Organza Blouse', price: '$360', color: 'Midnight Black', category: 'tailoring', tag: '', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop', swatches: ['bg-[#17181c]', 'bg-[#c9c6be]'] },
    { title: 'Minimalist Leather Derby', price: '$620', color: 'Glazed Ebony', category: 'leather', tag: '', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop', swatches: ['bg-[#0d0e10]', 'bg-[#3b2b24]'] }
  ];

  return (
    <div className="bg-primary text-on-primary font-body-md antialiased min-h-screen">
      <Header />
      <main className="w-full pt-32 pb-20">
        
        {/* Header Section */}
        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-16 lg:mb-24 text-center fade-in">
          <span className="font-label-caps text-[11px] tracking-[0.2em] text-secondary mb-4 block">THE LATEST</span>
          <h1 className="font-display-lg text-5xl md:text-7xl lg:text-8xl tracking-tight text-on-primary mb-6 italic">
            Autumn / Winter
          </h1>
          <p className="max-w-xl mx-auto text-on-primary-container text-lg">
            Discover our newest arrivals. Elevated essentials crafted with precision, featuring structural silhouettes and uncompromising materials.
          </p>
        </section>

        {/* Product Grid */}
        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product, idx) => (
              <motion.article 
                key={idx} 
                className="group flex flex-col space-y-5 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: idx * 0.1 }}
              >
                <div className="relative w-full aspect-[4/5] bg-primary-container overflow-hidden rounded-[2rem] border border-outline-variant/30">
                  {product.tag && (
                    <span className="absolute top-4 left-4 z-10 font-label-caps text-[10px] tracking-widest px-3 py-1 bg-primary/90 backdrop-blur-sm text-on-primary rounded-full">
                      {product.tag}
                    </span>
                  )}
                  <ImageWithSkeleton src={product.image} alt={product.title} className="w-full h-full absolute inset-0 z-10" imgClassName="group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                  
                  {/* Quick View Button Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6 pb-8 pointer-events-none">
                    <button className="w-full bg-primary/95 backdrop-blur-md text-on-primary py-3.5 font-label-caps text-[11px] tracking-widest shadow-lg pointer-events-auto hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full">
                      QUICK VIEW
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <h3 className="font-headline-md text-lg text-on-primary tracking-wide">{product.title}</h3>
                    <p className="font-body-md text-sm text-on-primary-container">{product.color}</p>
                  </div>
                  <p className="font-body-md text-on-primary">{product.price}</p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {product.swatches.map((color, sIdx) => (
                    <span key={sIdx} className={`w-3.5 h-3.5 rounded-full ${color} shadow-sm border border-black/10`}></span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="w-full py-32 bg-surface-variant text-center relative overflow-hidden my-24">
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
            <span className="font-label-caps text-[11px] tracking-[0.3em] text-secondary">Design Manifesto</span>
            <blockquote className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-light italic leading-snug text-on-primary">
              “True luxury is found in the deliberate absence of noise.”
            </blockquote>
            <div className="flex items-center justify-center gap-6 pt-8">
              <span className="w-16 h-px bg-secondary/30"></span>
              <cite className="font-label-caps text-[10px] tracking-[0.25em] text-secondary not-italic">SYNE Atelier Notes — Milan</cite>
              <span className="w-16 h-px bg-secondary/30"></span>
            </div>
          </div>
        </section>

        {/* Capsule Preview Section */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] bg-primary-container overflow-hidden group rounded-[2rem]">
              <ImageWithSkeleton src={ImageMappingService.getImageUrl('Menswear', 'Shirts', 'Athletic', 995)} alt="Winter Capsule Preview" className="w-full h-full absolute inset-0" imgClassName="group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-6 left-6">
                <span className="font-label-caps text-[10px] tracking-widest px-3 py-1.5 bg-primary/90 backdrop-blur-md text-on-primary shadow-sm rounded-full">PREVIEW</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white flex items-baseline justify-between">
                <span className="font-label-caps text-[11px] tracking-widest text-white/80">RELEASE DATE</span>
                <span className="font-headline-md text-xl tracking-wide">November 28, 2026</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-10 lg:pl-10">
              <div>
                <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary block mb-4">PRIVILEGE ACCESS</span>
                <h2 className="font-display-lg text-5xl lg:text-7xl text-on-primary tracking-tight italic mb-6">
                  The Winter Capsule
                </h2>
                <p className="font-body-md text-lg text-on-primary-container leading-relaxed">
                  Numbered edition coats and heavyweight cashmere accessories. Members receive priority allocation forty-eight hours prior to general public release.
                </p>
              </div>
              
              {!notifyState ? (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setNotifyState(true); }}>
                  <div className="flex flex-col sm:flex-row items-stretch gap-0 border border-outline/30 focus-within:border-secondary transition-colors rounded-[2rem] overflow-hidden">
                    <input className="bg-transparent border-none text-on-primary placeholder:text-on-primary-container text-body-md px-6 py-4 focus:outline-none focus:ring-0 w-full" placeholder="Enter client email" required type="email"/>
                    <button className="font-label-caps text-[11px] tracking-widest bg-on-primary text-primary px-8 py-4 transition-all duration-300 hover:bg-secondary hover:text-white whitespace-nowrap" type="submit">
                      NOTIFY ME
                    </button>
                  </div>
                  <p className="font-label-caps text-[10px] text-on-primary-container tracking-wider uppercase pl-2">Strictly private and confidential. Unsubscribe at any time.</p>
                </form>
              ) : (
                <div className="p-6 border border-secondary/20 bg-surface-variant rounded-[2rem] text-secondary text-body-md">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[24px]">check_circle</span>
                    <p className="font-medium">Your address has been registered for VIP allocation.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
