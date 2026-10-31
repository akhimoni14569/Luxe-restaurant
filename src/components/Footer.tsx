import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, ArrowRight, Instagram, Facebook, Youtube, Award, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, setActiveTab } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#100b09] text-[#cfc4b6] border-t border-[#241a15] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col cursor-pointer" onClick={() => setActiveTab('home')}>
              <span className="text-2xl font-serif-luxury font-bold tracking-widest text-[#faf7f2] uppercase">
                LUXE
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#c5a059] uppercase font-sans -mt-1 font-semibold">
                RESTAURANT
              </span>
            </div>

            <p className="text-xs text-[#a89b8d] font-light leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#instagram"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-[#1c1411] border border-[#2d211b] hover:border-[#c5a059] text-[#c5a059] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-[#1c1411] border border-[#2d211b] hover:border-[#c5a059] text-[#c5a059] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-[#1c1411] border border-[#2d211b] hover:border-[#c5a059] text-[#c5a059] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#faf7f2] font-semibold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {t.nav.menu}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('story')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {t.nav.story}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('reservations')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {t.nav.reservations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#faf7f2] font-semibold">
              {t.footer.hours}
            </h4>
            <div className="space-y-2 text-xs text-[#a89b8d] font-light">
              <div>
                <strong className="text-[#faf7f2] font-medium block">Lunch Service</strong>
                Tue – Sun: 12:30 PM – 03:30 PM
              </div>
              <div>
                <strong className="text-[#faf7f2] font-medium block">Dinner Service</strong>
                Mon – Sun: 06:30 PM – 11:30 PM
              </div>
              <div className="text-[#c5a059]">
                <strong className="font-medium block">Weekend Royal Brunch</strong>
                Sat & Sun: 11:00 AM – 03:30 PM
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#faf7f2] font-semibold">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#a89b8d] font-light leading-relaxed">
              {t.footer.newsletterSubtitle}
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#181210] border border-emerald-500/50 rounded text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{t.footer.subscribedMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 bg-[#1c1411] border border-[#2d211b] focus:border-[#c5a059] rounded text-xs text-[#faf7f2] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-semibold text-xs rounded transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Client Disclaimer */}
        <div className="pt-8 border-t border-[#201713] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7d6f63] gap-4">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
          <div className="text-center sm:text-right max-w-md">
            {t.footer.disclaimer}
          </div>
        </div>

      </div>
    </footer>
  );
};
