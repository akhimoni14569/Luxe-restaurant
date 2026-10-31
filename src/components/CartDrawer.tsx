import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    closeCart,
    cart,
    cartCount,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    deliveryFee,
    total,
    language,
    t,
    openCheckout,
    setActiveTab
  } = useApp();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#181210] border-l border-[#2e211b] text-[#faf7f2] flex flex-col justify-between shadow-2xl">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-[#291e18] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#c5a059]" />
              <h2 className="text-lg font-serif-luxury font-bold text-[#faf7f2]">
                {t.cart.title} ({cartCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#9e8f80] hover:text-[#faf7f2] hover:bg-[#251a16] rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#241a16] text-[#7d6f62] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif-luxury font-bold text-[#faf7f2]">
                  {t.cart.emptyTitle}
                </h3>
                <p className="text-xs text-[#a39485] max-w-xs mx-auto leading-relaxed font-light">
                  {t.cart.emptySubtitle}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      closeCart();
                      setActiveTab('menu');
                    }}
                    className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-semibold text-xs uppercase tracking-wider rounded cursor-pointer"
                  >
                    {t.cart.exploreMenuBtn}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-[#261c17] text-xs text-[#8f8072]">
                  <span>Items</span>
                  <button
                    onClick={clearCart}
                    className="text-[#c5a059] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>{t.cart.clearCart}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map(({ item, quantity }) => {
                    const itemName = language === 'bn' ? item.nameBn : item.name;
                    return (
                      <div
                        key={item.id}
                        className="p-3 bg-[#1f1714] border border-[#2d2019] rounded flex gap-3 items-center justify-between"
                      >
                        <img
                          src={item.image}
                          alt={itemName}
                          className="w-16 h-16 rounded object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />

                        <div className="flex-1 min-w-0 px-2">
                          <h4 className="text-sm font-semibold text-[#faf7f2] truncate">
                            {itemName}
                          </h4>
                          <div className="text-xs text-[#c5a059] font-medium tabular-nums mt-0.5">
                            ৳ {item.priceBDT.toLocaleString()}
                          </div>

                          {/* Stepper */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded bg-[#2a1e18] hover:bg-[#382820] text-[#cfc4b6] flex items-center justify-center cursor-pointer text-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold tabular-nums text-[#faf7f2] px-1">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded bg-[#2a1e18] hover:bg-[#382820] text-[#cfc4b6] flex items-center justify-center cursor-pointer text-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right shrink-0 flex flex-col items-end justify-between h-16 py-1">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#8c7d6f] hover:text-red-400 p-1 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="text-xs font-bold text-[#faf7f2] tabular-nums">
                            ৳ {(item.priceBDT * quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer with Calculations */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#140e0c] border-t border-[#291d17] space-y-4">
              <div className="space-y-1.5 text-xs text-[#beb2a4]">
                <div className="flex justify-between">
                  <span>{t.cart.subtotal}</span>
                  <span className="tabular-nums text-[#faf7f2] font-semibold font-sans">
                    ৳ {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t.cart.tax}</span>
                  <span className="tabular-nums font-sans">
                    ৳ {tax.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t.cart.deliveryFee}</span>
                  <span className="tabular-nums font-sans">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400">Complimentary</span>
                    ) : (
                      `৳ ${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#291e18] flex justify-between text-base font-bold text-[#faf7f2]">
                  <span>{t.cart.total}</span>
                  <span className="text-[#c5a059] font-sans tabular-nums text-lg">
                    ৳ {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Free delivery promo notification */}
              <div className="text-[11px] text-[#9c8e80] italic leading-tight">
                {t.cart.freeDeliveryNote}
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  closeCart();
                  openCheckout();
                }}
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
              >
                <span>{t.cart.checkoutBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#7d7064]">
                <ShieldCheck className="w-3 h-3 text-[#c5a059]" />
                <span>{t.cart.demoNotice}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
