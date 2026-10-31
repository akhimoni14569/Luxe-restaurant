import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FAQ_ITEMS } from '../data/supplementalData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { language, t } = useApp();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-[#140e0c] border-b border-[#241a16] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.faq.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm text-[#bfb5a8] font-light leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map(item => {
            const isOpen = openId === item.id;
            const question = language === 'bn' ? item.questionBn : item.question;
            const answer = language === 'bn' ? item.answerBn : item.answer;

            return (
              <div
                key={item.id}
                className="bg-[#1c1411] border border-[#2d211b] rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#221815] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span className="text-sm sm:text-base font-serif-luxury font-bold text-[#faf7f2]">
                      {question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#c5a059] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#beb3a5] font-light leading-relaxed border-t border-[#261b16]/60">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
