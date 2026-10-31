import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Tag } from 'lucide-react';

export const SpecialOffers: React.FC = () => {
  const { t, setActiveTab } = useApp();

  const offers = [
    {
      title: t.offers.offer1Title,
      badge: t.offers.offer1Badge,
      desc: t.offers.offer1Desc,
      price: t.offers.offer1Price,
      image: '/src/assets/images/luxe_signature_wagyu_1793454112514.jpg',
    },
    {
      title: t.offers.offer2Title,
      badge: t.offers.offer2Badge,
      desc: t.offers.offer2Desc,
      price: t.offers.offer2Price,
      image: '/src/assets/images/luxe_seafood_platter_1793454113707.jpg',
    },
    {
      title: t.offers.offer3Title,
      badge: t.offers.offer3Badge,
      desc: t.offers.offer3Desc,
      price: t.offers.offer3Price,
      image: '/src/assets/images/luxe_dessert_chocolat_1793454114805.jpg',
    },
  ];

  return (
    <section className="py-24 bg-[#140e0c] border-b border-[#241a16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.offers.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.offers.title}
          </h2>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.offers.subtitle}
          </p>
        </div>

        {/* 3 Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-[#1c1411] border border-[#2e211a] hover:border-[#c5a059]/50 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#241a16]">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1411] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 right-3 bg-[#4a101d] text-[#faf7f2] border border-[#c5a059]/40 text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-xs flex items-center gap-1.5 shadow-sm">
                  <Tag className="w-3 h-3 text-[#c5a059]" />
                  <span>{offer.badge}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#faf7f2] mb-3 group-hover:text-[#c5a059] transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#bab0a3] font-light leading-relaxed mb-6">
                    {offer.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2d201a] flex items-center justify-between">
                  <div className="text-sm font-semibold text-[#c5a059] tabular-nums">
                    {offer.price}
                  </div>

                  <button
                    onClick={() => setActiveTab('reservations')}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#faf7f2] hover:text-[#c5a059] transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{t.offers.inquireOffer}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
