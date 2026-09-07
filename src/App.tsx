import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Home from './pages/Home';
import Collections from './pages/Collections';
import NewArrivals from './pages/NewArrivals';
import Account from './pages/Account';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import About from './pages/About';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Adjust for premium buttery smoothness
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
