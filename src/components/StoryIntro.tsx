import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const StoryIntro: React.FC = () => {
  const { t, setActiveTab } = useApp();

  return (
    <section className="py-24 bg-[#181210] border-b border-[#261c17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em]">
              {t.intro.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2] leading-tight">
              {t.intro.title}
            </h2>

            <div className="space-y-4 text-[#cfc5b8] text-base leading-relaxed font-light">
              <p>{t.intro.paragraph1}</p>
              <p>{t.intro.paragraph2}</p>
            </div>

            {/* Editorial Stats Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#33251e]">
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#c5a059] tabular-nums">
                  {t.intro.stat1Number}
                </div>
                <div className="text-xs text-[#a39485] mt-1 font-medium leading-tight">
                  {t.intro.stat1Label}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#c5a059] tabular-nums">
                  {t.intro.stat2Number}
                </div>
                <div className="text-xs text-[#a39485] mt-1 font-medium leading-tight">
                  {t.intro.stat2Label}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#c5a059] tabular-nums">
                  {t.intro.stat3Number}
                </div>
                <div className="text-xs text-[#a39485] mt-1 font-medium leading-tight">
                  {t.intro.stat3Label}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActiveTab('story')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#c5a059] hover:text-[#e0be77] transition-colors cursor-pointer group"
              >
                <span>{t.intro.readFullStory}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Layered Fine Dining Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="overflow-hidden rounded-sm border border-[#3b2b22] shadow-2xl relative">
                <img
                  src="/src/assets/images/luxe_signature_wagyu_1793454112514.jpg"
                  alt="Luxe Imperial Wagyu Craftsmanship"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181210]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#d6cdbf]">
                  <span className="text-[#c5a059] uppercase tracking-wider block font-semibold mb-0.5">Signature Culinary Plating</span>
                  <span>Handcrafted ceramic plate with natural demi-glace reduction.</span>
                </div>
              </div>

              {/* Decorative Accent Box */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-32 h-32 border border-[#c5a059]/30 -z-10" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 border border-[#4a101d] -z-10" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
