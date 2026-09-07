import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shirt, Archive, Wind, Compass } from 'lucide-react';

const About = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-12');
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('.fade-section');
        sections.forEach((section) => observerRef.current?.observe(section));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <div className="bg-primary text-on-primary min-h-screen font-body-md overflow-x-hidden selection:bg-secondary selection:text-white">
            
            <Header />

            <main className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-container-max mx-auto">
                
                {/* Hero Section */}
                <section className="mb-32 md:mb-48 fade-in flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                    <div className="flex-1">
                        <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary block mb-6">INTRODUCTION</span>
                        <h1 className="font-display-lg text-6xl md:text-8xl tracking-tight mb-8 leading-[0.9] italic">
                            Welcome<br />
                            <span className="text-secondary">to Syne.</span>
                        </h1>
                    </div>
                    <div className="flex-1 mt-4 md:mt-12">
                        <p className="text-on-primary-container text-lg md:text-xl leading-relaxed mb-8">
                            At Syne, we believe that people do not necessarily struggle to find clothes; they struggle to know what to do with them. 
                        </p>
                        <p className="text-on-primary-container text-lg md:text-xl leading-relaxed">
                            Traditional online shopping creates decision fatigue by overwhelming you with individual choices. We approach fashion from the opposite direction by asking "What should I wear?" instead of "What clothes should I buy?".
                        </p>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="fade-section opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-32 md:mb-48">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="aspect-[3/4] md:aspect-square bg-surface border border-outline-variant/30 relative overflow-hidden group rounded-[2rem]">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent z-10"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
                                alt="Syne Philosophy" 
                                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="md:pl-12">
                            <span className="text-[11px] uppercase tracking-[0.25em] text-secondary block mb-4">OUR PHILOSOPHY</span>
                            <h2 className="font-display-lg text-4xl lg:text-5xl mb-8 italic tracking-tight leading-tight">
                                A private shopping environment that makes dressing well effortless.
                            </h2>
                            <p className="text-on-primary-container text-lg leading-relaxed mb-6">
                                Syne is designed to be your personal digital stylist and outfit discovery platform. We wanted to create a judgment-free space focused on elevation rather than exhaustion.
                            </p>
                            <p className="text-on-primary-container text-lg leading-relaxed mb-12">
                                We believe that there is no single "perfect" body for fashion; instead of chasing fleeting influencer trends, we help you find what actually looks structurally and aesthetically good on you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What Sets Us Apart */}
                <section className="mb-12 md:mb-24 fade-section opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <div className="mb-16 md:mb-24 text-center">
                        <h2 className="font-display-lg text-5xl md:text-6xl italic tracking-tight mb-4">What Sets Us Apart</h2>
                        <div className="w-16 h-px bg-secondary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20">
                        
                        <div className="border-t border-outline-variant/50 pt-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[11px] uppercase tracking-[0.25em] text-secondary block">01. Curation</span>
                                <Shirt size={22} strokeWidth={1.5} className="text-secondary" />
                            </div>
                            <h3 className="font-headline-md text-3xl mb-4 italic">The Outfit-First Approach</h3>
                            <p className="text-on-primary-container text-lg leading-relaxed">
                                We prioritize complete outfits over individual products, deliberately reducing the number of decisions you have to make.
                            </p>
                        </div>

                        <div className="border-t border-outline-variant/50 pt-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[11px] uppercase tracking-[0.25em] text-secondary block">02. Purpose</span>
                                <Archive size={22} strokeWidth={1.5} className="text-secondary" />
                            </div>
                            <h3 className="font-headline-md text-3xl mb-4 italic">Wardrobe Optimization</h3>
                            <p className="text-on-primary-container text-lg leading-relaxed">
                                Our ultimate goal is to help you make better use of the clothes you already own, rather than simply pushing you to buy more.
                            </p>
                        </div>

                        <div className="border-t border-outline-variant/50 pt-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[11px] uppercase tracking-[0.25em] text-secondary block">03. Environment</span>
                                <Wind size={22} strokeWidth={1.5} className="text-secondary" />
                            </div>
                            <h3 className="font-headline-md text-3xl mb-4 italic">A Calm Experience</h3>
                            <p className="text-on-primary-container text-lg leading-relaxed">
                                We removed the giant product catalogs, aggressive advertisements, and endless filters to provide a clean, minimalist, and intelligent visual space.
                            </p>
                        </div>

                        <div className="border-t border-outline-variant/50 pt-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[11px] uppercase tracking-[0.25em] text-secondary block">04. Navigation</span>
                                <Compass size={22} strokeWidth={1.5} className="text-secondary" />
                            </div>
                            <h3 className="font-headline-md text-3xl mb-4 italic">Guided Discovery</h3>
                            <p className="text-on-primary-container text-lg leading-relaxed">
                                We handle the color coordination and styling so you can effortlessly find the exact pieces you need without needing to be a fashion expert.
                            </p>
                        </div>

                    </div>
                </section>

            </main>
            
            <Footer />

        </div>
    );
};

export default About;
