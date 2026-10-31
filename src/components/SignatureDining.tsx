import React from 'react';
import { useApp } from '../context/AppContext';
import { Wine, Utensils, Moon, Crown } from 'lucide-react';

export const SignatureDining: React.FC = () => {
  const { t, setActiveTab } = useApp();

  const spaces = [
    {
      icon: Crown,
      title: t.signature.feature1Title,
      desc: t.signature.feature1Desc,
      tag: 'Grand Ambiance',
    },
    {
      icon: Wine,
      title: t.signature.feature2Title,
      desc: t.signature.feature2Desc,
      tag: 'Cellar Reserve',
    },
    {
      icon: Utensils,
      title: t.signature.feature3Title,
      desc: t.signature.feature3Desc,
      tag: 'Omakase Counter',
    },
    {
      icon: Moon,
      title: t.signature.feature4Title,
      desc: t.signature.feature4Desc,
      tag: 'Al Fresco Vista',
    },
  ];

  return (
    <section className="py-24 bg-[#140e0c] border-b border-[#241a16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.signature.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.signature.title}
          </h2>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.signature.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, idx) => {
            const Icon = space.icon;
            return (
              <div
                key={idx}
                className="bg-[#1c1411] border border-[#2e211a] hover:border-[#c5a059]/60 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#271d18] flex items-center justify-center text-[#c5a059] mb-6 group-hover:bg-[#c5a059] group-hover:text-[#181210] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-[#9e8f80] font-medium block mb-2">
                    {space.tag}
                  </span>

                  <h3 className="text-xl font-serif-luxury font-bold text-[#faf7f2] mb-3 group-hover:text-[#c5a059] transition-colors">
                    {space.title}
                  </h3>

                  <p className="text-sm text-[#bab0a3] font-light leading-relaxed mb-6">
                    {space.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2d201a]">
                  <button
                    onClick={() => setActiveTab('reservations')}
                    className="text-xs uppercase tracking-wider font-semibold text-[#c5a059] hover:text-[#e4c27a] transition-colors cursor-pointer"
                  >
                    Reserve Table &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
