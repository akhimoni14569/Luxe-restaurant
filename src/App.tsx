/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryIntro } from './components/StoryIntro';
import { SignatureDining } from './components/SignatureDining';
import { PopularDishesSection } from './components/PopularDishesSection';
import { ChefSpecialSection } from './components/ChefSpecialSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SpecialOffers } from './components/SpecialOffers';
import { FoodMenu } from './components/FoodMenu';
import { AboutPage } from './components/AboutPage';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { CustomerDashboard } from './components/CustomerDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FoodDetailModal } from './components/FoodDetailModal';
import { SearchModal } from './components/SearchModal';
import { Check } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { activeTab, toastMessage, language } = useApp();

  return (
    <div className={`min-h-screen bg-[#181210] text-[#faf7f2] flex flex-col ${language === 'bn' ? 'font-bengali' : 'font-sans-body'}`}>
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero />
            <StoryIntro />
            <SignatureDining />
            <PopularDishesSection />
            <ChefSpecialSection />
            <WhyChooseUs />
            <SpecialOffers />
            <TestimonialsSection />
            <ReservationSection />
            <FAQSection />
          </>
        )}

        {activeTab === 'menu' && <FoodMenu />}
        {activeTab === 'story' && <AboutPage />}
        {activeTab === 'gallery' && <GallerySection />}
        {activeTab === 'reservations' && (
          <>
            <ReservationSection />
            <FAQSection />
          </>
        )}
        {activeTab === 'contact' && <ContactSection />}
        {activeTab === 'customer' && <CustomerDashboard />}
        {activeTab === 'admin' && <AdminDashboard />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <CheckoutModal />
      <FoodDetailModal />
      <SearchModal />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#221815] border border-[#c5a059] text-[#faf7f2] px-4 py-3 rounded-sm shadow-2xl flex items-center gap-2.5 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-5 h-5 rounded-full bg-[#c5a059] text-[#181210] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
