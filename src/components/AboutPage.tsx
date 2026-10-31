import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, Leaf, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, setActiveTab } = useApp();

  return (
    <section className="py-20 bg-[#181210] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.about.kicker}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.about.title}
          </h1>
          <p className="text-base sm:text-lg text-[#bfb5a8] font-light leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Story Section 1: Pursuit of Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-serif-luxury font-bold text-[#faf7f2]">
              {t.about.section1Title}
            </h2>
            <p className="text-sm sm:text-base text-[#cfc5b8] font-light leading-relaxed">
              {t.about.section1Text}
            </p>
            <p className="text-sm text-[#aba093] font-light leading-relaxed">
              Every detail of LUXE was conceived to create harmony between classical culinary discipline and contemporary sensory wonder. From custom ambient lighting calibrating as twilight settles over Gulshan Avenue to handcrafted Japanese damascus knives and German crystal.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-sm border border-[#3b2b22] overflow-hidden shadow-2xl relative">
              <img
                src="/src/assets/images/luxe_hero_dining_1793454112514.jpg"
                alt="Fine dining chamber"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/luxe_hero_dining_1793454111259.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Story Section 2: Farm-to-Table & Fresh Ingredients */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-sm border border-[#3b2b22] overflow-hidden shadow-2xl">
              <img
                src="/src/assets/images/luxe_seafood_platter_1793454113707.jpg"
                alt="Fresh Sustainable Sourcing"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-serif-luxury font-bold text-[#faf7f2]">
              {t.about.section2Title}
            </h2>
            <p className="text-sm sm:text-base text-[#cfc5b8] font-light leading-relaxed">
              {t.about.section2Text}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#31231c]">
              <div className="p-4 bg-[#1e1613] rounded border border-[#2d201a]">
                <Leaf className="w-5 h-5 text-[#c5a059] mb-2" />
                <div className="text-xs uppercase text-[#a89b8d] font-semibold">Micro-Climates</div>
                <div className="text-sm text-[#faf7f2] font-medium mt-1">Dedicated Organic Herb Glasshouses</div>
              </div>

              <div className="p-4 bg-[#1e1613] rounded border border-[#2d201a]">
                <ShieldCheck className="w-5 h-5 text-[#c5a059] mb-2" />
                <div className="text-xs uppercase text-[#a89b8d] font-semibold">100% Traceability</div>
                <div className="text-sm text-[#faf7f2] font-medium mt-1">Certified Halal Prime Cuts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section 3: Executive Chef */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-serif-luxury font-bold text-[#faf7f2]">
              {t.about.section3Title}
            </h2>
            <p className="text-sm sm:text-base text-[#cfc5b8] font-light leading-relaxed">
              {t.about.section3Text}
            </p>
            <div className="p-5 bg-[#140e0c] border border-[#3b2b22] rounded-sm space-y-2">
              <p className="text-xs italic text-[#c7beaf] font-light leading-relaxed">
                “A true luxury kitchen runs on empathy and precision. When passion guides every simmer and sear, our guests feel it in every single bite.”
              </p>
              <div className="text-xs text-[#c5a059] font-semibold uppercase tracking-wider">
                — Chef Henry Chen
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-sm border border-[#3b2b22] overflow-hidden shadow-2xl">
              <img
                src="/src/assets/images/luxe_executive_chef_1793454114288.jpg"
                alt="Executive Chef"
                className="w-full h-[380px] sm:h-[440px] object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Guiding Principles Strip */}
        <div className="p-10 bg-[#140e0c] border border-[#2e211a] rounded-sm">
          <h3 className="text-2xl font-serif-luxury font-bold text-[#faf7f2] text-center mb-8">
            {t.about.valuesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <Award className="w-6 h-6 text-[#c5a059] mx-auto mb-3" />
              <div className="text-sm font-semibold text-[#faf7f2]">{t.about.val1}</div>
            </div>
            <div className="p-4">
              <ShieldCheck className="w-6 h-6 text-[#c5a059] mx-auto mb-3" />
              <div className="text-sm font-semibold text-[#faf7f2]">{t.about.val2}</div>
            </div>
            <div className="p-4">
              <HeartHandshake className="w-6 h-6 text-[#c5a059] mx-auto mb-3" />
              <div className="text-sm font-semibold text-[#faf7f2]">{t.about.val3}</div>
            </div>
            <div className="p-4">
              <Leaf className="w-6 h-6 text-[#c5a059] mx-auto mb-3" />
              <div className="text-sm font-semibold text-[#faf7f2]">{t.about.val4}</div>
            </div>
          </div>
        </div>

        {/* Reservation CTA strip */}
        <div className="text-center pt-8">
          <button
            onClick={() => setActiveTab('reservations')}
            className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow-lg"
          >
            {t.hero.reserveTable}
          </button>
        </div>

      </div>
    </section>
  );
};
