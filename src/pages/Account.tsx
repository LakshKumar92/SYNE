import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Account() {
  return (
    <div className="bg-surface text-on-surface font-body-md ">
      <Header />
      <main className="w-full flex min-h-screen items-center justify-center p-margin-mobile pt-32">
        <div className="flex flex-col w-full max-w-container-max mx-auto text-on-surface bg-surface min-h-[calc(100vh-var(--spacing-margin-desktop)*2)]">
          
          
          <div className="flex flex-col md:flex-row gap-16 px-margin-desktop pb-24">
            <aside className="w-full md:w-64 shrink-0">
              <nav className="flex flex-col space-y-2 font-body-md text-on-surface-variant bg-surface-container rounded-lg p-4 border border-outline-variant">
                <Link className="py-3 px-4 bg-surface text-secondary border-l-2 border-secondary text-secondary font-medium flex items-center justify-between group" to="/account">
                  <span>Dashboard</span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
                <Link className="py-3 px-4 hover:bg-surface hover:text-secondary transition-all duration-300 rounded-r flex items-center justify-between group" to="#">
                  <span>Order History</span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
                <Link className="py-3 px-4 hover:bg-surface hover:text-secondary transition-all duration-300 rounded-r flex items-center justify-between group" to="#">
                  <span>Wishlist</span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
                <Link className="py-3 px-4 hover:bg-surface hover:text-secondary transition-all duration-300 rounded-r flex items-center justify-between group" to="#">
                  <span>Addresses</span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
                <Link className="py-3 px-4 hover:bg-surface hover:text-secondary transition-all duration-300 rounded-r flex items-center justify-between group" to="#">
                  <span>Payment Methods</span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
              </nav>
              <div className="mt-12 p-6 bg-surface-container rounded-lg border border-outline-variant text-center">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">diamond</span>
                <h3 className="font-headline-md text-xl mb-2 text-on-surface">VIP Tier</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-4">You are $240 away from Black Diamond status.</p>
                <div className="w-full bg-surface-variant h-1 mb-2 rounded-full overflow-hidden">
                  <div className="bg-on-surface h-full w-[70%]"></div>
                </div>
              </div>
            </aside>
            
            <main className="flex-1 flex flex-col gap-20">
              <section>
                <h2 className="font-headline-md text-3xl mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-on-surface hidden sm:inline-block"></span>
                  Recent Order Status
                </h2>
                <div className="bg-surface-container rounded-xl p-8 hover:shadow-lg transition-shadow duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-on-surface/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 relative z-10">
                    <div>
                      <h3 className="font-body-lg font-medium text-xl mb-1 text-on-surface">Order #4021</h3>
                      <p className="font-body-md text-on-surface-variant text-sm">Placed on Oct 25, 2023</p>
                    </div>
                    <span className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary-fixed-dim font-label-caps border border-secondary-container/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim"></span>
                      Delivered
                    </span>
                  </div>
                  <div className="space-y-4 mb-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 items-baseline">
                      <span className="font-label-caps text-on-surface-variant">Items:</span>
                      <span className="font-body-md text-on-surface">SYNE Leather Jacket, SYNE Silk Scarf</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 items-baseline">
                      <span className="font-label-caps text-on-surface-variant">Total:</span>
                      <span className="font-body-md text-on-surface">$1,295.00</span>
                    </div>
                  </div>
                  <div className="flex justify-end relative z-10">
                    <button className="px-6 py-3 border border-outline hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300 font-label-caps uppercase tracking-widest text-sm rounded flex items-center gap-2 text-secondary">
                      View Details
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
              </section>
              
              <section>
                <div className="flex justify-between items-end mb-8">
                  <h2 className="font-headline-md text-3xl flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-on-surface hidden sm:inline-block"></span>
                    Recommended for You
                  </h2>
                  <Link className="font-label-caps border-b border-on-surface pb-0.5 hover:text-secondary-variant transition-colors hidden sm:block text-on-surface" to="/collections">View All</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded mb-4">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqK5HelRiN1O5Gyyh57p_j6odFBQGBf0GUXEgbnC3RVl_SUSATgSrWK6ROhjVQiYm7bng1hKXXnPoAO_fnGnVqIFavYDU7hCbaZpNDKAH_t-zl0S9DiPLbXTf_K4e4WsNF4fcIxvSUY6I8h0iMhNL8BW6zrmTGa3VnikNfXd35YPu_yDnauuaHfgyhLZkQDgxOBHnGqjZCqwRbfNI_JyCWakWuWJeGSU4DqsQeoz3N-TsKgO_ZDDc9" alt="SYNE Chronograph Watch" />
                      <div className="absolute inset-0 bg-on-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-surface/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-white transform translate-y-2 group-hover:translate-y-0 text-secondary">
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                      </button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-body-md font-medium text-on-surface">SYNE Chronograph Watch</h3>
                      <p className="font-body-md text-on-surface-variant">$499</p>
                      <button className="mt-2 text-left font-label-caps text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300">
                        <span className="material-symbols-outlined text-[14px]">add</span> Add to Wishlist
                      </button>
                    </div>
                  </article>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded mb-4">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7xqtJzPNfWQr3I0RcJpo_wInzwuDTFLppeGrXXg_2tEcW2XvC8260LwJqayO-x6xtZzIP7rCwPhexRqICozhPJIC9FRws9i_5mlp1cpxzYt_399ARMOCnwO3M0odHxb1yQ8eIfgneWIdPKuxkaHrR9cYHEHVQVEsVbQfT2HN3-TY2zwrWqFFqlXQYZ-InaiA-CTUiYd4QANnnxZ0mxhXadD0c8GVdnCJaNbFsdwHgCptA8pPdBX2s" alt="Tortoiseshell Sunglasses" />
                      <div className="absolute inset-0 bg-on-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-surface/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-white transform translate-y-2 group-hover:translate-y-0 text-secondary">
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                      </button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-body-md font-medium text-on-surface">Tortoiseshell Sunglasses</h3>
                      <p className="font-body-md text-on-surface-variant">$300</p>
                      <button className="mt-2 text-left font-label-caps text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300">
                        <span className="material-symbols-outlined text-[14px]">add</span> Add to Wishlist
                      </button>
                    </div>
                  </article>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded mb-4">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9nBOCtAWMxOuGrP3Gvluov2hiS0NG4wnBQ96qxnk3FF4SmZINKBhA2EPPrcKN7f1lytdLMJ3QR73YIsIjd5pbRS_bHojwOBBgkZFiirFnv-4mxP-qaXAljlTYt9hiO7q9pIQbkiiMPnTz8F7gKScle-_NJjPIbgUKbzta9gEsVjOS2PG6YXGCfyWl6BW4YjCjh79LhNRGQnNBf5SXcgTFlD0ufsK0hv5OvREpNbWuLyNz8oUJNrcZ" alt="Structured Leather Tote" />
                      <div className="absolute inset-0 bg-on-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-surface/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-white transform translate-y-2 group-hover:translate-y-0 text-secondary">
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                      </button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-body-md font-medium text-on-surface">Structured Leather Tote</h3>
                      <p className="font-body-md text-on-surface-variant">$399</p>
                      <button className="mt-2 text-left font-label-caps text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300">
                        <span className="material-symbols-outlined text-[14px]">add</span> Add to Wishlist
                      </button>
                    </div>
                  </article>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded mb-4">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMd_VllY30WjT4HBIOjV7VS2g5j_L4EEobtFXv-pv4tD-LqF0200S1mUy2noHYbl36H9ui0aChfzHbq9Tt-2OD8t59KSY-xLhdynVm6-CG7xKMvUr8k-FLCPcDYcZs-bVYAjzoGMbxqGzMkFBkCsFquAdux0eqWYSw6XTkim6PIW7_DiTfvl98E2Ym4TjuyBORMen-fyYWTLGAg4RtufvWe-HbX1gHfcDP2_knYvTz6srJNt8_CLlY" alt="Classic Oxford Shoes" />
                      <div className="absolute inset-0 bg-on-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-surface/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-white transform translate-y-2 group-hover:translate-y-0 text-secondary">
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                      </button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-body-md font-medium text-on-surface">Classic Oxford Shoes</h3>
                      <p className="font-body-md text-on-surface-variant">$399</p>
                      <button className="mt-2 text-left font-label-caps text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300">
                        <span className="material-symbols-outlined text-[14px]">add</span> Add to Wishlist
                      </button>
                    </div>
                  </article>
                </div>
              </section>
            </main>
          </div>
          
          <Footer />
        </div>
      </main>
    </div>
  );
}
