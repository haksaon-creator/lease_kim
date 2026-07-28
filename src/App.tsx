import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialDeals } from './components/SpecialDeals';
import { CoreServices } from './components/CoreServices';
import { TrustSection } from './components/TrustSection';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuickFloatingBar } from './components/QuickFloatingBar';
import { QuoteModal } from './components/QuoteModal';
import { DetailModal } from './components/DetailModal';
import { SpecialDeal, DeliveryStory } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [presetVehicle, setPresetVehicle] = useState<string | undefined>(undefined);
  
  const [selectedDeal, setSelectedDeal] = useState<SpecialDeal | null>(null);
  const [selectedStory, setSelectedStory] = useState<DeliveryStory | null>(null);

  const handleOpenQuoteModal = (vehicleName?: string) => {
    setPresetVehicle(vehicleName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleCalculatorSubmitted = (data: any) => {
    setPresetVehicle(`${data.selectedModel} (${data.termMonths}, 보증금 ${data.initialDeposit})`);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-[#0284C7] selection:text-white">
      {/* Top Fixed Header Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main One-Page Section Architecture */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2. Today's Special Deals Section */}
        <SpecialDeals
          onSelectDeal={(deal) => setSelectedDeal(deal)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 3. Core Services Section */}
        <CoreServices onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Trust Stats & Real Delivery Stories Section */}
        <TrustSection
          onSelectStory={(story) => setSelectedStory(story)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 5. Interactive 1:1 Quote Simulator & Form */}
        <InteractiveQuoteCalculator onQuoteSubmitted={handleCalculatorSubmitted} />

        {/* 6. Frequently Asked Questions (FAQ) */}
        <FAQSection />
      </main>

      {/* Footer & Company Info */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating Bottom Quick Action Bar */}
      <QuickFloatingBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 30-sec Fast Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        presetVehicle={presetVehicle}
      />

      {/* Deal or Delivery Story Detail Inspection Modal */}
      <DetailModal
        deal={selectedDeal}
        story={selectedStory}
        onClose={() => {
          setSelectedDeal(null);
          setSelectedStory(null);
        }}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </div>
  );
}
