
import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const VARIANT_IMAGES: Record<string, string> = {
  // Hermès
  'Boucle Or': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
  'Boucle Argent': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
  'Boucle Noir': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
  // Valentino
  'Boucle Argent Poli Valentino': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197881/t%C3%A9l%C3%A9chargement_2_v2czxd.jpg',
  'Boucle Ruthénium Valentino': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197881/t%C3%A9l%C3%A9chargement_2_v2czxd.jpg',
  'Boucle Or Vintage Valentino': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197881/t%C3%A9l%C3%A9chargement_2_v2czxd.jpg',
  // Goyard
  'Vert Goyard': 'https://i.postimg.cc/FzXfV4N1/goyard-goyardine-saint-sulpice-card-holder-green-1681226177.jpg',
  'Bordeaux Goyard': 'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771194316/Goyard_Burgundy_Goyardine_Leather_Saint-Sulpice_Card_Holder_b3gxoh.jpg',
  'Noir Classique Goyard': 'https://i.postimg.cc/2yT97NqC/goyard-goyardine-saint-sulpice-card-holder-black-tan-1681226065.jpg',
  'Bleu Ciel Goyard': 'https://i.postimg.cc/q7L95bJd/goyard-goyardine-saint-sulpice-card-holder-sky-blue-1681226227.jpg',
  'Jaune Goyard': 'https://i.postimg.cc/k4JAwM1c/goyard-goyardine-saint-sulpice-card-holder-yellow-1681226129.jpg',
  'Gris Goyard': 'https://i.postimg.cc/8z72MvQd/goyard-goyardine-saint-sulpice-card-holder-grey-1681226154.jpg',
  'Blanc Goyard': 'https://i.postimg.cc/W1gJcyJv/goyard-goyardine-saint-sulpice-card-holder-white-1681226084.jpg',
  'Rouge Vif Goyard': 'https://i.postimg.cc/L5K0D6p6/goyard-goyardine-saint-sulpice-card-holder-red-1681226107.jpg',
  // Bracelets
  'Argent Bracelet Jonc Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771193948/bracelet-jonc-argent-vue-1_cnsra4.png',
  'Or Bracelet Jonc Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771195867/bracelet-jonc-dor-vue-2_ss1uqq.png',
  'Noir Bracelet Jonc Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771242817/bracelet-jonc-noir-vue-1_y0kuzq.png',
  'Argent Bracelet Acier Essentiel': 'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771198611/Gemini_Generated_Image_rui5amrui5amrui5_cvfluy.png',
  'Or Bracelet Acier Essentiel': 'https://images.unsplash.com/photo-1620659390204-1a3b11548e2c?q=80&w=800&auto=format&fit=crop',
  'Noir Onyx Bracelet Fil Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771241183/noir_onyx_bracelet_v2o5sc.jpg',
  'Rouge Rubis Bracelet Fil Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771241183/rouge_rubis_bracelet_xpdjyz.jpg',
  'Vert Émeraude Bracelet Fil Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771241182/vert_emeraude_bracelet_t2v9jd.jpg',
  'Bleu Saphir Bracelet Fil Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771241182/bleu_saphir_bracelet_wufedp.jpg',
  'Gris Anthracite Bracelet Fil Précieux': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771241182/gris_anthracite_bracelet_c3xqf3.jpg',
  // Boxers
  'Noir Pack de 3 Boxers Essentiels': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771342516/Sous-v%C3%AAtements_pour_homme___ZARA_France_h9wnxe.jpg',
  'Gris chiné Pack de 3 Boxers Essentiels': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771342516/Sous-v%C3%AAtements_pour_homme___ZARA_France_h9wnxe.jpg',
  'Blanc Pack de 3 Boxers Essentiels': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771342516/Sous-v%C3%AAtements_pour_homme___ZARA_France_h9wnxe.jpg',
};

const VARIANT_STYLES: Record<string, string> = {
  'Boucle Or': 'bg-gradient-to-tr from-amber-200 via-yellow-400 to-amber-500',
  'Boucle Argent': 'bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-100',
  'Boucle Noir': 'bg-neutral-900',
  'Boucle Argent Poli': 'bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-100',
  'Boucle Ruthénium': 'bg-gradient-to-tr from-slate-600 via-slate-800 to-slate-700',
  'Boucle Or Vintage': 'bg-gradient-to-tr from-amber-300 via-yellow-500 to-amber-400',
  'Vert': 'bg-[#006954]',
  'Bordeaux': 'bg-[#741C2C]',
  'Noir Classique': 'bg-black',
  'Bleu Ciel': 'bg-[#60A5FA]',
  'Jaune': 'bg-[#FBBF24]',
  'Gris': 'bg-[#9CA3AF]',
  'Blanc': 'bg-gray-100',
  'Rouge Vif': 'bg-[#EF4444]',
  'Argent': 'bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-100',
  'Or': 'bg-gradient-to-tr from-amber-200 via-yellow-400 to-amber-500',
  'Noir': 'bg-black',
  'Fermoir Argent': 'bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-100',
  'Fermoir Or': 'bg-gradient-to-tr from-amber-200 via-yellow-400 to-amber-500',
  'Fermoir Noir': 'bg-black',
  'Noir Onyx': 'bg-black',
  'Rouge Rubis': 'bg-red-700',
  'Vert Émeraude': 'bg-emerald-700',
  'Bleu Saphir': 'bg-blue-800',
  'Gris Anthracite': 'bg-slate-600',
  'Gris chiné': 'bg-gray-400',
  'Multicolore': 'bg-gradient-to-tr from-slate-400 via-gray-500 to-slate-700',
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tout');
  const [sortOrder, setSortOrder] = useState<'popularity' | 'price-asc' | 'price-desc'>('popularity');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({
    'belt-hermes': 'Boucle Or',
    'belt-valentino': 'Boucle Ruthénium',
    'card-goyard': 'Bordeaux',
    'bracelet-jonc-precieux': 'Or',
    'bracelet-acier-essentiel': 'Argent',
    'bracelet-fil-precieux': 'Noir Onyx',
    'boxer-essentiel-pack': 'Noir',
  });

  const categories = ['Tout', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'Tout' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'popularity':
      default:
        return PRODUCTS.findIndex(p => p.id === a.id) - PRODUCTS.findIndex(p => p.id === b.id);
    }
  });

  const handleVariantSelect = (productId: string, variant: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variant
    }));
  };

  const getProductImage = (product: Product) => {
    const currentVariant = selectedVariants[product.id];
    if (!currentVariant) return product.image;

    let key = '';
    if (product.id === 'belt-valentino') key = `${currentVariant} Valentino`;
    else if (product.id === 'belt-hermes') key = currentVariant;
    else if (product.id === 'card-goyard') key = `${currentVariant} Goyard`;
    else if (product.id === 'bracelet-jonc-precieux') key = `${currentVariant} Bracelet Jonc Précieux`;
    else if (product.id === 'bracelet-acier-essentiel') key = `${currentVariant} Bracelet Acier Essentiel`;
    else if (product.id === 'bracelet-fil-precieux') key = `${currentVariant} Bracelet Fil Précieux`;
    else if (product.id === 'boxer-essentiel-pack') key = `${currentVariant} Pack de 3 Boxers Essentiels`;

    return VARIANT_IMAGES[key] || product.image;
  };

  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[9px] md:text-[11px] uppercase tracking-[0.5em] transition-all duration-700 pb-4 border-b-2 ${
                selectedCategory === cat 
                  ? 'border-black text-black font-bold' 
                  : 'border-transparent text-gray-300 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 pt-6 border-t hairline-border border-gray-100">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">Trier par:</span>
          <button onClick={() => setSortOrder('popularity')} className={`text-[9px] uppercase tracking-[0.3em] p-2 transition-colors ${sortOrder === 'popularity' ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}>
              Popularité
          </button>
          <button onClick={() => setSortOrder('price-asc')} className={`text-[9px] uppercase tracking-[0.3em] p-2 transition-colors ${sortOrder === 'price-asc' ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}>
              Prix Croissant
          </button>
          <button onClick={() => setSortOrder('price-desc')} className={`text-[9px] uppercase tracking-[0.3em] p-2 transition-colors ${sortOrder === 'price-desc' ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}>
              Prix Décroissant
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {sortedProducts.map((product) => {
          const currentVariant = selectedVariants[product.id];
          const hasSelectableVariants = product.variants && ['belt-hermes', 'belt-valentino', 'card-goyard', 'bracelet-jonc-precieux', 'bracelet-acier-essentiel', 'bracelet-fil-precieux', 'boxer-essentiel-pack'].includes(product.id);
          
          return (
            <div key={product.id} className="group flex flex-col animate-in fade-in duration-1000">
              <div 
                className="relative aspect-[4/5] mb-8 overflow-hidden bg-gray-50 border hairline-border border-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700"
                onClick={() => onProductClick(product)}
              >
                <img 
                  src={getProductImage(product)} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-[filter,transform] duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] font-bold tracking-widest uppercase text-black border hairline-border border-gray-100">
                  Édition Limitée
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-700">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductClick(product);
                    }}
                    className="w-full block text-center bg-black text-white py-5 text-[9px] uppercase tracking-[0.5em] font-bold shadow-2xl hover:bg-emerald-900 transition-all active:scale-95"
                  >
                    Détails de la pièce
                  </button>
                </div>
              </div>

              {hasSelectableVariants && (
                <div className="mb-6 flex justify-center flex-wrap gap-x-4 gap-y-3">
                  {product.variants!.map(v => (
                    <button 
                      key={v} 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVariantSelect(product.id, v);
                      }}
                      className={`relative w-6 h-6 rounded-full transition-all duration-500 ${
                        currentVariant === v
                          ? 'ring-1 ring-black ring-offset-4 scale-110'
                          : 'ring-1 ring-gray-100 ring-offset-0 hover:ring-gray-300'
                      } ${VARIANT_STYLES[v] || 'bg-gray-200'}`}
                      title={v}
                    >
                    </button>
                  ))}
                </div>
              )}
              
              <div className="space-y-4 px-2 flex-1 cursor-pointer" onClick={() => onProductClick(product)}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-black group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                  <span className="text-lg font-light tracking-tighter text-black">{product.price} DHS</span>
                </div>
                
                <p className="text-[10px] text-gray-400 font-light leading-relaxed tracking-wide italic line-clamp-2">
                  {product.description}
                </p>
                
                <div className="pt-4 flex items-center justify-between border-t hairline-border border-gray-50">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={8} fill="currentColor" className="text-black" />
                    ))}
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-600 flex items-center">
                    Voir la pièce <ChevronRight size={10} className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
