import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, Star, Compass, Calendar } from 'lucide-react';

export const ChefSpecialSection: React.FC = () => {
  const { t, setActiveTab } = useApp();

  return (
    <section className="py-24 bg-[#140e0c] border-b border-[#241a16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Chef Portrait */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="overflow-hidden rounded-sm border border-[#3b2b22] shadow-2xl relative">
                <img
                  src="/src/assets/images/luxe_executive_chef_1793454114288.jpg"
                  alt="Executive Chef Henry Chen"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c] via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#181210]/95 backdrop-blur-md border border-[#3d2e26] rounded-sm">
                  <div className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-1">
                    Culinary Director
                  </div>
                  <div className="text-lg font-serif-luxury font-bold text-[#faf7f2]">
                    Chef Henry Chen
                  </div>
                  <div className="text-xs text-[#a89b8d] font-light mt-0.5">
                    Former Chef de Cuisine in Paris & Tokyo
                  </div>
                </div>
              </div>

              {/* Decorative Geometric Gold Line */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border border-[#c5a059]/30 -z-10" />
            </div>
          </div>

          {/* Right Column: Narrative & Achievements */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em]">
              {t.chef.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2] leading-tight">
              {t.chef.title}
            </h2>

            <p className="text-sm sm:text-base text-[#c7beaf] font-light italic pl-4 border-l-2 border-[#c5a059]/60 leading-relaxed py-1">
              {t.chef.bio}
            </p>

            <div className="text-xs text-[#9c8e80] font-medium tracking-wider uppercase">
              {t.chef.quoteAuthor}
            </div>

            {/* Achievements List */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#e6ded3]">
                <Award className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{t.chef.achievement1}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#e6ded3]">
                <Star className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{t.chef.achievement2}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#e6ded3]">
                <Compass className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{t.chef.achievement3}</span>
              </div>
            </div>

            {/* Tasting CTA */}
            <div className="pt-6">
              <button
                onClick={() => setActiveTab('reservations')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-semibold text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.chef.signatureTasting}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
