import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Calendar, Award, Sparkles, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, setActiveTab } = useApp();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#181210]">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/luxe_hero_dining_1793454111259.jpg"
          alt="LUXE Restaurant Fine Dining Chamber"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for 4.5:1 WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181210] via-[#181210]/75 to-[#181210]/40" />
        <div className="absolute inset-0 bg-[#4a101d]/15 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Luxury Tagline / Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#c5a059]/40 bg-[#181210]/80 backdrop-blur-sm rounded-sm text-[#c5a059] text-xs uppercase tracking-[0.2em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.hero.tagline}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-bold text-[#faf7f2] tracking-tight leading-[1.1] mb-6 text-balance">
          {t.hero.headline}
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#d4cbbf] font-light leading-relaxed mb-10">
          {t.hero.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => setActiveTab('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-semibold text-xs uppercase tracking-widest rounded transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#c5a059]/20"
          >
            <span>{t.hero.exploreMenu}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab('reservations')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-[#c5a059]/80 hover:border-[#c5a059] bg-[#181210]/60 hover:bg-[#281e19] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded transition-all duration-200 cursor-pointer backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 text-[#c5a059]" />
            <span>{t.hero.reserveTable}</span>
          </button>
        </div>

        {/* Luxury Trust Indicators Strip */}
        <div className="mt-16 pt-8 border-t border-[#3d2e26]/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#c5a059] shrink-0" />
            <span className="text-xs text-[#d4cbbf] leading-tight">
              {t.hero.michelinStandard}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#c5a059] shrink-0" />
            <span className="text-xs text-[#d4cbbf] leading-tight">
              {t.hero.curatedIngredients}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#c5a059] shrink-0" />
            <span className="text-xs text-[#d4cbbf] leading-tight">
              {t.hero.fineWines}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
