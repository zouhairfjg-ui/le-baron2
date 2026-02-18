
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Truck, Star, Check, Banknote, ShoppingBag, ChevronRight, Package, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import OrderForm from './OrderForm';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const VARIANT_IMAGES: Record<string, string> = {
  // Valentino (Focus Unboxing)
  'Boucle Ruthénium Valentino': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197881/t%C3%A9l%C3%A9chargement_2_v2czxd.jpg',
  'Boucle Argent Poli Valentino': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197881/t%C3%A9l%C3%A9chargement_2_v2czxd.jpg',
  'Boucle Or Vintage Valentino': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197881/t%C3%A9l%C3%A9chargement_2_v2czxd.jpg',
  // Hermès
  'Boucle Or': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
  'Boucle Argent': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
  'Boucle Noir': 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
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

const VARIANT_GALLERY_IMAGES: Record<string, string[]> = {
  'Argent Bracelet Jonc Précieux': [
    'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771193948/bracelet-jonc-argent-vue-1_cnsra4.png',
    'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771194623/bracelet-jonc-argent-vue-2_u9va4l.png',
    'https://images.unsplash.com/photo-1586528116311-06924151d145?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618001794498-502d354c8651?q=80&w=800&auto=format&fit=crop',
  ],
  'Or Bracelet Jonc Précieux': [
    'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771195867/bracelet-jonc-dor-vue-2_ss1uqq.png',
    'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771195867/bracelet-jonc-dor-vue-2_ss1uqq.png',
  ],
  'Noir Bracelet Jonc Précieux': [
    'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771242817/bracelet-jonc-noir-vue-1_y0kuzq.png',
    'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771242817/bracelet-jonc-noir-vue-2_b1qf8a.png',
  ],
};


const ProductPage: React.FC<ProductPageProps> = ({ product, onBack }) => {
  const [activeVariant, setActiveVariant] = useState(product.variants ? product.variants[0] : undefined);
  const [currentPrice, setCurrentPrice] = useState(product.price);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);
  
  const variantKey = getVariantKey(activeVariant);
  const displayImage = VARIANT_IMAGES[variantKey] || product.image;
  const displayGalleryImages = VARIANT_GALLERY_IMAGES[variantKey] || product.images;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleScroll = () => {
      const heroSectionEnd = document.getElementById('product-details')?.offsetHeight || 600;
      setIsScrolledPastHero(window.scrollY > heroSectionEnd);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [product]);

  useEffect(() => {
    if (activeVariant && product.variantPrices && product.variantPrices[activeVariant]) {
      setCurrentPrice(product.variantPrices[activeVariant]);
    } else {
      setCurrentPrice(product.price);
    }
  }, [activeVariant, product]);
  
  useEffect(() => {
    setActiveImage(displayImage);
  }, [displayImage]);


  function getVariantKey(v: string | undefined) {
    if (!v) return '';
    if (product.id === 'belt-valentino') return `${v} Valentino`;
    if (product.id === 'card-goyard') return `${v} Goyard`;
    if (product.id === 'bracelet-jonc-precieux') return `${v} Bracelet Jonc Précieux`;
    if (product.id === 'bracelet-acier-essentiel') return `${v} Bracelet Acier Essentiel`;
    if (product.id === 'bracelet-fil-precieux') return `${v} Bracelet Fil Précieux`;
    if (product.id === 'boxer-essentiel-pack') return `${v} Pack de 3 Boxers Essentiels`;
    return v;
  }

  const scrollToOrder = () => {
    const el = document.getElementById('order');
    if (el) {
       const headerOffset = 100;
       const elementPosition = el.getBoundingClientRect().top;
       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const productForOrder: Product = {
    ...product,
    price: currentPrice,
    name: activeVariant ? `${product.name} (${activeVariant})` : product.name,
  };

  const showMaterialStyleTags = ['Bracelets', 'Boxers'].includes(product.category);

  const getFeatureText = () => {
    if (product.id === 'card-goyard') return 'Toile Goyardine Authentique';
    if (product.id === 'card-lv-damier') return 'Toile Damier Graphite Signature';
    if (product.id === 'card-lv') return 'Cuir Taïga ou Toile Monogram';
    if (product.id.includes('bracelet')) {
        if (product.id === 'bracelet-fil-precieux') return 'Fil de Soie Tressé & Perle d\'Acier';
        return 'Acier Chirurgical 316L Inoxydable';
    }
    if (product.category === 'Boxers') return 'Coton Stretch Ultra-Confort';
    return 'Boucle Ruthénium Inoxydable';
  }

  const getMaterialTag = () => {
    if (product.category === 'Bracelets') {
        if (product.id === 'bracelet-fil-precieux') return 'Fil de Soie & Acier';
        const color = activeVariant || product.variants?.[0];
        if (color === 'Or') return 'Acier PVD Or 18K';
        if (color === 'Noir') return 'Acier PVD Noir Mat';
        return 'Acier Chirurgical';
    }
    if (product.category === 'Boxers') return 'Coton & Élasthanne';
    return 'Matière Noble'; // Fallback
  };

  const getStyleTag = () => {
      if (product.id === 'bracelet-jonc-precieux') return 'Design Épuré';
      if (product.id === 'bracelet-gourmette-acier') return 'Maille Gourmette';
      if (product.id === 'bracelet-acier-tresse') return 'Design Tressé';
      if (product.id === 'bracelet-maille-venitienne') return 'Maille Vénitienne';
      if (product.id === 'bracelet-acier-essentiel') return 'Design Essentiel';
      if (product.id === 'bracelet-fil-precieux') return 'Minimaliste & Unisexe';
      if (product.category === 'Boxers') return 'Style Iconique';
      return 'Pièce Unique'; // Fallback
  };
  
  const galleryImages = (displayGalleryImages && displayGalleryImages.length > 0
    ? displayGalleryImages
    : [
        displayImage,
        'https://images.unsplash.com/photo-1586528116311-06924151d145?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618001794498-502d354c8651?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
      ]
  ).slice(0, 4);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-all group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-2" />
          <span>Retour aux Collections</span>
        </button>
      </div>

      <div id="product-details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          
          {/* GAUCHE : Galerie Photo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 border hairline-border border-gray-100 group shadow-sm">
              <img 
                key={activeImage}
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
              />
              <div className="absolute top-6 left-6 flex flex-col space-y-2">
                {showMaterialStyleTags ? (
                  <>
                    <span className="bg-black text-white px-4 py-2 text-[8px] font-bold tracking-[0.4em] uppercase shadow-xl">
                        {getMaterialTag()}
                    </span>
                    <span className="bg-emerald-600 text-white px-4 py-2 text-[8px] font-bold tracking-[0.4em] uppercase shadow-xl">
                        {getStyleTag()}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="bg-black text-white px-4 py-2 text-[8px] font-bold tracking-[0.4em] uppercase shadow-xl">
                      {
                        product.id === 'card-goyard' ? 'Maison Goyard' 
                        : product.id.startsWith('card-lv') ? 'Maison Louis Vuitton'
                        : 'Artisanat Garavani'
                      }
                    </span>
                    <span className="bg-emerald-600 text-white px-4 py-2 text-[8px] font-bold tracking-[0.4em] uppercase shadow-xl">
                      Coffret Inclus
                    </span>
                  </>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square bg-gray-50 border-2 overflow-hidden group transition-all duration-300 ${
                    activeImage === img ? 'border-black' : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      activeImage === img ? 'opacity-100 scale-100' : 'opacity-70 scale-105 group-hover:opacity-100 group-hover:scale-100'
                    }`}
                    alt={`${product.name} vue ${idx + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* DROITE : Informations Produit */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-4">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                   {[...Array(5)].map((_, star) => (
                      <Star key={star} size={10} fill="currentColor" className="text-black" />
                    ))}
                    <span className="text-[9px] font-bold uppercase tracking-[0.5em] ml-3 text-emerald-600">Best-seller Maison</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold tracking-tight text-black leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4">
                  <div className="h-px w-8 bg-black/20"></div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-[0.5em] font-medium">
                    {product.category} • {
                      showMaterialStyleTags 
                        ? (product.category === 'Bracelets' ? 'Joaillerie Fine' : 'Confort Essentiel')
                        : product.id === 'card-goyard' ? 'Maison Goyard' 
                        : product.id.startsWith('card-lv') ? 'Maison Louis Vuitton'
                        : 'Artisanat Garavani'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-baseline space-x-6">
                <span className="text-5xl font-extralight tracking-tighter text-black">{currentPrice} DHS</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-[0.2em]">Paiement à la livraison</span>
                  <span className="text-[8px] text-gray-300 uppercase tracking-widest italic">Livraison VIP Offerte</span>
                </div>
              </div>

              <div className="space-y-8 text-gray-500 text-sm font-light leading-relaxed tracking-wide">
                <p className="border-l-2 border-gray-100 pl-6 italic">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50/50 border hairline-border border-gray-100">
                    <Sparkles size={14} className="text-emerald-600" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black">{getFeatureText()}</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50/50 border hairline-border border-gray-100">
                    <Package size={14} className="text-emerald-600" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black">Livré avec Écrin & Certificat</span>
                  </div>
                </div>
              </div>

              {product.variants && (
                <div className="space-y-6 pt-2">
                  <div className="flex justify-between items-center border-b hairline-border border-gray-100 pb-4">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-300">
                      {product.id === 'card-goyard' || product.category === 'Boxers' ? 'Couleur' : 'Finition'}
                    </span>
                    <span className="text-[10px] text-black font-bold uppercase tracking-[0.3em]">{activeVariant}</span>
                  </div>
                  <div className={`grid gap-3 ${product.variants.length > 4 ? 'grid-cols-4' : (product.variants.length > 2 ? 'grid-cols-3' : 'grid-cols-2')}`}>
                    {product.variants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setActiveVariant(v)}
                        className={`py-4 text-[9px] uppercase tracking-widest font-bold border transition-all duration-500 ${
                          activeVariant === v 
                            ? 'bg-black text-white border-black shadow-lg -translate-y-[2px]' 
                            : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-black'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-6 pt-6">
                <button 
                  onClick={scrollToOrder}
                  className="w-full py-8 bg-black text-white font-bold uppercase tracking-[0.6em] text-[11px] transition-all duration-700 shadow-2xl hover:bg-emerald-900 flex items-center justify-center space-x-5 group overflow-hidden relative"
                >
                  <ShoppingBag size={18} className="z-10" />
                  <span className="z-10">Finaliser l'Acquisition</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                </button>
                
                <div className="flex justify-center space-x-8 text-[8px] text-gray-400 uppercase tracking-[0.4em] font-bold">
                  <div className="flex items-center space-x-2">
                    <Truck size={12} />
                    <span>Maroc Express</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Banknote size={12} />
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="order" className="bg-gray-50 py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Étape Finale</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight">Finaliser votre achat</h2>
            <p className="text-gray-500 mt-4 text-sm font-light">Complétez les informations ci-dessous pour une livraison rapide de votre <span className="font-bold text-black">{productForOrder.name}</span>.</p>
          </div>
          <OrderForm product={productForOrder} />
        </div>
      </div>

      {/* Barre de commande flottante */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t hairline-border border-gray-100 p-4 transition-transform duration-500 ${isScrolledPastHero ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={activeImage} alt={product.name} className="w-12 h-12 object-cover border hairline-border border-gray-100 hidden sm:block" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest">{product.name}{activeVariant ? <span className="text-gray-400"> / {activeVariant}</span> : ''}</p>
              <p className="text-lg font-bold tracking-tighter">{currentPrice} DHS</p>
            </div>
          </div>
          <button 
            onClick={scrollToOrder}
            className="flex-shrink-0 px-8 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center space-x-3 shadow-xl hover:bg-emerald-800 transition-colors"
          >
            <ShoppingBag size={14} />
            <span>Commander</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
