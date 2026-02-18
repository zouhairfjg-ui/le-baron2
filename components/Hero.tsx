
import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS, PRODUCTS } from '../constants';
import { Product } from '../types';

interface HeroProps {
  onCtaClick: (product: Product) => void;
  isCtaClicked: boolean;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, isCtaClicked }) => {
  const featuredProduct = PRODUCTS.find(p => p.id === 'bracelet-jonc-precieux')!;

  return (
    <section className="bg-white pt-10 pb-20 border-b hairline-border border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 w-full relative cursor-pointer" onClick={() => onCtaClick(featuredProduct)}>
            <div className="aspect-[4/5] overflow-hidden bg-gray-50 rounded-none shadow-2xl luxury-hover relative group">
              <img 
                src="https://res.cloudinary.com/dxstmm6mh/image/upload/v1771195867/bracelet-jonc-dor-vue-2_ss1uqq.png" 
                alt="Bracelet Jonc Acier Précieux - LE BARON" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none"></div>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-[0.6em] block">La Pièce Maîtresse</span>
              <h1 className="text-4xl md:text-6xl font-cinzel font-bold leading-tight tracking-tight text-black">L'Élégance Masculine</h1>
              <p className="text-gray-400 text-[10px] font-light tracking-[0.3em] uppercase italic">Raffinement sans compromis au Maroc.</p>
              
              <div className="flex items-baseline space-x-6 pt-2">
                <span className="text-5xl font-extralight text-black tracking-tighter">{featuredProduct.price} DHS</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-[0.2em]">Prix Exclusif</span>
                  <span className="text-[8px] text-gray-300 uppercase tracking-widest italic">Livraison Offerte</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {[
                "Acier Chirurgical 316L & Finitions Précieuses",
                "Expédition Express Partout au Maroc",
                "Inspection à la Livraison"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-black/70">
                  <div className="w-1 h-1 bg-emerald-600"></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button 
                onClick={() => onCtaClick(featuredProduct)}
                className={`w-full block text-center py-6 bg-black text-white font-bold uppercase tracking-[0.5em] text-[11px] transition-all duration-700 shadow-2xl active:scale-95 hover:bg-emerald-800 ${
                  !isCtaClicked ? 'hover:scale-[1.03] hover:brightness-110' : ''
                }`}
              >
                Découvrir la Collection
              </button>
              <p className="text-center text-[8px] text-gray-300 mt-4 uppercase tracking-[0.4em]">Paiement Cash à la réception — Expédition 24/48H</p>
            </div>

            <div className="pt-8 border-t hairline-border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                 {[...Array(5)].map((_, star) => (
                    <Star key={star} size={8} fill="currentColor" className="text-black" />
                  ))}
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] ml-2 text-gray-300">Prestige & Satisfaction</span>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {REVIEWS.slice(0, 1).map((review, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-xs text-black italic font-light leading-relaxed tracking-wide">"{review.comment}"</p>
                    <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-emerald-600">— {review.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
