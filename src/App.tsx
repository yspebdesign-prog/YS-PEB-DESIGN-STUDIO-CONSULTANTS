import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { PageId } from './types';

// Views
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ServicesView } from './components/views/ServicesView';
import { PEBDesignView } from './components/views/PEBDesignView';
import { StructuralDesignView } from './components/views/StructuralDesignView';
import { DetailingView } from './components/views/DetailingView';
import { EstimationView } from './components/views/EstimationView';
import { FoundationDesignView } from './components/views/FoundationDesignView';
import { StabilityCertificateView } from './components/views/StabilityCertificateView';
import { ProjectsView } from './components/views/ProjectsView';
import { IndustriesView } from './components/views/IndustriesView';
import { InsightsView } from './components/views/InsightsView';
import { WhyUsView } from './components/views/WhyUsView';
import { FabricatorsView } from './components/views/FabricatorsView';
import { FAQView } from './components/views/FAQView';
import { ContactView } from './components/views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialServiceForQuote, setInitialServiceForQuote] = useState<string>(
    'PEB Structural Design + GA + Detailing'
  );

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (service?: string) => {
    if (service) {
      setInitialServiceForQuote(service);
    }
    setIsQuoteModalOpen(true);
  };

  const handleApplyDimensionsToQuote = (dimensions: {
    length: string;
    width: string;
    height: string;
  }) => {
    setInitialServiceForQuote(
      `PEB Design for Building: ${dimensions.length}m (L) x ${dimensions.width}m (Span) x ${dimensions.height}m (Eave)`
    );
    setIsQuoteModalOpen(true);
  };

  // Render view based on currentPage
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onApplyDimensionsToQuote={handleApplyDimensionsToQuote}
          />
        );
      case 'about':
        return (
          <AboutView
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal('General PEB Design Consultancy')}
          />
        );
      case 'services':
        return (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'peb-design':
        return (
          <PEBDesignView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'structural-design':
        return (
          <StructuralDesignView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'detailing':
        return (
          <DetailingView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'estimation':
        return (
          <EstimationView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onApplyDimensionsToQuote={handleApplyDimensionsToQuote}
          />
        );
      case 'foundation-design':
        return (
          <FoundationDesignView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'stability-certificate':
        return (
          <StabilityCertificateView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'projects':
        return (
          <ProjectsView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'industries':
        return (
          <IndustriesView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'insights':
        return (
          <InsightsView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'why-us':
        return (
          <WhyUsView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'fabricators':
        return (
          <FabricatorsView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'faq':
        return (
          <FAQView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'contact':
        return (
          <ContactView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onApplyDimensionsToQuote={handleApplyDimensionsToQuote}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050c17] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">{renderCurrentView()}</main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Quick Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Project Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={initialServiceForQuote}
      />
    </div>
  );
}
