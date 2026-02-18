
import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Shield, FileText } from 'lucide-react';

type LegalSection = 'faq' | 'privacy' | 'terms';

interface LegalPageProps {
  initialSection: LegalSection;
  onBack: () => void;
}

const FAQContent: React.FC = () => (
  <div className="space-y-12">
    <div className="space-y-6">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">Quels sont les délais de livraison ?</h3>
      <p>La livraison est assurée par des services express partenaires. Le délai est de 24h à 48h jours ouvrables pour les grandes villes, et peut aller jusqu'à 72h pour les localités plus éloignées. Chaque commande est traitée avec la plus grande priorité.</p>
    </div>
    <div className="space-y-6">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">Comment puis-je payer ma commande ?</h3>
      <p>Nous offrons exclusivement le paiement en espèces à la livraison. Vous ne payez qu'après avoir inspecté votre article et confirmé sa conformité. C'est notre gage de confiance et de transparence.</p>
    </div>
    <div className="space-y-6">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">Proposez-vous des retours ou des échanges ?</h3>
      <p>Absolument. La satisfaction de nos clients est primordiale. Si l'article ne vous convient pas au moment de la livraison, vous pouvez le refuser sans aucun frais. Pour tout échange après livraison, veuillez contacter notre service de conciergerie dans les 24h suivant la réception.</p>
    </div>
    <div className="space-y-6">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">Comment puis-je suivre ma commande ?</h3>
      <p>Une fois votre commande expédiée, notre service de conciergerie vous contactera personnellement par téléphone ou WhatsApp pour vous fournir les détails du suivi et confirmer une heure de livraison qui vous convient.</p>
    </div>
     <div className="space-y-6">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">La qualité est-elle garantie ?</h3>
      <p>Chaque pièce de notre collection est rigoureusement sélectionnée pour sa qualité de fabrication et ses matériaux nobles. Nous garantissons une excellence qui se voit et qui dure. Votre satisfaction à la livraison est notre meilleure garantie.</p>
    </div>
  </div>
);

const PrivacyPolicyContent: React.FC = () => (
  <div className="space-y-8">
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">1. Collecte des Informations</h3>
      <p>Nous collectons les informations que vous nous fournissez directement lors de votre commande : nom, prénom, adresse de livraison, numéro de téléphone et adresse e-mail. Ces données sont essentielles au traitement et à l'acheminement de votre acquisition.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">2. Utilisation des Informations</h3>
      <p>Vos informations personnelles sont utilisées exclusivement pour :</p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li>Traiter, confirmer et expédier votre commande.</li>
        <li>Communiquer avec vous concernant la livraison.</li>
        <li>Assurer le service après-vente via notre conciergerie.</li>
      </ul>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">3. Partage des Informations</h3>
      <p>Maison LE BARON s'engage à ne jamais vendre, louer ou céder vos données personnelles à des tiers à des fins commerciales. Seuls nos partenaires logistiques reçoivent les informations nécessaires (nom, adresse, téléphone) à la bonne exécution de la livraison.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">4. Sécurité des Données</h3>
      <p>Nous mettons en œuvre des mesures de sécurité techniques pour protéger vos informations contre l'accès, la modification ou la divulgation non autorisée. Notre processus de commande est conçu pour garantir la plus grande confidentialité.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">5. Vos Droits</h3>
      <p>Conformément à la loi en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, veuillez contacter notre service de conciergerie.</p>
    </div>
  </div>
);

const TermsOfServiceContent: React.FC = () => (
   <div className="space-y-8">
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">1. Objet</h3>
      <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la Maison LE BARON et tout client passant commande sur le présent site. Toute commande implique l'acceptation pleine et entière des présentes CGV.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">2. Produits</h3>
      <p>Nos produits sont des articles de prestige sélectionnés avec le plus grand soin. Ils sont proposés dans la limite des stocks disponibles. Les photographies se veulent les plus fidèles possibles mais ne peuvent assurer une similitude parfaite avec le produit offert.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">3. Commande et Paiement</h3>
      <p>Le processus de commande se finalise par une confirmation téléphonique de notre service de conciergerie. Les prix sont indiqués en Dirham Marocain (DHS) toutes taxes comprises. Le paiement s'effectue exclusivement en espèces au moment de la livraison.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">4. Livraison</h3>
      <p>La livraison est gratuite sur tout le territoire du Maroc. Les délais sont de 24h à 72h. Le client s'engage à fournir une adresse de livraison valide et à être disponible pour réceptionner la commande.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">5. Droit de Rétractation et Garantie</h3>
      <p>Le client a le droit d'inspecter le produit à la livraison. Si le produit n'est pas conforme ou ne lui convient pas, il peut le refuser sur-le-champ sans aucun frais. C'est notre garantie "Satisfait ou Remboursé" immédiate.</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold font-cinzel tracking-wider">6. Droit Applicable</h3>
      <p>Toutes les clauses figurant dans les présentes CGV, ainsi que toutes les opérations d'achat et de vente qui y sont visées, seront soumises au droit marocain.</p>
    </div>
  </div>
);

const LegalPage: React.FC<LegalPageProps> = ({ initialSection, onBack }) => {
  const [activeSection, setActiveSection] = useState<LegalSection>(initialSection);

  const sections = {
    faq: { 
      label: 'FAQ', 
      icon: <HelpCircle className="w-4 h-4 mr-3" />,
      title: 'Foire Aux Questions',
      content: <FAQContent />
    },
    privacy: { 
      label: 'Confidentialité', 
      icon: <Shield className="w-4 h-4 mr-3" />,
      title: 'Politique de Confidentialité',
      content: <PrivacyPolicyContent />
    },
    terms: { 
      label: 'Conditions', 
      icon: <FileText className="w-4 h-4 mr-3" />,
      title: 'Conditions de Service',
      content: <TermsOfServiceContent />
    },
  };

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-all group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-2" />
            <span>Retour</span>
          </button>
        </div>

        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold tracking-tight text-black">
            {sections[activeSection].title}
          </h1>
          <p className="text-gray-400 text-sm font-light tracking-wider">
            Votre confiance est notre priorité. Retrouvez ici toutes les informations sur nos engagements.
          </p>
        </div>

        <div className="border-b hairline-border border-gray-100 mb-16 flex justify-center">
          <div className="flex space-x-4 md:space-x-8">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key as LegalSection)}
                className={`flex items-center text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold py-4 border-b-2 transition-all duration-300 ${
                  activeSection === key 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {sections[key as LegalSection].icon}
                {sections[key as LegalSection].label}
              </button>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed tracking-wide">
          {sections[activeSection].content}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
