import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { GALLERY_ITEMS } from '../data/supplementalData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { language, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="py-20 bg-[#181210] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            {t.gallery.kicker}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#faf7f2] mb-4">
            {t.gallery.title}
          </h1>
          <p className="text-base text-[#bfb5a8] font-light leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Tabs (zero-pill clean segmented buttons) */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: t.gallery.filterAll },
            { id: 'interior', label: t.gallery.filterInterior },
            { id: 'food', label: t.gallery.filterFood },
            { id: 'chef', label: t.gallery.filterChef },
            { id: 'experience', label: t.gallery.filterExperience },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#c5a059] text-[#181210] font-bold shadow-sm'
                  : 'bg-[#221a16] text-[#c9bfb2] hover:text-[#faf7f2] hover:bg-[#2b211c] border border-[#33251e]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-center text-xs text-[#8f8072] mb-8 font-light">
          {t.gallery.clickToEnlarge}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const title = language === 'bn' ? item.titleBn : item.title;
            const caption = language === 'bn' ? item.captionBn : item.caption;

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] bg-[#1e1613] border border-[#2e211b] hover:border-[#c5a059]/60 rounded-sm overflow-hidden cursor-pointer shadow-md"
              >
                <img
                  src={item.image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/luxe_hero_dining_1793454111259.jpg';
                  }}
                />
                
                {/* Hover Scrim & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181210]/95 via-[#181210]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="text-[10px] text-[#c5a059] uppercase tracking-widest font-semibold mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-serif-luxury font-bold text-[#faf7f2] mb-1">
                    {title}
                  </h3>
                  <p className="text-xs text-[#cfc4b6] font-light line-clamp-2">
                    {caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#c5a059] font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View High-Res Lightbox</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-30 p-2.5 text-[#e6ded3] hover:text-[#c5a059] bg-[#181210]/80 rounded-full cursor-pointer transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 text-[#e6ded3] hover:text-[#c5a059] bg-[#181210]/80 rounded-full cursor-pointer transition-colors"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 text-[#e6ded3] hover:text-[#c5a059] bg-[#181210]/80 rounded-full cursor-pointer transition-colors"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Content */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={activeLightboxItem.image}
                alt={language === 'bn' ? activeLightboxItem.titleBn : activeLightboxItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-sm border border-[#3b2b22] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              <div className="mt-4 text-center max-w-xl">
                <h3 className="text-xl font-serif-luxury font-bold text-[#faf7f2]">
                  {language === 'bn' ? activeLightboxItem.titleBn : activeLightboxItem.title}
                </h3>
                <p className="text-xs text-[#cfc4b6] mt-1 font-light">
                  {language === 'bn' ? activeLightboxItem.captionBn : activeLightboxItem.caption}
                </p>
                <div className="text-[11px] text-[#8c7e71] mt-2 tabular-nums">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
