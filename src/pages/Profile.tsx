import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-primary text-on-primary selection:bg-on-primary selection:text-primary dark-form-inputs">
      <Header />

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20">
        <section className="fade-in mb-14 md:mb-20 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 border border-outline-variant relative shadow-2xl ring-1 ring-white/10">
            <img className="w-full h-full object-cover grayscale brightness-95 contrast-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_qiGNxrZelyQw-21mlKRmNUvlwHauU-NIDfSxedWb5HhrIYZHNbrQUQXGjnBpZF7DUSNKJ3DqUGEhiUyNQYlkyTASLVt4Z9dKcy-potG58Z7cwolLC0PaTPTcyTZTnmG5nWDgEL-f796Qvx5KkGAz7u5u9IEKqsYOeBgtyWNzziBvgMgosFVhxYZwJETf4hIBMAtxxsUfHL0_Uga33S-zh-jsgkxdM3nsw6JcBtZ-ehjAlyi0M6GO" alt="Alexander Thorne" />
          </div>
          <div className="text-center md:text-left pt-2 md:pt-4">
            <h1 className="text-display-lg-mobile md:text-display-lg font-headline-md text-on-primary mb-2 tracking-tight">Alexander Thorne</h1>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6 tracking-wide">Syne Circle Member since 2023</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="px-7 py-3 bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary text-label-caps font-label-caps border border-on-primary hover:bg-transparent hover:text-on-primary transition-all duration-300">EDIT PROFILE</button>
              <button className="px-7 py-3 bg-transparent text-on-surface text-label-caps font-label-caps border border-outline hover:border-secondary hover:text-secondary transition-colors duration-300">SIGN OUT</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <aside className="md:col-span-3 fade-in delay-100 mb-8 md:mb-0">
            <div className="md:bg-surface md:border md:border-outline-variant/80 md:p-3 md:rounded-none sticky top-28">
              <nav className="flex flex-row md:flex-col gap-2 md:gap-1 overflow-x-auto pb-4 md:pb-0 border-b md:border-b-0 border-outline-variant/80">
                <Link className="text-body-md font-body-md text-on-surface-variant hover:text-on-primary hover:bg-surface-variant px-4 py-3 transition-colors whitespace-nowrap block" to="/profile">Personal Info</Link>
                <Link className="text-body-md font-body-md text-on-primary font-medium bg-surface-variant border-b-2 md:border-b-0 md:border-l-2 border-on-primary px-4 py-3 whitespace-nowrap block" to="/profile">Style Profile</Link>
                <Link className="text-body-md font-body-md text-on-surface-variant hover:text-on-primary hover:bg-surface-variant px-4 py-3 transition-colors whitespace-nowrap block" to="/account">Orders</Link>
                <Link className="text-body-md font-body-md text-on-surface-variant hover:text-on-primary hover:bg-surface-variant px-4 py-3 transition-colors whitespace-nowrap block" to="/profile">Security</Link>
              </nav>
            </div>
          </aside>

          <div className="md:col-span-9 fade-in delay-200">
            <div className="mb-10 pb-5 border-b border-outline-variant">
              <h2 className="text-headline-md font-headline-md text-on-primary mb-2">Style Profile</h2>
              <p className="text-body-md font-body-md text-on-surface-variant">Curate your measurements and aesthetic preferences to refine your SYNE experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              <div className="bg-surface p-8 border border-outline-variant shadow-sm">
                <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-6 tracking-widest uppercase">BODY MEASUREMENTS (IN)</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-outline-variant pb-2 group">
                    <label className="text-body-md font-body-md text-on-surface">Neck</label>
                    <input className="w-20 text-right text-body-md font-body-md text-on-primary bg-transparent focus:outline-none tracking-wide" step="0.5" type="number" defaultValue="15.5"/>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant pb-2 group">
                    <label className="text-body-md font-body-md text-on-surface">Chest</label>
                    <input className="w-20 text-right text-body-md font-body-md text-on-primary bg-transparent focus:outline-none tracking-wide" type="number" defaultValue="40"/>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant pb-2 group">
                    <label className="text-body-md font-body-md text-on-surface">Waist</label>
                    <input className="w-20 text-right text-body-md font-body-md text-on-primary bg-transparent focus:outline-none tracking-wide" type="number" defaultValue="32"/>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant pb-2 group">
                    <label className="text-body-md font-body-md text-on-surface">Inseam</label>
                    <input className="w-20 text-right text-body-md font-body-md text-on-primary bg-transparent focus:outline-none tracking-wide" type="number" defaultValue="34"/>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-8 border border-outline-variant flex flex-col justify-between gap-8 shadow-sm">
                <div>
                  <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-5 tracking-widest uppercase">PREFERRED FIT</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2.5 border border-outline-variant text-body-md font-body-md text-on-surface-variant hover:border-secondary hover:text-secondary bg-surface-variant/50 transition-all duration-200">Slim</button>
                    <button className="px-5 py-2.5 bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary font-medium border border-on-primary text-body-md font-body-md transition-all shadow-sm">Tailored</button>
                    <button className="px-5 py-2.5 border border-outline-variant text-body-md font-body-md text-on-surface-variant hover:border-secondary hover:text-secondary bg-surface-variant/50 transition-all duration-200">Oversized</button>
                  </div>
                </div>
                <div>
                  <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-5 tracking-widest uppercase">COLOR PALETTE</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2.5 bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary font-medium border border-on-primary text-body-md font-body-md transition-all shadow-sm">Monochrome</button>
                    <button className="px-5 py-2.5 border border-outline-variant text-body-md font-body-md text-on-surface-variant hover:border-secondary hover:text-secondary bg-surface-variant/50 transition-all duration-200">Earth Tones</button>
                    <button className="px-5 py-2.5 border border-outline-variant text-body-md font-body-md text-on-surface-variant hover:border-secondary hover:text-secondary bg-surface-variant/50 transition-all duration-200">Pastels</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in delay-300">
              <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-6 tracking-widest border-b border-outline-variant pb-3 uppercase">WARDROBE PREFERENCES</h3>
              <div className="space-y-7 mt-6">
                <div className="flex items-center justify-between gap-6 py-2">
                  <div>
                    <h4 className="text-body-lg font-body-lg text-on-primary mb-1 font-medium">Sustainability Focus</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">Prioritize items made from recycled materials or sustainable processes in recommendations.</p>
                  </div>
                  <div className="relative shrink-0">
                    <label className="flex items-center cursor-pointer">
                      <input defaultChecked className="toggle-checkbox" type="checkbox"/>
                      <div className="toggle-switch-track">
                        <div className="toggle-switch-thumb"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 py-2 border-t border-outline-variant pt-6">
                  <div>
                    <h4 className="text-body-lg font-body-lg text-on-primary mb-1 font-medium">New Arrival Notifications</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">Receive early access alerts for drops matching your style profile.</p>
                  </div>
                  <div className="relative shrink-0">
                    <label className="flex items-center cursor-pointer">
                      <input className="toggle-checkbox" type="checkbox"/>
                      <div className="toggle-switch-track">
                        <div className="toggle-switch-thumb"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-14 flex justify-end">
              <button className="px-10 py-4 bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary text-label-caps font-label-caps hover:bg-transparent hover:text-on-primary border border-on-primary tracking-widest transition-all duration-300">SAVE PREFERENCES</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
