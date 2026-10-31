import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, Calendar, ShoppingBag, Settings, Award, ShieldAlert, Clock, CheckCircle } from 'lucide-react';

export const CustomerDashboard: React.FC = () => {
  const { t, orders, reservations, setActiveTab } = useApp();
  const [activeTab, setActiveTabLocal] = useState<'orders' | 'reservations' | 'settings'>('orders');

  return (
    <section className="py-20 bg-[#181210] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Demo Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#291e18] gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 bg-[#4a101d] text-[#faf7f2] border border-[#c5a059]/40 text-[10px] uppercase tracking-widest font-semibold rounded-xs">
              <ShieldAlert className="w-3 h-3 text-[#c5a059]" />
              <span>{t.customerDash.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#faf7f2]">
              {t.customerDash.title}
            </h1>
            <p className="text-xs text-[#a89b8d] font-light mt-1">
              {t.customerDash.subtitle}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('menu')}
            className="self-start sm:self-auto px-5 py-2.5 bg-[#c5a059] text-[#181210] font-bold text-xs uppercase tracking-wider rounded cursor-pointer"
          >
            Order New Dishes
          </button>
        </div>

        {/* Member Profile Overview Card */}
        <div className="bg-[#1f1714] border border-[#33241d] rounded-sm p-6 sm:p-8 mb-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#2a1e18] border-2 border-[#c5a059] text-[#c5a059] flex items-center justify-center text-xl font-serif-luxury font-bold">
                FC
              </div>
              <div>
                <h3 className="text-xl font-serif-luxury font-bold text-[#faf7f2]">
                  {t.customerDash.profileName}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#c5a059] font-medium mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.customerDash.memberStatus}</span>
                </div>
                <div className="text-xs text-[#8f8072] mt-1 font-light">
                  Member since January 2025 · VIP Table Priority
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4 sm:pt-0 border-t sm:border-t-0 border-[#2d201a]">
              <div>
                <div className="text-2xl font-bold text-[#faf7f2] tabular-nums font-serif-luxury">
                  {t.customerDash.visitsCount}
                </div>
                <div className="text-xs text-[#8c7e71]">Total Fine Dining Visits</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#c5a059] tabular-nums font-serif-luxury">
                  2,450
                </div>
                <div className="text-xs text-[#8c7e71]">Gourmet Reward Points</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Tabs (Clean Segmented zero-pill discipline) */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#291e18] pb-3">
          <button
            onClick={() => setActiveTabLocal('orders')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-[#c5a059] text-[#181210]'
                : 'text-[#a89b8d] hover:text-[#faf7f2] bg-[#201814]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t.customerDash.tabOrders} ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTabLocal('reservations')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'reservations'
                ? 'bg-[#c5a059] text-[#181210]'
                : 'text-[#a89b8d] hover:text-[#faf7f2] bg-[#201814]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.customerDash.tabReservations} ({reservations.length})</span>
          </button>

          <button
            onClick={() => setActiveTabLocal('settings')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'bg-[#c5a059] text-[#181210]'
                : 'text-[#a89b8d] hover:text-[#faf7f2] bg-[#201814]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>{t.customerDash.tabSettings}</span>
          </button>
        </div>

        {/* Tab 1: Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="p-12 text-center bg-[#1c1411] border border-[#2b1f18] rounded">
                <p className="text-sm text-[#8c7e71]">{t.customerDash.noOrders}</p>
              </div>
            ) : (
              orders.map((order, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1411] border border-[#2e211b] p-6 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#c5a059]">
                        {order.id}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800/40 rounded">
                        Confirmed & Prepared
                      </span>
                    </div>
                    <div className="text-xs text-[#a89b8d]">
                      {order.timestamp || 'Recent Order'} · {order.deliveryType === 'delivery' ? 'White-Glove Delivery' : 'Table Pickup'}
                    </div>
                    <div className="text-xs text-[#cfc4b6] mt-1">
                      {order.address}
                    </div>
                  </div>

                  <div className="text-right sm:border-l sm:border-[#2d201a] sm:pl-6">
                    <div className="text-[10px] text-[#807264] uppercase font-mono">Amount Paid</div>
                    <div className="text-lg font-bold text-[#faf7f2] tabular-nums font-sans">
                      ৳ {order.total.toLocaleString()} BDT
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Reservations */}
        {activeTab === 'reservations' && (
          <div className="space-y-4">
            {reservations.map((res, idx) => (
              <div
                key={idx}
                className="bg-[#1c1411] border border-[#2e211b] p-6 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#c5a059]">
                      {res.id}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800/40 rounded flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>Table Reserved</span>
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#faf7f2]">
                    {res.date} at {res.time} · {res.guests} Guests
                  </div>
                  <div className="text-xs text-[#a89b8d] capitalize">
                    Seating: {res.area.replace('-', ' ')}
                  </div>
                  {res.specialRequests && (
                    <div className="text-xs italic text-[#8c7e71] pt-1">
                      “{res.specialRequests}”
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <button
                    onClick={() => setActiveTab('reservations')}
                    className="px-4 py-2 border border-[#3b2b23] hover:border-[#c5a059] text-xs text-[#cfc4b6] hover:text-[#faf7f2] rounded transition-colors"
                  >
                    Modify Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Dietary Settings */}
        {activeTab === 'settings' && (
          <div className="bg-[#1c1411] border border-[#2e211b] p-6 sm:p-8 rounded-sm space-y-6">
            <h3 className="text-lg font-serif-luxury font-bold text-[#faf7f2]">
              Guest Dining & Allergen Profile
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#140e0c] border border-[#261b16] rounded">
                <div className="font-semibold text-[#faf7f2] mb-1">Halal Certification</div>
                <div className="text-[#a89b8d]">100% Halal Verified Diet strictly observed.</div>
              </div>
              <div className="p-4 bg-[#140e0c] border border-[#261b16] rounded">
                <div className="font-semibold text-[#faf7f2] mb-1">Seating Preference</div>
                <div className="text-[#a89b8d]">Corner booth, low ambient noise, warm candlelight.</div>
              </div>
              <div className="p-4 bg-[#140e0c] border border-[#261b16] rounded">
                <div className="font-semibold text-[#faf7f2] mb-1">Special Occasion Alerts</div>
                <div className="text-[#a89b8d]">Wedding Anniversary (November 5), Birthday (March 12).</div>
              </div>
              <div className="p-4 bg-[#140e0c] border border-[#261b16] rounded">
                <div className="font-semibold text-[#faf7f2] mb-1">Beverage Preference</div>
                <div className="text-[#a89b8d]">Sparkling Saffron Elixir, Ethiopian pour-over coffee.</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
