
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER } from '../constants';
import Logo, { LogoIcon } from './Logo';

interface HeaderProps {
  isScrolled: boolean;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onLogoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      
      const targetId = href.slice(1);
      const element = targetId === '' ? document.body : document.getElementById(targetId);
      
      if (element) {
        const headerOffset = isScrolled ? 70 : 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleOrderClick = () => {
    const el = document.getElementById('collections');
    if (el) {
      const headerOffset = isScrolled ? 70 : 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-700 ${
        isScrolled ? 'py-1 shadow-xl' : 'py-3 border-b hairline-border border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24 relative">
          
          {/* SECTION GAUCHE: Navigation (1/3 de l'espace) */}
          <div className="flex-1 flex items-center justify-start">
            <button 
              className="md:hidden p-2 -ml-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>

            <nav className="hidden md:flex space-x-6 lg:space-x-10">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-black transition-all relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* SECTION CENTRALE: Logo (Isolé et Centré) */}
          <div className="flex-shrink-0 px-4 md:px-8">
            <button 
              onClick={() => { if (onLogoClick) onLogoClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="group block transition-transform duration-700 hover:scale-105 outline-none"
            >
              <Logo 
                className={`transition-all duration-700 transform ${isScrolled ? 'scale-75 md:scale-85' : 'scale-90 md:scale-110'}`} 
                showTagline={!isScrolled}
              />
            </button>
          </div>

          {/* SECTION DROITE: Actions (1/3 de l'espace) */}
          <div className="flex-1 flex items-center justify-end space-x-3 lg:space-x-6">
            {/* Bouton COMMANDER - Toujours séparé du logo */}
            <button 
              onClick={handleOrderClick}
              className="hidden sm:flex items-center space-x-3 group px-3 py-2 hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
            >
              <LogoIcon size="w-5 h-5 lg:w-6 lg:h-6" className="scale-75 group-hover:rotate-0" />
              <span className="text-[8px] lg:text-[9px] uppercase tracking-[0.3em] font-bold text-black border-b border-black/10 group-hover:border-black transition-all">
                Commander
              </span>
            </button>

            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
              className="flex items-center text-[8px] lg:text-[9px] tracking-[0.3em] lg:tracking-[0.4em] font-bold bg-black text-white px-3 lg:px-6 py-3 hover:bg-emerald-800 transition-all shadow-lg active:scale-95 whitespace-nowrap"
            >
              <Phone size={11} className="mr-2 lg:mr-3" />
              <span className="hidden sm:inline">CONCIERGERIE VIP</span>
              <span className="sm:hidden">VIP</span>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-white z-[40] pt-24 px-8 animate-in fade-in slide-in-from-top duration-700">
          <nav className="flex flex-col space-y-10 text-center">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-lg uppercase tracking-[0.5em] font-bold border-b hairline-border border-gray-50 pb-4"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => { setIsMenuOpen(false); handleOrderClick(); }}
              className="flex items-center justify-center space-x-4 py-6 bg-gray-50 border border-gray-100"
            >
              <LogoIcon size="w-8 h-8" />
              <span className="text-sm font-bold uppercase tracking-widest">Passer une commande</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;