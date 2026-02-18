
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FeaturedPack from './components/FeaturedPack';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProductPage from './components/ProductPage';
import LegalPage from './components/LegalPage';
import { Product } from './types';
import { PRODUCTS } from './constants';

type View = 'home' | 'product' | 'legal';
type LegalSection = 'faq' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isHeroCtaClicked, setIsHeroCtaClicked] = useState(false);
  const [activeLegalSection, setActiveLegalSection] = useState<LegalSection>('faq');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroCtaClick = (product: Product) => {
    setIsHeroCtaClicked(true);
    navigateToProduct(product);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLegal = (section: LegalSection) => {
    setActiveLegalSection(section);
    setCurrentView('legal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const renderView = () => {
    switch(currentView) {
      case 'product':
        return selectedProduct && <ProductPage product={selectedProduct} onBack={navigateToHome} />;
      case 'legal':
        return <LegalPage initialSection={activeLegalSection} onBack={navigateToHome} />;
      case 'home':
      default:
        return (
          <>
            <Hero onCtaClick={handleHeroCtaClick} isCtaClicked={isHeroCtaClicked} />
            <div id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center mb-16">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Catalogue</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-tighter">Nos Essentiels LE BARON</h2>
                <div className="w-16 h-1 bg-black mx-auto"></div>
              </div>
              <ProductGrid products={PRODUCTS} onProductClick={navigateToProduct} />
            </div>
            <FeaturedPack />
            <TrustBar />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black py-2.5 text-center">
        <p className="text-[10px] md:text-xs tracking-[0.3em] font-bold text-white uppercase">
          LIVRAISON GRATUITE & PAIEMENT À LA LIVRAISON PARTOUT AU MAROC
        </p>
      </div>

      <Header isScrolled={isScrolled} onLogoClick={navigateToHome} />
      
      <main className="animate-in fade-in duration-1000">
        {renderView()}
      </main>

      <Footer onLegalLinkClick={navigateToLegal} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
