import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data/menuData';
import { X, Plus, Minus, Clock, Flame, Check, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

export const FoodDetailModal: React.FC = () => {
  const { selectedDish, closeDishModal, language, t, addToCart, openDishModal } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setJustAdded(false);
  }, [selectedDish]);

  if (!selectedDish) return null;

  const name = language === 'bn' ? selectedDish.nameBn : selectedDish.name;
  const desc = language === 'bn' ? selectedDish.descriptionBn : selectedDish.description;
  const ingredients = language === 'bn' ? selectedDish.ingredientsBn : selectedDish.ingredients;

  // Find related dishes in same or complementary category
  const relatedDishes = MENU_ITEMS
    .filter(item => item.id !== selectedDish.id && (item.category === selectedDish.category || item.isPopular))
    .slice(0, 3);

  const handleAdd = () => {
    addToCart(selectedDish, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#1c1411] border border-[#3b2b22] rounded-sm overflow-hidden shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={closeDishModal}
          className="absolute top-4 right-4 z-20 p-2 bg-[#181210]/80 hover:bg-[#181210] border border-[#3d2e26] text-[#faf7f2] hover:text-[#c5a059] rounded-full transition-colors cursor-pointer"
          aria-label={t.foodDetail.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Food Visual */}
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto bg-[#241a16]">
            <img
              src={selectedDish.image}
              alt={name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/luxe_signature_wagyu_1793454112514.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1411] via-transparent to-transparent opacity-60 md:hidden" />
          </div>

          {/* Right Column: Dish Details */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-3 text-xs text-[#a39485] uppercase tracking-widest mb-2 font-medium">
                <span>{selectedDish.category.replace('-', ' ')}</span>
                {selectedDish.isSpecial && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#c5a059] flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      {t.popular.specialTag}
                    </span>
                  </>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#faf7f2] mb-3">
                {name}
              </h2>

              <p className="text-sm text-[#cfc4b7] font-light leading-relaxed mb-6">
                {desc}
              </p>

              {/* Prep Time & Calories unboxed */}
              <div className="flex items-center gap-4 text-xs text-[#9c8e80] py-3 border-y border-[#2d201a] mb-6">
                {selectedDish.prepTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#c5a059]" />
                    <span>{t.foodDetail.prepTime}: <strong className="text-[#faf7f2] font-medium">{selectedDish.prepTime}</strong></span>
                  </div>
                )}
                {selectedDish.calories && (
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#c5a059]" />
                    <span>{selectedDish.calories}</span>
                  </div>
                )}
              </div>

              {/* Ingredients List */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-[#a89b8d] font-semibold mb-2">
                  {t.foodDetail.ingredients}
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#d4cbbf]">
                  {ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#241a16] border border-[#33251e] rounded text-[11px]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Quantity & Add to Cart Controls */}
            <div className="pt-4 border-t border-[#2e211a] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#807264] block font-mono">TOTAL BDT</span>
                  <span className="text-2xl font-bold text-[#c5a059] tabular-nums font-sans">
                    ৳ {(selectedDish.priceBDT * quantity).toLocaleString()}
                  </span>
                </div>

                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#3d2e25] bg-[#221a16] rounded">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="p-2 text-[#bab0a3] hover:text-[#faf7f2] disabled:opacity-40 cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-sm font-semibold text-[#faf7f2] tabular-nums min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-2 text-[#bab0a3] hover:text-[#faf7f2] cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add To Cart CTA Button */}
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 text-xs uppercase tracking-widest font-semibold rounded flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  justAdded
                    ? 'bg-emerald-700 text-[#faf7f2]'
                    : 'bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210]'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t.foodDetail.itemAdded}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>{t.foodDetail.addToCart}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Related Dishes Footer Carousel */}
        {relatedDishes.length > 0 && (
          <div className="p-6 bg-[#160f0d] border-t border-[#291d17]">
            <h4 className="text-xs uppercase tracking-wider text-[#9e8f80] font-semibold mb-3">
              {t.foodDetail.relatedDishes}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedDishes.map(rel => {
                const relName = language === 'bn' ? rel.nameBn : rel.name;
                return (
                  <button
                    key={rel.id}
                    onClick={() => openDishModal(rel)}
                    className="flex items-center gap-3 p-2 rounded bg-[#1e1613] border border-[#2b1f19] hover:border-[#c5a059]/40 text-left transition-colors cursor-pointer"
                  >
                    <img
                      src={rel.image}
                      alt={relName}
                      className="w-12 h-12 rounded object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-[#faf7f2] truncate">
                        {relName}
                      </div>
                      <div className="text-[11px] text-[#c5a059] font-medium tabular-nums">
                        ৳ {rel.priceBDT.toLocaleString()}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
