import React from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data/menuData';
import { Plus, ArrowRight, Eye } from 'lucide-react';
import { MenuItem } from '../types';

export const PopularDishesSection: React.FC = () => {
  const { language, t, setActiveTab, addToCart, openDishModal } = useApp();

  // Pick top 4 featured / popular creations
  const popularDishes = MENU_ITEMS.filter(item => item.isPopular || item.isSpecial).slice(0, 4);

  return (
    <section className="py-24 bg-[#181210] border-b border-[#291e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              {t.popular.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2]">
              {t.popular.title}
            </h2>
            <p className="text-base text-[#bfb5a8] font-light mt-3 max-w-xl">
              {t.popular.subtitle}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('menu')}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#c5a059]/60 hover:border-[#c5a059] bg-[#221915] hover:bg-[#2e211b] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded transition-all self-start md:self-auto cursor-pointer"
          >
            <span>{t.popular.viewFullMenu}</span>
            <ArrowRight className="w-4 h-4 text-[#c5a059]" />
          </button>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDishes.map((dish: MenuItem) => {
            const name = language === 'bn' ? dish.nameBn : dish.name;
            const desc = language === 'bn' ? dish.descriptionBn : dish.description;

            return (
              <div
                key={dish.id}
                className="bg-[#1e1613] border border-[#2d211a] hover:border-[#c5a059]/50 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-sm"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#241a16]">
                  <img
                    src={dish.image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback image if network fails
                      (e.target as HTMLImageElement).src = '/src/assets/images/luxe_signature_wagyu_1793454112514.jpg';
                    }}
                  />
                  
                  {/* Subtle Unboxed Status Label */}
                  {dish.isSpecial && (
                    <div className="absolute top-3 left-3 bg-[#181210]/90 backdrop-blur-sm border border-[#c5a059]/50 text-[#c5a059] text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-xs">
                      {t.popular.specialTag}
                    </div>
                  )}

                  {/* Quick View Button overlay on hover */}
                  <button
                    onClick={() => openDishModal(dish)}
                    className="absolute inset-0 bg-[#181210]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs text-[#faf7f2] font-medium backdrop-blur-[2px] cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#c5a059]" />
                    <span>{t.popular.viewDetails}</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-[#9c8e80] uppercase tracking-wider mb-1 font-medium">
                      {dish.category.replace('-', ' ')}
                    </div>

                    <h3
                      onClick={() => openDishModal(dish)}
                      className="text-lg font-serif-luxury font-bold text-[#faf7f2] hover:text-[#c5a059] transition-colors cursor-pointer line-clamp-1 mb-2"
                    >
                      {name}
                    </h3>

                    <p className="text-xs text-[#bab0a3] font-light line-clamp-2 leading-relaxed mb-4">
                      {desc}
                    </p>
                  </div>

                  {/* Price and Add-To-Cart */}
                  <div className="pt-3 border-t border-[#2d201a] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#8f8275] mr-1">BDT</span>
                      <span className="text-lg font-bold text-[#c5a059] tabular-nums font-sans">
                        ৳ {dish.priceBDT.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(dish, 1)}
                      className="p-2 bg-[#2a1e19] hover:bg-[#c5a059] text-[#faf7f2] hover:text-[#181210] border border-[#3b2b23] hover:border-[#c5a059] rounded transition-all cursor-pointer"
                      title={t.popular.addToCart}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
