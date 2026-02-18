
import React from 'react';
import { LogoIcon } from './Logo';

const FeaturedPack: React.FC = () => {
  
  const handleScrollToCollections = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('collections');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-24 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] md:aspect-video relative overflow-hidden group">
              <img 
                src="https://res.cloudinary.com/dxstmm6mh/image/upload/v1771343111/t%C3%A9l%C3%A9chargement_7_tmdpnf.jpg" 
                alt="Offre Prestige - LE BARON" 
                className="w-full h-full object-cover luxury-hover"
              />
              <div className="absolute top-8 right-8 bg-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl flex flex-col items-center justify-center animate-pulse">
                <span className="text-xs uppercase tracking-widest font-bold">-15%</span>
                <span className="text-xl font-serif font-bold">OFFERT</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-[0.3em]">Offre Prestige</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">L'Excellence Récompensée</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Pour toute acquisition d'une valeur supérieure à 500 DHS, la Maison LE BARON a le plaisir de vous offrir une <strong>réduction exceptionnelle de 15%</strong>.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-serif font-bold">Votre fidélité célébrée</span>
              </div>
              <p className="text-sm text-emerald-600 font-medium">La réduction sera appliquée par notre conciergerie lors de la confirmation.</p>
            </div>

            <div className="pt-4">
              <a 
                href="#collections"
                onClick={handleScrollToCollections}
                className="inline-flex items-center justify-center space-x-4 px-16 py-5 bg-black text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-emerald-600 transition-all duration-500 shadow-xl"
              >
                <LogoIcon size="w-5 h-5" variant="light" />
                <span>Composer ma commande</span>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start items-center space-x-8 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Condition</span>
                <span className="text-xs font-bold text-black uppercase">Commande > 500 DHS</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Livraison</span>
                <span className="text-xs font-bold uppercase">Toujours Gratuite (24/48H)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedPack;
