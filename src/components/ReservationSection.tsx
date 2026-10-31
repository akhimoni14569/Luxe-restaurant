import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Users, Clock, MapPin, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { ReservationData } from '../types';

export const ReservationSection: React.FC = () => {
  const { t, addReservation, setActiveTab } = useApp();

  const [formData, setFormData] = useState<ReservationData>({
    name: 'Syeda Nabila',
    phone: '+880 1819-223344',
    email: 'nabila@example.com',
    date: '2026-11-06',
    time: '08:00 PM',
    guests: 2,
    area: 'main-dining',
    specialRequests: 'Window booth or quiet candlelit table requested for anniversary celebration.'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [confirmedBookingCode, setConfirmedBookingCode] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = t.reservation.errors.name;
    if (!formData.phone.trim()) errs.phone = t.reservation.errors.phone;
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = t.reservation.errors.email;
    if (!formData.date) errs.date = t.reservation.errors.date;
    if (!formData.time) errs.time = t.reservation.errors.time;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = addReservation(formData);
    setConfirmedBookingCode(code);
  };

  const timeSlots = [
    '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
  ];

  return (
    <section className="py-24 bg-[#140e0c] border-b border-[#241a16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.reservation.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.reservation.title}
          </h2>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.reservation.subtitle}
          </p>
        </div>

        {/* 2-Column Reservation Container */}
        <div className="max-w-4xl mx-auto bg-[#1c1411] border border-[#3b2b22] rounded-sm overflow-hidden shadow-2xl">
          
          <div className="p-8 sm:p-12">
            {confirmedBookingCode ? (
              /* Success Confirmation */
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#faf7f2] mb-2">
                    {t.reservation.modalSuccessTitle}
                  </h3>
                  <p className="text-sm text-[#beb3a5] max-w-md mx-auto font-light leading-relaxed">
                    {t.reservation.modalSuccessSubtitle}
                  </p>
                </div>

                <div className="bg-[#140e0c] border border-[#2d201a] p-6 rounded max-w-md mx-auto text-left space-y-3">
                  <div className="flex justify-between items-center text-xs text-[#a89b8d] pb-2 border-b border-[#241a16]">
                    <span>{t.reservation.bookingCode}</span>
                    <span className="font-mono text-base font-bold text-[#c5a059]">
                      {confirmedBookingCode}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#d6cdbf]">
                    <span>Guest Name</span>
                    <span className="font-medium text-[#faf7f2]">{formData.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#d6cdbf]">
                    <span>Date & Time</span>
                    <span className="font-medium text-[#c5a059]">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#d6cdbf]">
                    <span>Party Size</span>
                    <span className="font-medium text-[#faf7f2]">{formData.guests} Guests</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#d6cdbf]">
                    <span>Dining Area</span>
                    <span className="font-medium text-[#faf7f2] capitalize">{formData.area.replace('-', ' ')}</span>
                  </div>
                </div>

                <p className="text-xs text-[#8f8072] max-w-md mx-auto italic">
                  {t.reservation.confirmationDetails}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setConfirmedBookingCode(null)}
                    className="px-6 py-2.5 bg-[#c5a059] text-[#181210] font-bold text-xs uppercase tracking-wider rounded cursor-pointer"
                  >
                    {t.reservation.doneBtn}
                  </button>
                  <button
                    onClick={() => setActiveTab('customer')}
                    className="px-6 py-2.5 border border-[#3b2b23] text-[#cfc5b8] hover:text-[#faf7f2] text-xs uppercase tracking-wider rounded cursor-pointer"
                  >
                    View in Customer Portal
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name, Phone, Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-[#c7beaf] block mb-1">
                      {t.reservation.nameLabel} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.reservation.namePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#c7beaf] block mb-1">
                      {t.reservation.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.reservation.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#c7beaf] block mb-1">
                      {t.reservation.emailLabel} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.reservation.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Date, Time, Guests Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-[#c7beaf] block mb-1">
                      {t.reservation.dateLabel} *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                      />
                    </div>
                    {errors.date && <p className="text-[11px] text-red-400 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#c7beaf] block mb-1">
                      {t.reservation.timeLabel} *
                    </label>
                    <select
                      value={formData.time}
                      onChange={e => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    >
                      {timeSlots.map((slot, idx) => (
                        <option key={idx} value={slot} className="bg-[#181210] text-[#faf7f2]">
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && <p className="text-[11px] text-red-400 mt-1">{errors.time}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#c7beaf] block mb-1">
                      {t.reservation.guestsLabel} *
                    </label>
                    <div className="flex items-center border border-[#33241e] bg-[#140e0c] rounded h-[42px]">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                        className="px-3 text-[#bab0a3] hover:text-[#faf7f2] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-bold text-sm text-[#c5a059] tabular-nums">
                        {formData.guests} Guests
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, guests: Math.min(20, prev.guests + 1) }))}
                        className="px-3 text-[#bab0a3] hover:text-[#faf7f2] cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Seating Area Preference */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#a89b8d] font-semibold block mb-2">
                    {t.reservation.areaLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    {[
                      { id: 'main-dining', label: t.reservation.areaMain },
                      { id: 'garden-terrace', label: t.reservation.areaTerrace },
                      { id: 'private-vault', label: t.reservation.areaVault },
                      { id: 'chefs-table', label: t.reservation.areaChefsTable },
                    ].map(area => (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, area: area.id as any })}
                        className={`p-3 rounded border text-left transition-colors cursor-pointer ${
                          formData.area === area.id
                            ? 'border-[#c5a059] bg-[#291f1a] text-[#faf7f2] font-semibold'
                            : 'border-[#2e211b] bg-[#140e0c] text-[#8e8073] hover:text-[#c4b9ad]'
                        }`}
                      >
                        {area.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Dietary / Requests */}
                <div>
                  <label className="text-xs text-[#c7beaf] block mb-1">
                    {t.reservation.specialRequestsLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder={t.reservation.specialRequestsPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-xs text-[#faf7f2] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.reservation.submitBtn}</span>
                </button>

                <div className="text-[10px] text-center text-[#7d7064] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-[#c5a059]" />
                  <span>Frontend demonstration mode — no live database or credit card charge.</span>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
