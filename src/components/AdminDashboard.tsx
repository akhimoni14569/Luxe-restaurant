import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_ADMIN_ORDERS, DEMO_ADMIN_RESERVATIONS } from '../data/supplementalData';
import { MENU_ITEMS } from '../data/menuData';
import { ShieldCheck, TrendingUp, Users, Utensils, AlertTriangle, Check, RefreshCw } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { t } = useApp();
  const [orders, setOrders] = useState(DEMO_ADMIN_ORDERS);
  const [stockItems, setStockItems] = useState(
    MENU_ITEMS.slice(0, 6).map((item, idx) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      priceBDT: item.priceBDT,
      status: idx === 4 ? 'Low Stock (4 left)' : idx === 5 ? 'Sold Out (86)' : 'In Stock'
    }))
  );
  const [notice, setNotice] = useState<string | null>(null);

  const cycleStatus = (id: string) => {
    setOrders(prev =>
      prev.map(o => {
        if (o.id === id) {
          const next =
            o.status === 'In Kitchen'
              ? 'Ready for Pickup'
              : o.status === 'Ready for Pickup'
              ? 'Dispatched'
              : 'Delivered';
          return { ...o, status: next };
        }
        return o;
      })
    );
    setNotice(t.adminDash.statusUpdatedMsg);
    setTimeout(() => setNotice(null), 2500);
  };

  const toggleStock = (id: string) => {
    setStockItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const next =
            item.status === 'In Stock'
              ? 'Low Stock (3 left)'
              : item.status.includes('Low')
              ? 'Sold Out (86)'
              : 'In Stock';
          return { ...item, status: next };
        }
        return item;
      })
    );
  };

  return (
    <section className="py-20 bg-[#140e0c] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Demo Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#291e18] gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 bg-[#2d1b15] text-[#c5a059] border border-[#c5a059]/40 text-[10px] uppercase tracking-widest font-semibold rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.adminDash.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#faf7f2]">
              {t.adminDash.title}
            </h1>
            <p className="text-xs text-[#a89b8d] font-light mt-1">
              {t.adminDash.subtitle}
            </p>
          </div>

          {notice && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950 text-emerald-300 border border-emerald-700 rounded text-xs">
              <Check className="w-3.5 h-3.5" />
              <span>{notice}</span>
            </div>
          )}
        </div>

        {/* 4 KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1c1411] border border-[#2e211b] p-6 rounded-sm shadow-sm">
            <div className="flex items-center justify-between text-[#8c7e71] mb-2">
              <span className="text-xs uppercase tracking-wider">{t.adminDash.todayRevenue}</span>
              <TrendingUp className="w-4 h-4 text-[#c5a059]" />
            </div>
            <div className="text-2xl font-bold font-serif-luxury text-[#c5a059] tabular-nums">
              {t.adminDash.todayRevenueVal}
            </div>
            <div className="text-[11px] text-emerald-400 mt-1">+18.4% vs previous Saturday</div>
          </div>

          <div className="bg-[#1c1411] border border-[#2e211b] p-6 rounded-sm shadow-sm">
            <div className="flex items-center justify-between text-[#8c7e71] mb-2">
              <span className="text-xs uppercase tracking-wider">{t.adminDash.activeOrders}</span>
              <Utensils className="w-4 h-4 text-[#c5a059]" />
            </div>
            <div className="text-2xl font-bold font-serif-luxury text-[#faf7f2] tabular-nums">
              {t.adminDash.activeOrdersVal}
            </div>
            <div className="text-[11px] text-[#a89b8d] mt-1">Average ticket time: 18 mins</div>
          </div>

          <div className="bg-[#1c1411] border border-[#2e211b] p-6 rounded-sm shadow-sm">
            <div className="flex items-center justify-between text-[#8c7e71] mb-2">
              <span className="text-xs uppercase tracking-wider">{t.adminDash.seatedGuests}</span>
              <Users className="w-4 h-4 text-[#c5a059]" />
            </div>
            <div className="text-2xl font-bold font-serif-luxury text-[#faf7f2] tabular-nums">
              {t.adminDash.seatedGuestsVal}
            </div>
            <div className="text-[11px] text-[#a89b8d] mt-1">86% seating capacity active</div>
          </div>

          <div className="bg-[#1c1411] border border-[#2e211b] p-6 rounded-sm shadow-sm">
            <div className="flex items-center justify-between text-[#8c7e71] mb-2">
              <span className="text-xs uppercase tracking-wider">{t.adminDash.pendingReservations}</span>
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            </div>
            <div className="text-2xl font-bold font-serif-luxury text-[#c5a059] tabular-nums">
              {t.adminDash.pendingReservationsVal}
            </div>
            <div className="text-[11px] text-[#a89b8d] mt-1">VIP Vaults fully reserved</div>
          </div>
        </div>

        {/* Live Kitchen Orders Table */}
        <div className="bg-[#1c1411] border border-[#2e211b] rounded-sm overflow-hidden shadow-md">
          <div className="p-6 border-b border-[#291e18] flex items-center justify-between">
            <h2 className="text-lg font-serif-luxury font-bold text-[#faf7f2]">
              {t.adminDash.liveOrdersTitle}
            </h2>
            <span className="text-xs text-[#8c7e71]">Click status button to simulate live progression</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#160f0d] text-[#8c7e71] uppercase tracking-wider border-b border-[#291e18]">
                <tr>
                  <th className="py-3 px-6 font-medium">Order ID</th>
                  <th className="py-3 px-6 font-medium">Guest</th>
                  <th className="py-3 px-6 font-medium">Items</th>
                  <th className="py-3 px-6 font-medium">Total BDT</th>
                  <th className="py-3 px-6 font-medium">Type</th>
                  <th className="py-3 px-6 font-medium text-right">Status Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#241a15] text-[#d6cdbf]">
                {orders.map(o => (
                  <tr key={o.id} className="hover:bg-[#201814] transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-[#c5a059]">{o.id}</td>
                    <td className="py-4 px-6">
                      <div className="font-semibold text-[#faf7f2]">{o.customer}</div>
                      <div className="text-[10px] text-[#8c7e71]">{o.phone}</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#c4b8aa]">{o.items}</td>
                    <td className="py-4 px-6 font-bold tabular-nums">৳ {o.totalBDT.toLocaleString()}</td>
                    <td className="py-4 px-6 text-[11px] text-[#a89b8d]">{o.type}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => cycleStatus(o.id)}
                        className={`px-3 py-1.5 rounded text-[11px] font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                          o.status === 'In Kitchen'
                            ? 'bg-amber-950/80 text-amber-300 border border-amber-700/50 hover:bg-amber-900'
                            : o.status === 'Ready for Pickup'
                            ? 'bg-blue-950/80 text-blue-300 border border-blue-700/50 hover:bg-blue-900'
                            : 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-900'
                        }`}
                        title="Click to advance status"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>{o.status}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2-Column Split: Table Reservations & Inventory 86-List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Table Reservations Queue */}
          <div className="bg-[#1c1411] border border-[#2e211b] rounded-sm p-6 shadow-md">
            <h3 className="text-lg font-serif-luxury font-bold text-[#faf7f2] mb-4">
              {t.adminDash.tableManagementTitle}
            </h3>
            <div className="space-y-3">
              {DEMO_ADMIN_RESERVATIONS.map(res => (
                <div
                  key={res.id}
                  className="p-3.5 bg-[#160f0d] border border-[#261b16] rounded flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-semibold text-[#faf7f2]">
                      {res.guest} ({res.guests} Guests)
                    </div>
                    <div className="text-[#a89b8d] text-[11px] mt-0.5">
                      {res.date} at {res.time} · {res.area}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#241a16] text-[#c5a059] border border-[#3b2b22] rounded text-[10px] font-mono">
                    {res.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Stock & 86 List Simulator */}
          <div className="bg-[#1c1411] border border-[#2e211b] rounded-sm p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-serif-luxury font-bold text-[#faf7f2]">
                {t.adminDash.menuStockTitle}
              </h3>
              <span className="text-[11px] text-[#8c7e71]">Click status to toggle 86 list</span>
            </div>
            <div className="space-y-3">
              {stockItems.map(item => (
                <div
                  key={item.id}
                  className="p-3.5 bg-[#160f0d] border border-[#261b16] rounded flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-semibold text-[#faf7f2]">{item.name}</div>
                    <div className="text-[#8c7e71] text-[11px]">
                      ৳ {item.priceBDT.toLocaleString()} · {item.category}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleStock(item.id)}
                    className={`px-2.5 py-1 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                      item.status.includes('Sold Out')
                        ? 'bg-rose-950 text-rose-300 border border-rose-800'
                        : item.status.includes('Low')
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : 'bg-[#221a16] text-[#c5a059] border border-[#3d2e25]'
                    }`}
                  >
                    {item.status}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
