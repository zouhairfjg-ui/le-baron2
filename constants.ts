
import { Product, NavItem } from './types';

export const PHONE_NUMBER = '+212 6 64467996';
export const WHATSAPP_LINK = `https://wa.me/212664467996`;

export const MOROCCO_CITIES = [
  'Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Fès', 'Agadir', 'Meknès', 'Oujda', 'Kenitra', 'Tetouan', 'Safi', 'Mohammedia', 'Beni Mellal', 'El Jadida', 'Taza', 'Nador', 'Settat', 'Larache', 'Ksar El Kebir', 'Khemisset', 'Guelmim', 'Berrechid', 'Wad Zem', 'Fquih Ben Salah', 'Taourirt', 'Berkane', 'Sidi Slimane', 'Sidi Kacem', 'Khenifra', 'Tifelt', 'Essaouira', 'Taroudant', 'Ouarzazate'
];

export const REVIEWS = [
  { name: "Ahmed R.", rating: 5, comment: "Qualité exceptionnelle. La ceinture Valentino est une pure merveille, reçue dans son coffret d'origine. Service VIP." },
  { name: "Youssef M.", rating: 5, comment: "Le Pack Gentleman est le meilleur investissement de l'année. Livraison soignée en 24h à Rabat." },
  { name: "Karim L.", rating: 5, comment: "L'élégance à la masculine. Enfin une boutique au Maroc qui propose de la véritable qualité premium." }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'La Maison', href: '#' },
  { label: 'Collections', href: '#collections' },
  { label: 'Commander', href: '#order' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'belt-valentino',
    name: 'Ceinture Valentino Garavani V-Logo',
    price: 380,
    category: 'Ceintures',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197881/t%C3%A9l%C3%A9chargement_2_v2czxd.jpg',
    description: "Affirmez votre style avec l'iconique logo V de Valentino Garavani. Une pièce maîtresse en cuir de veau, symbole d'un luxe audacieux et contemporain.",
    variants: ['Boucle Ruthénium', 'Boucle Argent Poli', 'Boucle Or Vintage'],
  },
  {
    id: 'card-goyard',
    name: 'Porte-cartes Goyard Saint-Sulpice',
    price: 250,
    category: 'Porte-cartes',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771194316/Goyard_Burgundy_Goyardine_Leather_Saint-Sulpice_Card_Holder_b3gxoh.jpg',
    description: "Le porte-cartes Saint-Sulpice est un classique de la Maison Goyard, reconnaissable à sa toile Goyardine et à son design fonctionnel et élégant.",
    variants: ['Bordeaux', 'Noir Classique', 'Vert', 'Bleu Ciel', 'Jaune', 'Gris', 'Blanc', 'Rouge Vif'],
  },
  {
    id: 'belt-hermes',
    name: 'Ceinture Hermès H Classique',
    price: 420,
    category: 'Ceintures',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771201727/Gemini_Generated_Image_wxdc63wxdc63wxdc_n3h7ol.png',
    description: "Iconique et intemporelle, la ceinture Hermès est le symbole du luxe discret et de l'artisanat d'exception. Un must-have pour toute garde-robe.",
    variants: ['Boucle Or', 'Boucle Argent', 'Boucle Noir'],
  },
  {
    id: 'bracelet-jonc-precieux',
    name: 'Bracelet Jonc Acier Précieux',
    price: 249,
    category: 'Bracelets',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771195867/bracelet-jonc-dor-vue-2_ss1uqq.png',
    description: "Un design épuré qui transcende les tendances. Ce bracelet jonc en acier chirurgical 316L, disponible en finitions précieuses, est la signature d'une élégance moderne et assumée.",
    variants: ['Argent', 'Or', 'Noir'],
    variantPrices: { 'Argent': 249, 'Or': 269, 'Noir': 269 },
    images: [
      'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771195867/bracelet-jonc-dor-vue-2_ss1uqq.png',
      'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771193948/bracelet-jonc-argent-vue-1_cnsra4.png',
      'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771242817/bracelet-jonc-noir-vue-1_y0kuzq.png',
    ]
  },
    {
    id: 'bracelet-maille-royale',
    name: 'Bracelet Maille Royale Argent',
    price: 289,
    category: 'Bracelets',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771196395/bracelet-argent-vue-1_rbbjov.png',
    description: "Une maille imposante et un design intemporel. Ce bracelet en acier argenté est une pièce de caractère, parfaite pour affirmer un style audacieux et sophistiqué.",
    images: [
        'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771196395/bracelet-argent-vue-1_rbbjov.png',
        'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771196374/bracelet-argent-vue-2_bypqzf.png',
        'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771196508/bracelet-enti-rement-argent-_moxn4e.png',
    ]
  },
  {
    id: 'bracelet-acier-essentiel',
    name: 'Bracelet Acier Essentiel',
    price: 260,
    category: 'Bracelets',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/q_auto:best,f_auto/v1771198611/Gemini_Generated_Image_rui5amrui5amrui5_cvfluy.png',
    description: "La simplicité rencontre la robustesse. Ce bracelet en acier inoxydable est un essentiel du vestiaire masculin, aussi polyvalent qu'élégant.",
    variants: ['Argent', 'Or'],
  },
  {
    id: 'card-lv',
    name: 'Porte-cartes Louis Vuitton',
    price: 280,
    category: 'Porte-cartes',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771340443/Porte-cartes_Double_Luxe_-_Noir_-_Homme_-_Louis_Vuitton_flq0n4.jpg',
    description: "L'élégance fonctionnelle de Louis Vuitton. Un porte-cartes compact pour organiser vos essentiels avec le raffinement emblématique de la Maison.",
  },
  {
    id: 'bracelet-maille-venitienne',
    name: 'Bracelet Maille Vénitienne Argent',
    price: 249,
    category: 'Bracelets',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771199412/Gemini_Generated_Image_pcshlfpcshlfpcsh_v1dq9f.png',
    description: "Une maille vénitienne classique et un éclat argenté intemporel. Ce bracelet est l'incarnation de la sophistication discrète, un essentiel pour l'homme qui apprécie les détails raffinés.",
  },
  {
    id: 'bracelet-fil-precieux',
    name: 'Bracelet Fil Précieux',
    price: 180,
    category: 'Bracelets',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771241183/noir_onyx_bracelet_v2o5sc.jpg',
    description: "Discret et raffiné, ce bracelet ajustable en fil de soie tressé est orné d'une perle en acier inoxydable. Idéal pour un style subtil ou en accumulation.",
    variants: ['Noir Onyx', 'Rouge Rubis', 'Vert Émeraude', 'Bleu Saphir', 'Gris Anthracite'],
  },
  {
    id: 'bracelet-gourmette-acier',
    name: 'Bracelet Gourmette Acier Iconique',
    price: 189,
    category: 'Bracelets',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771196964/bracelet-vue-de-c-t-_1_ijy3q6.png',
    description: "Une maille gourmette audacieuse et un éclat poli miroir. Ce bracelet en acier inoxydable est une déclaration de style, un classique intemporel qui traverse les modes avec assurance.",
  },
  {
    id: 'bracelet-acier-tresse',
    name: 'Bracelet Acier Tressé Bleu Nuit',
    price: 249,
    category: 'Bracelets',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771249640/Gemini_Generated_Image_9q35f9q35f9q35f9_kmjubi.png',
    description: "Une pièce de caractère qui allie la robustesse de l'acier tressé à un design urbain et contemporain, rehaussé de détails bleu nuit. Parfait pour l'homme qui impose son style.",
  },
  {
    id: 'boxer-essentiel-pack',
    name: 'Pack de 3 Boxers Essentiels',
    price: 179,
    category: 'Boxers',
    image: 'https://res.cloudinary.com/dxstmm6mh/image/upload/v1771342516/Sous-v%C3%AAtements_pour_homme___ZARA_France_h9wnxe.jpg',
    description: "L'essentiel du quotidien, alliant confort et maintien. Ce pack de trois boxers en coton doux est conçu pour un bien-être optimal tout au long de la journée.",
    variants: ['Noir', 'Gris chiné', 'Blanc'],
  },
];
