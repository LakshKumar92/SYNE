import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:max-w-[1400px] lg:mx-auto z-50 bg-surface-variant/90 backdrop-blur-lg rounded-[2rem] border border-outline-variant/60 shadow-sm">
      <div className="px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link className="font-headline-md text-[24px] tracking-tight text-on-primary" to="/">SYNE</Link>
          <nav className="hidden lg:flex items-center gap-2">
            <Link className={`uppercase tracking-[0.2em] text-[11px] px-4 py-2 transition-colors ${currentPath === '/new-arrivals' ? 'text-on-primary border-b border-on-primary/30' : 'text-on-primary-container hover:text-on-primary'}`} to="/new-arrivals">NEW ARRIVALS</Link>
            <Link className={`uppercase tracking-[0.2em] text-[11px] px-4 py-2 transition-colors ${currentPath === '/collections' ? 'text-on-primary border-b border-on-primary/30' : 'text-on-primary-container hover:text-on-primary'}`} to="/collections">COLLECTIONS</Link>
            <Link className={`uppercase tracking-[0.2em] text-[11px] px-4 py-2 transition-colors ${currentPath === '/about' ? 'text-on-primary border-b border-on-primary/30' : 'text-on-primary-container hover:text-on-primary'}`} to="/about">ABOUT</Link>
            <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }} className="ml-4">
              <Link to="/contact" className="uppercase tracking-[0.2em] text-[11px] text-surface bg-on-primary border border-on-primary px-6 py-2.5 rounded-full transition-colors">CONTACT</Link>
            </motion.div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-on-primary-container hover:text-on-primary transition-colors" aria-label="Toggle Theme">
            <span className="material-symbols-outlined text-[20px]">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
          </button>
          <button className="p-2 text-on-primary-container hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <Link to="/account" className="p-2 text-on-primary-container hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>
          <button className="p-2 text-on-primary-container hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
