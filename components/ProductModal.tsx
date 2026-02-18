
import React, { useState } from 'react';
import { X, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  selectedVariant?: string;
}

const HERMES_VARIANT_IMAGES: Record<string, string> = {
  'Boucle Or': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
  'Boucle Argent': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
  'Boucle Noir': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png'
};

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, selectedVariant }) => {
  const [activeVariant, setActiveVariant] = useState(selectedVariant);

  const displayImage = (product.id === 'belt-hermes' && activeVariant) 
    ? HERMES_VARIANT_IMAGES[activeVariant] || product.image 
    : product.image;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-8 duration-700 rounded-none">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 aspect-square md:aspect-auto overflow-hidden">
            <img 
              src={displayImage} 
              alt={product.name} 
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">Exclusivité LE BARON</span>
                <h2 className="text-2xl md:text-4xl font-cinzel font-bold tracking-tight text-black">{product.name}</h2>
                {activeVariant && (
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-2 block italic">Sélection : {activeVariant}</span>
                )}
              </div>

              <div className="flex items-baseline space-x-4">
                <span className="text-3xl font-extralight tracking-tighter text-black">{product.price} DHS</span>
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Stock Limité</span>
              </div>

              <p className="text-gray-500 text-sm font-light leading-relaxed tracking-wide">
                {product.description || "Un accessoire d'exception conçu pour l'homme moderne qui ne fait aucun compromis sur l'élégance et la qualité des matériaux."}
              </p>

              {product.variants && (
                <div className="space-y-4 pt-2">
                  <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-300">Variante souhaitée</span>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setActiveVariant(v)}
                        className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all duration-500 ${
                          activeVariant === v 
                            ? 'border-black bg-black text-white shadow-lg translate-y-[-1px]' 
                            : 'border-gray-100 text-gray-300 hover:border-black hover:text-black'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4 pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('order');
                    if (el) {
                      onClose();
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-5 bg-[#047857] text-white font-bold uppercase tracking-[0.4em] text-[11px] transition-all duration-500 shadow-md hover:bg-emerald-900 flex items-center justify-center space-x-3 group"
                >
                  <ShoppingBag size={16} className="transition-transform group-hover:scale-110" />
                  <span>Ajouter au Panier</span>
                </button>
                <p className="text-center text-[8px] text-gray-400 uppercase tracking-widest italic">
                  Expédition express gratuite partout au Maroc
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-6 border-t hairline-border border-gray-100">
                <div className="flex items-center space-x-3 text-[9px] uppercase tracking-widest font-bold text-gray-500">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Qualité Certifiée</span>
                </div>
                <div className="flex items-center space-x-3 text-[9px] uppercase tracking-widest font-bold text-gray-500">
                  <Truck size={14} className="text-emerald-600" />
                  <span>Livraison 24/48h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;