import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, HeartHandshake, Sparkles, Volume2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useApp();

  const pillars = [
    {
      icon: Sparkles,
      title: t.whyUs.pillar1Title,
      desc: t.whyUs.pillar1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.whyUs.pillar2Title,
      desc: t.whyUs.pillar2Desc,
    },
    {
      icon: HeartHandshake,
      title: t.whyUs.pillar3Title,
      desc: t.whyUs.pillar3Desc,
    },
    {
      icon: Volume2,
      title: t.whyUs.pillar4Title,
      desc: t.whyUs.pillar4Desc,
    },
  ];

  return (
    <section className="py-24 bg-[#181210] border-b border-[#291e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.whyUs.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#1f1714] border border-[#2e211b] p-8 rounded-sm hover:border-[#c5a059]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#2a1e18] flex items-center justify-center rounded-sm text-[#c5a059] mb-6 group-hover:bg-[#c5a059] group-hover:text-[#181210] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-serif-luxury font-bold text-[#faf7f2] mb-3 group-hover:text-[#c5a059] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#bab0a3] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
