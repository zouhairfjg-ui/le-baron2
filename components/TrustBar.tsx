
import React from 'react';
import { Truck, ShieldCheck, Banknote } from 'lucide-react';

const TrustBar: React.FC = () => {
  const items = [
    {
      icon: <Truck size={32} className="stroke-1" />,
      title: "Livraison Rapide",
      desc: "Expédition partout au Maroc sous 24h à 48h.",
    },
    {
      icon: <Banknote size={32} className="stroke-1" />,
      title: "Paiement Cash",
      desc: "Ne payez que lorsque vous recevez votre colis.",
    },
    {
      icon: <ShieldCheck size={32} className="stroke-1" />,
      title: "Qualité Garantie",
      desc: "Contrôle rigoureux sur chaque article expédié.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif uppercase tracking-widest">Pourquoi Choisir LE BARON ?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-6">
              <div className="text-emerald-600 bg-emerald-50 w-20 h-20 flex items-center justify-center rounded-full border border-emerald-100">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium uppercase tracking-widest">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
