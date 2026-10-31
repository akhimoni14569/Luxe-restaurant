import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, ShoppingBag, Truck, Store, CreditCard, Banknote, ShieldAlert } from 'lucide-react';
import { CheckoutData } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    closeCheckout,
    cart,
    subtotal,
    tax,
    deliveryFee,
    total,
    language,
    t,
    addOrder,
    setActiveTab
  } = useApp();

  const [formData, setFormData] = useState({
    name: 'Farhan Chowdhury',
    phone: '+880 1712-345678',
    email: 'farhan.chowdhury@example.com',
    address: 'Apartment 8B, The Glasshouse, Road 71, Gulshan-2, Dhaka',
    deliveryType: 'delivery' as 'delivery' | 'pickup',
    orderNotes: 'Please ensure food is sealed in warm insulated carrier.',
    paymentMethod: 'cash_on_delivery' as 'cash_on_delivery' | 'card_on_arrival' | 'bkash_nagad_demo'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = t.checkout.errors.nameRequired;
    if (!formData.phone.trim()) errs.phone = t.checkout.errors.phoneRequired;
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = t.checkout.errors.emailRequired;
    if (formData.deliveryType === 'delivery' && !formData.address.trim()) {
      errs.address = t.checkout.errors.addressRequired;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const orderPayload: CheckoutData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      deliveryType: formData.deliveryType,
      orderNotes: formData.orderNotes,
      paymentMethod: formData.paymentMethod,
      items: cart,
      subtotal,
      tax,
      deliveryFee: formData.deliveryType === 'pickup' ? 0 : deliveryFee,
      total: formData.deliveryType === 'pickup' ? subtotal + tax : total
    };

    const orderId = addOrder(orderPayload);
    setConfirmedOrderId(orderId);
  };

  const handleClose = () => {
    setConfirmedOrderId(null);
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1c1411] border border-[#3b2b22] rounded-sm overflow-hidden shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#9c8e80] hover:text-[#faf7f2] hover:bg-[#251a16] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedOrderId ? (
          /* Confirmation Success State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#faf7f2] mb-2">
                {t.checkout.successTitle}
              </h2>
              <p className="text-sm text-[#beb3a5] max-w-md mx-auto font-light leading-relaxed">
                {t.checkout.successMessage}
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#140e0c] border border-[#2d201a] p-5 rounded max-w-md mx-auto text-left space-y-3">
              <div className="flex justify-between items-center text-xs text-[#a89b8d] pb-2 border-b border-[#241a16]">
                <span>{t.checkout.orderIdLabel}</span>
                <span className="font-mono text-base font-bold text-[#c5a059]">
                  {confirmedOrderId}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#d6cdbf]">
                <span>Customer</span>
                <span className="font-medium text-[#faf7f2]">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#d6cdbf]">
                <span>Fulfillment</span>
                <span className="font-medium text-[#c5a059] uppercase">
                  {formData.deliveryType === 'delivery' ? 'Home Delivery' : 'Pickup at Restaurant'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#d6cdbf]">
                <span>Total Amount</span>
                <span className="font-bold text-[#faf7f2] tabular-nums font-sans">
                  ৳ {total.toLocaleString()} BDT
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  handleClose();
                  setActiveTab('customer');
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#c5a059] text-[#181210] font-bold text-xs uppercase tracking-wider rounded cursor-pointer"
              >
                View in Guest Dashboard
              </button>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-2.5 border border-[#3b2b23] text-[#cfc5b8] hover:text-[#faf7f2] font-medium text-xs uppercase tracking-wider rounded cursor-pointer"
              >
                {t.checkout.backToMenu}
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif-luxury font-bold text-[#faf7f2]">
                {t.checkout.title}
              </h2>
              <p className="text-xs text-[#a39485] font-light mt-1">
                {t.checkout.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Delivery vs Pickup Toggle */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#a89b8d] font-semibold block mb-2">
                  {t.checkout.fulfillmentType}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryType: 'delivery' })}
                    className={`py-2.5 px-4 rounded border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.deliveryType === 'delivery'
                        ? 'border-[#c5a059] bg-[#291f1a] text-[#faf7f2]'
                        : 'border-[#2d211a] bg-[#181210] text-[#9c8e80]'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-[#c5a059]" />
                    <span>{t.checkout.delivery}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryType: 'pickup' })}
                    className={`py-2.5 px-4 rounded border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.deliveryType === 'pickup'
                        ? 'border-[#c5a059] bg-[#291f1a] text-[#faf7f2]'
                        : 'border-[#2d211a] bg-[#181210] text-[#9c8e80]'
                    }`}
                  >
                    <Store className="w-4 h-4 text-[#c5a059]" />
                    <span>{t.checkout.pickup}</span>
                  </button>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#c4b9ad] block mb-1">
                      {t.checkout.fullName} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.checkout.namePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#c4b9ad] block mb-1">
                      {t.checkout.phone} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.checkout.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#c4b9ad] block mb-1">
                    {t.checkout.email} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.checkout.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                {formData.deliveryType === 'delivery' && (
                  <div>
                    <label className="text-xs text-[#c4b9ad] block mb-1">
                      {t.checkout.deliveryAddress} *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      placeholder={t.checkout.addressPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                    {errors.address && <p className="text-[11px] text-red-400 mt-1">{errors.address}</p>}
                  </div>
                )}

                <div>
                  <label className="text-xs text-[#c4b9ad] block mb-1">
                    {t.checkout.orderNotes}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.orderNotes}
                    onChange={e => setFormData({ ...formData, orderNotes: e.target.value })}
                    placeholder={t.checkout.notesPlaceholder}
                    className="w-full px-3.5 py-2 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-xs text-[#faf7f2] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#a89b8d] font-semibold block mb-2">
                  {t.checkout.paymentMethod}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cash_on_delivery' })}
                    className={`p-3 rounded border flex items-center gap-2 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cash_on_delivery'
                        ? 'border-[#c5a059] bg-[#291f1a] text-[#faf7f2]'
                        : 'border-[#2d211a] bg-[#140e0c] text-[#8e8073]'
                    }`}
                  >
                    <Banknote className="w-4 h-4 text-[#c5a059]" />
                    <span className="font-medium">{t.checkout.cod}</span>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card_on_arrival' })}
                    className={`p-3 rounded border flex items-center gap-2 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card_on_arrival'
                        ? 'border-[#c5a059] bg-[#291f1a] text-[#faf7f2]'
                        : 'border-[#2d211a] bg-[#140e0c] text-[#8e8073]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#c5a059]" />
                    <span className="font-medium">{t.checkout.card}</span>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'bkash_nagad_demo' })}
                    className={`p-3 rounded border flex items-center gap-2 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'bkash_nagad_demo'
                        ? 'border-[#c5a059] bg-[#291f1a] text-[#faf7f2]'
                        : 'border-[#2d211a] bg-[#140e0c] text-[#8e8073]'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4 text-[#c5a059]" />
                    <span className="font-medium">{t.checkout.mobilePayment}</span>
                  </label>
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="bg-[#140e0c] border border-[#2d2019] p-4 rounded text-xs space-y-1.5">
                <div className="flex justify-between text-[#a89b8d]">
                  <span>Subtotal ({cart.length} unique items)</span>
                  <span className="tabular-nums font-sans">৳ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#a89b8d]">
                  <span>VAT & Service (10%)</span>
                  <span className="tabular-nums font-sans">৳ {tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#a89b8d]">
                  <span>Delivery Charge</span>
                  <span className="tabular-nums font-sans">
                    {formData.deliveryType === 'pickup' ? (
                      <span className="text-emerald-400">Pickup (৳ 0)</span>
                    ) : deliveryFee === 0 ? (
                      <span className="text-emerald-400">Complimentary</span>
                    ) : (
                      `৳ ${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#261b16] flex justify-between text-sm font-bold text-[#faf7f2]">
                  <span>Grand Total</span>
                  <span className="text-[#c5a059] tabular-nums font-sans text-base">
                    ৳ {(formData.deliveryType === 'pickup' ? subtotal + tax : total).toLocaleString()} BDT
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow-md"
              >
                {t.checkout.placeOrderBtn}
              </button>

              <div className="text-[10px] text-center text-[#7d7064] flex items-center justify-center gap-1.5">
                <ShieldAlert className="w-3 h-3 text-[#c5a059]" />
                <span>Frontend demonstration mode — no real payment gateway is processed.</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
