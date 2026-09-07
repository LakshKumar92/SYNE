const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Change heroImages array
const newHeroImages = `const heroImages = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", // Group fashion landscape
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop", // Woman white landscape
  "https://images.unsplash.com/photo-1485230895905-ef41725514f7?q=80&w=2000&auto=format&fit=crop", // Jacket/motorcycle
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000&auto=format&fit=crop", // Man in suit landscape
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"  // Face portrait
];`;
code = code.replace(/const heroImages = \[[\s\S]*?\];/, newHeroImages);

// 2. Adjust background images to object-top or bg-top instead of bg-center so faces aren't cut
code = code.replace(/bg-cover bg-center/g, 'bg-cover bg-top');

// 3. Update the text container (Selector 1) for readability
// Current: className="relative z-10 text-center px-4 pt-20 max-w-5xl mx-auto flex flex-col items-center gap-12"
// Let's add a luxurious glass background to it.
code = code.replace(
  /className="relative z-10 text-center px-4 pt-20 max-w-5xl mx-auto flex flex-col items-center gap-12"/g,
  'className="relative z-10 text-center p-12 md:p-16 max-w-4xl mx-auto flex flex-col items-center gap-10 bg-primary/60 backdrop-blur-xl border border-outline/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl"'
);
// Remove the drop-shadow from the h1 since we now have a glass container
code = code.replace(/drop-shadow-\[0_4px_24px_rgba\(250,248,245,0\.8\)\]/g, '');

// 4. Update the bottom 3 images (Curated selections)
// Image 1: High-fashion draped dress
code = code.replace(
  /"https:\/\/lh3\.googleusercontent\.com\/aida-public\/AB6AXuCbBmqFRgr2fLt-ngHD9stsKCHULq8-3C6h0ZTw-rRxjb2AtNCj61hCjfyeMVbnzdlm0Ly5WdZK1i8aYqHwL70rudxqgj1E-ZJ2DWpZ5qsbyk_8zEQYAUYVnrGZdyaBsttuIGfb8y_tzPM78sKoOICrtDyfXPP5iyt82FW1jhjaXgtAr8n7r6XmsaRkQmJsOQ7eCXFg0-B0kYKQa9BGlRjUXbCl368f_d4ZLRi4XWTnWYR_IFao3qys"/g,
  '"https://images.unsplash.com/photo-1550614000-4b95d4158223?q=80&w=1000&auto=format&fit=crop"'
);

// Image 2: High-fashion editorial grid design
code = code.replace(
  /"https:\/\/lh3\.googleusercontent\.com\/aida-public\/AB6AXuDWdS2gOKZQkZpXUw9c2Mno0Kp5dvbuyR73fPKFI0SjsorC4V_D0G_4pXIfdnNoh6LzaC57hy6RBMHeUHs2PbK8uKk9Eftk6C1u82al6mZTe6AAUCcJje9mR172zn9NKWcR9Vna-QwLRVE7ylnyOUzVmcvc3DPiitgGaFdyTeJjFBBrXEwEYwnF5Rf1RsrtQLSykP5vrTymf1InVpll8oqbofxJe8QkGGrHg_SwQO3MvhNH-cSy31-x"/g,
  '"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop"'
);

// Image 3: Tailored precision jackets
code = code.replace(
  /"https:\/\/lh3\.googleusercontent\.com\/aida-public\/AB6AXuBRx6nTyOvMmDb-BFO5fyZOBRDhZmTtPZdgEtpkxUJ1zSjYOnJaCRgfCSc4zzRY_23VMO4VCUaYyOcZTXwqw7l6FWoLNHhumsLVJXW78MO89BQMDtPTXTkv1gY3DRRJJJNC8ruQQO5ouhIL-DZGG59bKhg--i4sW9gwXpYKapzEMSyjR7TB_sNpshPPaFQW3p6tOKWkNyCl90tCM4uFD6NQmM8L83c0ciQ4xoLuDJh0jQIuldsJz5PS"/g,
  '"https://images.unsplash.com/photo-1509631179647-0c5000508c11?q=80&w=1000&auto=format&fit=crop"'
);

fs.writeFileSync('src/pages/Home.tsx', code);
