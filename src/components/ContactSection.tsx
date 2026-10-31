import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="py-20 bg-[#181210] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.contact.kicker}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.contact.title}
          </h1>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address */}
            <div className="p-6 bg-[#1f1714] border border-[#2e211b] rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#2a1e18] text-[#c5a059] rounded-sm shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#faf7f2] mb-1">
                    {t.contact.addressTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#beb2a4] font-light leading-relaxed">
                    {t.contact.addressValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 bg-[#1f1714] border border-[#2e211b] rounded-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#2a1e18] text-[#c5a059] rounded-sm shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#faf7f2] mb-1">
                    {t.contact.phoneTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#beb2a4] font-light">
                    {t.contact.phoneValue}
                  </p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/8801711000000"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-900/60 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/50 rounded text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t.contact.whatsappBtn}</span>
              </a>
            </div>

            {/* Concierge Email */}
            <div className="p-6 bg-[#1f1714] border border-[#2e211b] rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#2a1e18] text-[#c5a059] rounded-sm shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#faf7f2] mb-1">
                    {t.contact.emailTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#beb2a4] font-light">
                    {t.contact.emailValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 bg-[#1f1714] border border-[#2e211b] rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#2a1e18] text-[#c5a059] rounded-sm shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs text-[#beb2a4] font-light">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#faf7f2] mb-2 font-sans">
                    {t.contact.hoursTitle}
                  </h3>
                  <div>{t.contact.hoursLunch}</div>
                  <div>{t.contact.hoursDinner}</div>
                  <div className="text-[#c5a059] font-medium pt-1">{t.contact.hoursWeekend}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#1c1411] border border-[#3b2b22] p-8 sm:p-10 rounded-sm shadow-xl">
            <h2 className="text-2xl font-serif-luxury font-bold text-[#faf7f2] mb-2">
              {t.contact.formTitle}
            </h2>
            <p className="text-xs text-[#9e8f80] mb-6 font-light">
              Send your bespoke banqueting, corporate event, or table inquiries directly to our head concierge.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-[#140e0c] border border-emerald-500/40 rounded space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-serif-luxury font-bold text-[#faf7f2]">
                  Message Dispatched
                </h4>
                <p className="text-xs text-[#cfc4b6] max-w-sm mx-auto">
                  {t.contact.messageSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#c4b9ad] block mb-1">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Asif Mahmud"
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#c4b9ad] block mb-1">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="asif@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#c4b9ad] block mb-1">
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Private Board Dinner / Tasting Inquiry"
                    className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#c4b9ad] block mb-1">
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we may assist your dining experience..."
                    className="w-full px-3.5 py-2.5 bg-[#140e0c] border border-[#33241e] focus:border-[#c5a059] rounded text-sm text-[#faf7f2] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#181210] font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.sendMessageBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Map Placeholder Card */}
        <div className="bg-[#1c1411] border border-[#2e211b] rounded-sm p-6 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
            <MapPin className="w-4 h-4" />
            <span>Gulshan-2 Prime Diplomatic Enclave</span>
          </div>
          <div className="w-full h-64 bg-[#140e0c] rounded border border-[#291e18] flex flex-col items-center justify-center p-6 relative overflow-hidden group">
            {/* Architectural Grid pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#271d18] border border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif-luxury font-bold text-[#faf7f2]">
                LUXE RESTAURANT & ROOFTOP SALON
              </h4>
              <p className="text-xs text-[#a89b8d] max-w-sm mx-auto">
                Level 14, The Imperial Crown, 88 Gulshan Avenue, Dhaka-1212. Complimentary 24/7 Valet Parking at Main Entrance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
