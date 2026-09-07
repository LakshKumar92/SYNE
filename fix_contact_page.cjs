const fs = require('fs');
let code = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="bg-primary text-on-primary min-h-screen font-body-md overflow-x-hidden selection:bg-secondary selection:text-white">
            <Header />

            <main className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-container-max mx-auto fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                    
                    {/* Info Section */}
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary block mb-6">CONNECT WITH US</span>
                            <h1 className="font-display-lg text-6xl md:text-8xl tracking-tight mb-8 italic">
                                Inquiries.
                            </h1>
                            <p className="text-on-primary-container text-lg md:text-xl leading-relaxed mb-16 max-w-md">
                                For client services, press relations, or bespoke tailoring requests, please direct your communication below. Our concierges respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-12 pb-12 md:pb-0">
                            <div>
                                <h3 className="font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-4">Client Services</h3>
                                <p className="text-lg font-medium text-on-primary">concierge@syne-studio.com</p>
                                <p className="text-on-primary-container mt-1">+1 (800) 555-0199</p>
                            </div>
                            
                            <div>
                                <h3 className="font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-4">Press & Partnerships</h3>
                                <p className="text-lg font-medium text-on-primary">press@syne-studio.com</p>
                            </div>

                            <div>
                                <h3 className="font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-4">Flagship Atelier</h3>
                                <p className="text-lg font-medium text-on-primary">142, Rue de Turenne</p>
                                <p className="text-on-primary-container mt-1">75003 Paris, France</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-primary-container/20 p-8 md:p-12 rounded-[2rem] border border-outline-variant/30">
                        {isSubmitted ? (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center py-24 fade-in">
                                <span className="material-symbols-outlined text-5xl mb-6 text-secondary">check_circle</span>
                                <h3 className="font-headline-md text-4xl mb-4 italic text-on-primary">Transmission Received.</h3>
                                <p className="text-on-primary-container text-lg">Our concierge will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 fade-in">
                                <div>
                                    <label htmlFor="name" className="block font-label-caps text-[10px] uppercase tracking-[0.2em] text-on-primary-container mb-3">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required
                                        className="w-full bg-transparent border-b border-outline-variant/60 py-3 text-on-primary focus:outline-none focus:border-secondary transition-colors"
                                        value={formState.name}
                                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-label-caps text-[10px] uppercase tracking-[0.2em] text-on-primary-container mb-3">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required
                                        className="w-full bg-transparent border-b border-outline-variant/60 py-3 text-on-primary focus:outline-none focus:border-secondary transition-colors"
                                        value={formState.email}
                                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block font-label-caps text-[10px] uppercase tracking-[0.2em] text-on-primary-container mb-3">Subject</label>
                                    <div className="relative">
                                        <select 
                                            id="subject" 
                                            className="w-full bg-transparent border-b border-outline-variant/60 py-3 text-on-primary focus:outline-none focus:border-secondary transition-colors appearance-none rounded-none cursor-pointer"
                                            value={formState.subject}
                                            onChange={(e) => setFormState({...formState, subject: e.target.value})}
                                        >
                                            <option className="bg-primary text-on-primary" value="General Inquiry">General Inquiry</option>
                                            <option className="bg-primary text-on-primary" value="Order Status">Order Status</option>
                                            <option className="bg-primary text-on-primary" value="Bespoke Tailoring">Bespoke Tailoring</option>
                                            <option className="bg-primary text-on-primary" value="Press">Press & PR</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[20px]">
                                            expand_more
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-label-caps text-[10px] uppercase tracking-[0.2em] text-on-primary-container mb-3">Message</label>
                                    <textarea 
                                        id="message" 
                                        required
                                        rows={5}
                                        className="w-full bg-transparent border-b border-outline-variant/60 py-3 text-on-primary focus:outline-none focus:border-secondary transition-colors resize-y"
                                        value={formState.message}
                                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full mt-4 border border-on-primary py-4 text-[11px] font-label-caps uppercase tracking-widest hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300 rounded-full disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="material-symbols-outlined animate-spin text-[16px]">sync</span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Submit Inquiry'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
`;

fs.writeFileSync('src/pages/Contact.tsx', code);
console.log('Updated Contact Page');
