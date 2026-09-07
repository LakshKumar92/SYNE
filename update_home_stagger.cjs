const fs = require('fs');

let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const targetGridStr = `<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
              </div>`;

const newGridStr = `<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
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
                        <img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" alt="Structured Silhouettes" />
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
                        <img className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop" alt="Elevated Essentials" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                    </div>
                    <div className="flex justify-between items-start pt-2">
                        <h3 className="font-headline-md text-xl text-on-primary group-hover:text-secondary transition-colors italic">Elevated Essentials</h3>
                        <span className="font-label-caps text-[10px] tracking-widest text-on-primary-container">03</span>
                    </div>
                    </Link>
                </motion.div>
              </div>`;

if (code.includes(targetGridStr)) {
    code = code.replace(targetGridStr, newGridStr);
    
    // Also remove the md:mt-* from the Link elements since we moved them to the motion.div wrapper
    code = code.replace('className="group flex flex-col gap-6 cursor-pointer md:mt-12"', 'className="group flex flex-col gap-6 cursor-pointer"');
    code = code.replace('className="group flex flex-col gap-6 cursor-pointer md:mt-24"', 'className="group flex flex-col gap-6 cursor-pointer"');
    
    fs.writeFileSync('src/pages/Home.tsx', code);
    console.log('Staggered animation added successfully.');
} else {
    console.log('Target string not found.');
}
