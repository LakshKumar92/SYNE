import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-variant rounded-t-[2.5rem] md:rounded-t-[4rem] mt-12 md:mt-24 pt-24 pb-12 px-6 lg:px-12 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-20">
          <div className="md:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <span className="font-display-lg italic text-4xl tracking-tight text-on-primary block mb-6">SYNE</span>
              <p className="text-body-md text-on-primary-container max-w-sm leading-relaxed text-lg">
                Editorial luxury garments crafted with quiet intentionality and timeless silhouette engineering.
              </p>
            </div>
            <p className="font-label-caps uppercase tracking-[0.25em] text-[10px] text-on-primary-container hidden md:block">
              © {new Date().getFullYear()} SYNE Atelier Inc. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-8">
            <span className="font-label-caps uppercase tracking-[0.25em] text-[11px] text-secondary">Client Service</span>
            <nav className="flex flex-col space-y-5">
              <Link className="text-body-md text-on-primary hover:text-secondary transition-colors duration-300" to="/contact">Contact</Link>
              <Link className="text-body-md text-on-primary hover:text-secondary transition-colors duration-300" to="#">Shipping & Returns</Link>
              <Link className="text-body-md text-on-primary hover:text-secondary transition-colors duration-300" to="#">Privacy Policy</Link>
              <Link className="text-body-md text-on-primary hover:text-secondary transition-colors duration-300" to="#">Terms of Service</Link>
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col space-y-8">
            <span className="font-label-caps uppercase tracking-[0.25em] text-[11px] text-secondary">Newsletter</span>
            <p className="text-body-md text-on-primary leading-relaxed">
              Receive private invitations to viewings and new cycle releases.
            </p>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row items-stretch gap-0 border border-outline-variant/60 focus-within:border-secondary transition-colors rounded-full overflow-hidden bg-primary/40">
                <input 
                  className="bg-transparent border-none text-on-primary placeholder:text-on-primary-container text-body-md px-6 py-4 focus:outline-none focus:ring-0 w-full" 
                  placeholder="Email address" 
                  required 
                  type="email"
                />
                <button 
                  className="font-label-caps text-[11px] tracking-widest bg-on-primary text-primary px-8 py-4 transition-all duration-300 hover:bg-secondary hover:text-white whitespace-nowrap" 
                  type="submit"
                >
                  JOIN
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="font-label-caps uppercase tracking-[0.25em] text-[10px] text-on-primary-container mt-16 md:hidden text-center">
          © {new Date().getFullYear()} SYNE Atelier Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
