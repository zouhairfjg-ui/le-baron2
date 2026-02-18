
import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';
import { Instagram, Facebook, MessageCircle, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onLegalLinkClick: (section: 'faq' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalLinkClick }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer id="footer" className="bg-white pt-24 pb-12 border-t hairline-border border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <div className="space-y-8">
            <div className="inline-block transition-transform hover:scale-105 duration-700">
              <Logo className="h-16 items-start" showTagline />
            </div>
            <p className="text-gray-400 text-[10px] font-light leading-relaxed tracking-wider max-w-xs uppercase">
              L'adresse incontournable pour les accessoires de luxe au Maroc. Raffinement et service irréprochable.
            </p>
            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-gray-300 hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href={WHATSAPP_LINK} className="text-gray-300 hover:text-emerald-600 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-10">
            <h5 className="text-[10px] uppercase tracking-[0.5em] font-bold border-b hairline-border border-gray-50 pb-2 inline-block">Service Client</h5>
            <ul className="space-y-4">
              <li><button onClick={() => onLegalLinkClick('faq')} className="text-gray-400 text-[9px] uppercase tracking-[0.4em] hover:text-black transition-colors text-left">FAQ</button></li>
              <li><button onClick={() => onLegalLinkClick('privacy')} className="text-gray-400 text-[9px] uppercase tracking-[0.4em] hover:text-black transition-colors text-left">Politique de Confidentialité</button></li>
              <li><button onClick={() => onLegalLinkClick('terms')} className="text-gray-400 text-[9px] uppercase tracking-[0.4em] hover:text-black transition-colors text-left">Conditions de Service</button></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h5 className="text-[10px] uppercase tracking-[0.5em] font-bold border-b hairline-border border-gray-50 pb-2 inline-block">Collections</h5>
            <ul className="space-y-4">
               <li><a href="/" className="text-gray-400 text-[9px] uppercase tracking-[0.4em] hover:text-black transition-colors">Ceintures de Prestige</a></li>
               <li><a href="/" className="text-gray-400 text-[9px] uppercase tracking-[0.4em] hover:text-black transition-colors">Bracelets en Acier</a></li>
               <li><a href="/" className="text-gray-400 text-[9px] uppercase tracking-[0.4em] hover:text-black transition-colors">Petite Maroquinerie</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h5 className="text-[10px] uppercase tracking-[0.5em] font-bold border-b hairline-border border-gray-50 pb-2 inline-block">Conciergerie</h5>
            <div className="space-y-6">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="block text-xl font-cinzel font-bold tracking-tighter hover:text-emerald-600 transition-colors">
                {PHONE_NUMBER}
              </a>
              <a href={WHATSAPP_LINK} className="inline-block text-[10px] font-bold text-emerald-600 uppercase tracking-[0.4em] underline underline-offset-8 decoration-1">
                Parler à un conseiller
              </a>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t hairline-border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <p className="text-[8px] text-gray-300 uppercase tracking-[0.6em] font-medium leading-relaxed">
              © 2024 MAISON LE BARON. L'ÉLÉGANCE MASCULINE REDÉFINIE AU MAROC.
            </p>
            <a href="#" className="text-[8px] text-gray-400 uppercase tracking-[0.4em] font-bold hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5">
              DASHBOARD
            </a>
          </div>
          
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="flex items-center space-x-2 text-[9px] font-bold uppercase tracking-[0.4em] text-emerald-600">
              <ShieldCheck size={14} />
              <span>Paiements 100% Sécurisés</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
