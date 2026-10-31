import React from 'react';
import { useApp } from '../context/AppContext';
import { TESTIMONIALS } from '../data/supplementalData';
import { Star, Quote, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section className="py-24 bg-[#140e0c] border-b border-[#241a16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.testimonials.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(tItem => {
            const name = language === 'bn' ? tItem.nameBn : tItem.name;
            const role = language === 'bn' ? tItem.roleBn : tItem.role;
            const quote = language === 'bn' ? tItem.quoteBn : tItem.quote;
            const dish = language === 'bn' ? tItem.dishRecommendedBn : tItem.dishRecommended;

            return (
              <div
                key={tItem.id}
                className="bg-[#1c1411] border border-[#2d211b] p-8 rounded-sm flex flex-col justify-between shadow-sm relative group hover:border-[#c5a059]/40 transition-colors"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#c5a059]/40 mb-4" />
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#c5a059]">
                    {[...Array(tItem.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                    ))}
                  </div>

                  <p className="text-sm text-[#d4cbbf] font-light italic leading-relaxed mb-6">
                    “{quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#291e18]">
                  <div className="font-serif-luxury font-bold text-base text-[#faf7f2]">
                    {name}
                  </div>
                  <div className="text-xs text-[#9e8f80] font-light mt-0.5">
                    {role}
                  </div>
                  <div className="text-[11px] text-[#c5a059] mt-2 font-medium">
                    Favorite: {dish}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Disclaimer Strip */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-[#7d7064]">
          <Info className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>{t.testimonials.disclaimer}</span>
        </div>

      </div>
    </section>
  );
};
