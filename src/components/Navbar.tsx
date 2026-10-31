import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, ShoppingBag, Menu as MenuIcon, X, Calendar, Globe, User, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t, activeTab, setActiveTab, cartCount, openCart, openSearch } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'menu', label: t.nav.menu },
    { id: 'story', label: t.nav.story },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'reservations', label: t.nav.reservations },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#181210]/95 backdrop-blur-md border-b border-[#2d221c] transition-all duration-300">
        {/* Top Announcement & Quick Demo Links Bar */}
        <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-[#120e0c] text-[11px] text-[#a89b8d] border-b border-[#241a16] tracking-wide">
          <div className="flex items-center gap-4">
            <span className="text-[#c5a059] font-medium">Fine Dining & Epicurean Sanctuary</span>
            <span className="text-[#4a3a32]">·</span>
            <span>Gulshan Avenue, Dhaka</span>
            <span className="text-[#4a3a32]">·</span>
            <span>Table Concierge: +880 1711-LUXE-00</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex items-center gap-1.5 transition-colors ${
                activeTab === 'customer' ? 'text-[#c5a059]' : 'hover:text-[#faf7f2]'
              }`}
            >
              <User className="w-3 h-3 text-[#c5a059]" />
              <span>{t.nav.customerPortal}</span>
            </button>
            <span className="text-[#4a3a32]">·</span>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-1.5 transition-colors ${
                activeTab === 'admin' ? 'text-[#c5a059]' : 'hover:text-[#faf7f2]'
              }`}
            >
              <ShieldCheck className="w-3 h-3 text-[#c5a059]" />
              <span>{t.nav.adminPortal}</span>
            </button>
          </div>
        </div>

        {/* Main 1-Row Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Brand Zone */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group flex flex-col justify-center cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl font-serif-luxury font-bold tracking-wider text-[#faf7f2] group-hover:text-[#c5a059] transition-colors uppercase">
                LUXE
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#c5a059] uppercase font-sans -mt-1 font-medium">
                RESTAURANT
              </span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium tracking-wider uppercase text-[#d6cdbf]">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors py-2 relative whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#c5a059] font-semibold'
                      : 'hover:text-[#faf7f2]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c5a059]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Search Trigger */}
            <button
              onClick={openSearch}
              aria-label={t.nav.searchPlaceholder}
              className="p-2.5 text-[#d6cdbf] hover:text-[#c5a059] hover:bg-[#251b17] rounded-md transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Bag with Count */}
            <button
              onClick={openCart}
              aria-label={t.nav.cart}
              className="relative p-2.5 text-[#d6cdbf] hover:text-[#c5a059] hover:bg-[#251b17] rounded-md transition-colors cursor-pointer flex items-center"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#4a101d] text-[#faf7f2] border border-[#c5a059]/40 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#faf7f2] border border-[#3d2e26] hover:border-[#c5a059] bg-[#221a16] hover:bg-[#2b201b] rounded transition-colors cursor-pointer"
              title={language === 'en' ? 'বাংলা ভাষায় পরিবর্তন করুন' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-semibold">{t.nav.langSwitch}</span>
            </button>

            {/* Reserve Table CTA */}
            <button
              onClick={() => handleNavClick('reservations')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-semibold text-xs tracking-wider uppercase rounded transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.reserveTable}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#faf7f2] hover:text-[#c5a059] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down / Full Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-[#181210] border-t border-[#2e221b] p-6 flex flex-col justify-between overflow-y-auto md:hidden">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#a89b8d] pb-2 border-b border-[#2a1f1a]">
              Menu Navigation
            </div>
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left py-2.5 text-lg font-serif-luxury tracking-wide transition-colors ${
                  activeTab === link.id ? 'text-[#c5a059] font-bold' : 'text-[#e6ded3] hover:text-[#faf7f2]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#2a1f1a] space-y-3">
              <button
                onClick={() => handleNavClick('customer')}
                className="flex items-center gap-2.5 text-sm text-[#e6ded3] hover:text-[#c5a059] w-full py-1.5"
              >
                <User className="w-4 h-4 text-[#c5a059]" />
                <span>{t.nav.customerPortal}</span>
              </button>
              <button
                onClick={() => handleNavClick('admin')}
                className="flex items-center gap-2.5 text-sm text-[#e6ded3] hover:text-[#c5a059] w-full py-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>{t.nav.adminPortal}</span>
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2a1f1a] space-y-4">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#3d2e26] bg-[#221a16] text-[#faf7f2] rounded text-sm font-medium"
            >
              <Globe className="w-4 h-4 text-[#c5a059]" />
              <span>Language: {t.nav.langSwitch}</span>
            </button>

            <button
              onClick={() => handleNavClick('reservations')}
              className="w-full py-3 bg-[#c5a059] text-[#181210] font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.reserveTable}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
