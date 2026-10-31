import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data/menuData';
import { Search, X, Plus, Eye, Clock } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, language, t, addToCart, openDishModal } = useApp();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isSearchOpen) {
      setQuery('');
    }
  }, [isSearchOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return MENU_ITEMS.filter(item => {
      const matchName = item.name.toLowerCase().includes(q) || item.nameBn.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q) || item.descriptionBn.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchIng = item.ingredients.some(i => i.toLowerCase().includes(q)) ||
                       item.ingredientsBn.some(i => i.toLowerCase().includes(q));
      return matchName || matchDesc || matchCat || matchIng;
    });
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1c1411] border border-[#3b2b22] rounded-sm shadow-2xl overflow-hidden">
        
        {/* Header Search Input */}
        <div className="p-4 sm:p-5 border-b border-[#2d201a] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#c5a059] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t.menuPage.searchPlaceholder}
            className="w-full bg-transparent text-sm sm:text-base text-[#faf7f2] placeholder-[#807264] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-xs text-[#8c7e71] hover:text-[#faf7f2] cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearch}
            className="p-1.5 text-[#9e8f80] hover:text-[#faf7f2] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-[#8f8072]">
              <span>Try searching for “Wagyu”, “Lobster”, “Chocolate”, “Coffee” or Bengali names...</span>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#9c8e80]">
              {t.menuPage.noResults}
            </div>
          ) : (
            searchResults.map(dish => {
              const name = language === 'bn' ? dish.nameBn : dish.name;
              const desc = language === 'bn' ? dish.descriptionBn : dish.description;

              return (
                <div
                  key={dish.id}
                  className="p-3 bg-[#160f0d] border border-[#271d18] hover:border-[#c5a059]/40 rounded flex items-center justify-between gap-3 group transition-colors"
                >
                  <img
                    src={dish.image}
                    alt={name}
                    className="w-14 h-14 rounded object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-[#8c7e71] uppercase tracking-wider">
                      {dish.category}
                    </div>
                    <h4
                      onClick={() => {
                        closeSearch();
                        openDishModal(dish);
                      }}
                      className="text-sm font-semibold text-[#faf7f2] group-hover:text-[#c5a059] truncate cursor-pointer transition-colors"
                    >
                      {name}
                    </h4>
                    <p className="text-xs text-[#a89b8d] font-light truncate">
                      {desc}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold text-[#c5a059] tabular-nums font-sans">
                      ৳ {dish.priceBDT.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 mt-1 justify-end">
                      <button
                        onClick={() => {
                          closeSearch();
                          openDishModal(dish);
                        }}
                        className="p-1 text-xs text-[#b0a395] hover:text-[#faf7f2] cursor-pointer"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => addToCart(dish, 1)}
                        className="p-1 bg-[#c5a059] text-[#181210] rounded text-xs hover:bg-[#d8b46e] cursor-pointer"
                        title="Add to Cart"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
