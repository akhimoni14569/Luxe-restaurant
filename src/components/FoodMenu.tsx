import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCategory, MenuItem } from '../types';
import { Search, Plus, Eye, Clock, Flame, RotateCcw } from 'lucide-react';

export const FoodMenu: React.FC = () => {
  const { language, t, addToCart, openDishModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: t.menuPage.allCategories },
    { id: 'special-dishes', label: t.menuPage.specialDishes },
    { id: 'starters', label: t.menuPage.starters },
    { id: 'main-course', label: t.menuPage.mainCourse },
    { id: 'seafood', label: t.menuPage.seafood },
    { id: 'breakfast', label: t.menuPage.breakfast },
    { id: 'desserts', label: t.menuPage.desserts },
    { id: 'beverages', label: t.menuPage.beverages },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category check
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query check (search both English and Bengali name & ingredients)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesNameEn = item.name.toLowerCase().includes(query);
        const matchesNameBn = item.nameBn.toLowerCase().includes(query);
        const matchesDescEn = item.description.toLowerCase().includes(query);
        const matchesDescBn = item.descriptionBn.toLowerCase().includes(query);
        const matchesIngEn = item.ingredients.some(i => i.toLowerCase().includes(query));
        const matchesIngBn = item.ingredientsBn.some(i => i.toLowerCase().includes(query));
        return matchesNameEn || matchesNameBn || matchesDescEn || matchesDescBn || matchesIngEn || matchesIngBn;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-[#181210] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {language === 'bn' ? 'আমাদের খাবার তালিকা' : 'Culinary Masterpieces'}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.menuPage.headerTitle}
          </h1>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.menuPage.headerSubtitle}
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="mb-12 space-y-6">
          
          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7e71]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menuPage.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3 bg-[#201814] border border-[#33241d] focus:border-[#c5a059] focus:outline-none rounded text-sm text-[#faf7f2] placeholder-[#7d7064] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8c7e71] hover:text-[#faf7f2] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill discipline: Clean segmented buttons with active state) */}
          <div className="flex items-center justify-start md:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#c5a059] text-[#181210] font-bold shadow-sm'
                      : 'bg-[#221a16] text-[#c9bfb2] hover:text-[#faf7f2] hover:bg-[#2b211c] border border-[#33251e]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Result count */}
          <div className="flex items-center justify-between text-xs text-[#8c7e71] pt-2 border-t border-[#2a1e18]">
            <span>
              {language === 'bn' ? `মোট ${filteredItems.length} টি পদ পাওয়া গেছে` : `Showing ${filteredItems.length} creations`}
            </span>
            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1 text-[#c5a059] hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t.menuPage.resetSearch}</span>
              </button>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#241a16] flex items-center justify-center mx-auto mb-4 text-[#8c7e71]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-luxury font-bold text-[#faf7f2] mb-2">
              {t.menuPage.noResults}
            </h3>
            <p className="text-sm text-[#9c8e80] mb-6 font-light">
              {language === 'bn' 
                ? 'অন্য কোনো শব্দ বা বিভাগের নাম দিয়ে খুঁজে দেখতে পারেন।' 
                : 'Try adjusting your search terms or select another category.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#c5a059] text-[#181210] font-semibold text-xs uppercase tracking-wider rounded cursor-pointer"
            >
              {t.menuPage.resetSearch}
            </button>
          </div>
        ) : (
          /* Food Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(dish => {
              const name = language === 'bn' ? dish.nameBn : dish.name;
              const desc = language === 'bn' ? dish.descriptionBn : dish.description;
              const ingredientsList = language === 'bn' ? dish.ingredientsBn : dish.ingredients;

              return (
                <div
                  key={dish.id}
                  className="bg-[#1d1512] border border-[#2d211a] hover:border-[#c5a059]/60 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-sm"
                >
                  {/* Food Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#241a16]">
                    <img
                      src={dish.image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/src/assets/images/luxe_signature_wagyu_1793454112514.jpg';
                      }}
                    />

                    {/* Unboxed Status Text Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {dish.isSpecial && (
                        <span className="bg-[#4a101d] text-[#faf7f2] border border-[#c5a059]/40 text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-xs">
                          {t.popular.specialTag}
                        </span>
                      )}
                      {dish.isPopular && !dish.isSpecial && (
                        <span className="bg-[#181210]/90 backdrop-blur-sm border border-[#c5a059]/40 text-[#c5a059] text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-xs">
                          {t.popular.popularTag}
                        </span>
                      )}
                    </div>

                    {/* Detail Button on Hover */}
                    <button
                      onClick={() => openDishModal(dish)}
                      className="absolute inset-0 bg-[#181210]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs text-[#faf7f2] font-semibold backdrop-blur-[2px] cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-[#c5a059]" />
                      <span>{t.menuPage.viewDetails}</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta stats: prep time & calories unboxed */}
                      <div className="flex items-center gap-3 text-[11px] text-[#948577] mb-2">
                        {dish.prepTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#c5a059]" />
                            <span>{dish.prepTime}</span>
                          </span>
                        )}
                        {dish.calories && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="flex items-center gap-1">
                              <Flame className="w-3 h-3 text-[#c5a059]" />
                              <span>{dish.calories}</span>
                            </span>
                          </>
                        )}
                      </div>

                      <h3
                        onClick={() => openDishModal(dish)}
                        className="text-xl font-serif-luxury font-bold text-[#faf7f2] hover:text-[#c5a059] transition-colors cursor-pointer mb-2"
                      >
                        {name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#beb3a5] font-light line-clamp-2 leading-relaxed mb-4">
                        {desc}
                      </p>

                      {/* Ingredients clean unboxed line */}
                      <div className="text-[11px] text-[#857668] line-clamp-1 mb-4">
                        <span className="text-[#a8998a] font-medium mr-1">
                          {language === 'bn' ? 'উপকরণ:' : 'Crafted with:'}
                        </span>
                        {ingredientsList.join(' · ')}
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-4 border-t border-[#2e211a] flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-[#807264] block font-mono">PRICE (BDT)</span>
                        <span className="text-xl font-bold text-[#c5a059] tabular-nums font-sans">
                          ৳ {dish.priceBDT.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openDishModal(dish)}
                          className="px-3 py-2 text-xs text-[#d1c6b8] hover:text-[#faf7f2] border border-[#3b2b23] hover:border-[#c5a059] rounded cursor-pointer transition-colors"
                        >
                          {t.menuPage.viewDetails}
                        </button>

                        <button
                          onClick={() => addToCart(dish, 1)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-semibold text-xs rounded transition-all cursor-pointer shadow-sm"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t.menuPage.addToCart}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
