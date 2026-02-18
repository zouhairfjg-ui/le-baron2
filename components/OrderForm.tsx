
import React, { useState } from 'react';
import { Truck, Medal, Banknote, AlertTriangle, MessageCircle, Phone, Lock, CheckCircle2, Mail } from 'lucide-react';
import { MOROCCO_CITIES, PHONE_NUMBER, WHATSAPP_LINK } from '../constants';
import Logo, { LogoIcon } from './Logo';
import { Product } from '../types';

interface OrderFormProps {
  product: Product;
}

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx9c5ZjTTpNb9ruKUNPWTmkF3x8iDtFW4u478YoRbd6QH1H1H7MyJScu2gyr5dBKVDL/exec';

const OrderForm: React.FC<OrderFormProps> = ({ product }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: 'Casablanca',
    address: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const originalPrice = product.price;
  const DISCOUNT_THRESHOLD = 500;
  const DISCOUNT_RATE = 0.15;

  const isDiscountApplied = originalPrice > DISCOUNT_THRESHOLD;
  const discountAmount = isDiscountApplied ? Math.round(originalPrice * DISCOUNT_RATE) : 0;
  const finalPrice = originalPrice - discountAmount;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      phone: formData.phone,
      selectedProduct: product.name,
      totalAmount: finalPrice.toString(),
    };

    const searchParams = new URLSearchParams();
    for (const key in payload) {
      searchParams.append(key, (payload as any)[key]);
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: searchParams,
      });
      
      if (!response.ok) {
        throw new Error(`Erreur de connexion au serveur : ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();

      if (responseData.result === 'success') {
        setSubmitted(true);
        const orderSection = document.getElementById('order');
        if (orderSection) {
          const headerOffset = 100;
          const elementPosition = orderSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        console.error('Erreur retournée par le script Google:', responseData.message);
        throw new Error(`Le serveur a rencontré une erreur lors de l'enregistrement : ${responseData.message || 'Réponse invalide du serveur.'}`);
      }
    } catch (error) {
      console.error('Erreur détaillée lors de la soumission de la commande:', error);
      const errorMessage = `Une erreur technique est survenue. Votre commande n'a pas pu être validée. Veuillez réessayer ou contacter le support via WhatsApp.`;
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-[60vh] flex items-center justify-center px-4 py-16 border hairline-border border-gray-100 shadow-2xl">
        <div className="max-w-2xl w-full text-center space-y-12 animate-in zoom-in duration-1000">
          <div className="relative inline-block">
            <div className="w-24 h-24 border hairline-border border-emerald-600 text-emerald-600 rounded-full flex items-center justify-center mx-auto bg-emerald-50/30">
              <CheckCircle2 size={40} className="animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 bg-black text-white p-2 rounded-full shadow-lg">
              <Medal size={16} />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-black uppercase tracking-[0.2em]">
              Commande Confirmée
            </h3>
            <div className="flex flex-col items-center">
              <Logo className="h-8 opacity-40 scale-75" />
              <p className="text-gray-400 text-[8px] font-bold uppercase tracking-[0.4em] mt-2">Maison Le Baron — Service Excellence</p>
            </div>
          </div>

          <div className="max-w-md mx-auto bg-gray-50/50 border hairline-border border-gray-100 p-10 space-y-6">
             <div className="space-y-6 text-left">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-emerald-600 border-b hairline-border border-emerald-100 pb-4">Récapitulatif de Livraison & Paiement</p>
              
              <div className="space-y-3">
                  <div className="flex justify-between">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Destinataire</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-black text-right">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Destination</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-black text-right">{formData.city}</span>
                  </div>
                  <div className="flex justify-between">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Livraison estimée</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-black text-right">24 À 48 HEURES</span>
                  </div>
                  <div className="flex justify-between">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Contact</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-black text-right">{formData.phone}</span>
                  </div>
              </div>

              <div className="space-y-3 pt-4 border-t hairline-border border-gray-200">
                  <div className="flex justify-between">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">{product.name}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-black text-right">{originalPrice} DHS</span>
                  </div>
                  {isDiscountApplied && (
                      <div className="flex justify-between">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-600 font-bold">Réduction Prestige (15%)</span>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 text-right">- {discountAmount} DHS</span>
                      </div>
                  )}
              </div>

              <div className="flex justify-between items-baseline pt-4 border-t-2 hairline-border border-black">
                  <span className="text-sm uppercase tracking-[0.2em] font-bold">Total à la livraison</span>
                  <span className="text-2xl font-cinzel font-bold text-black text-right">{finalPrice} DHS</span>
              </div>
            </div>
            
            <p className="text-[9px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest text-center pt-4">
              Notre conciergerie vous contactera sous peu pour confirmer l'expédition.
            </p>
          </div>

          <div className="pt-6 flex flex-col items-center space-y-8">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 px-14 py-6 bg-black text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-emerald-800 transition-all shadow-2xl group active:scale-95"
            >
              <MessageCircle size={18} className="transition-transform group-hover:rotate-12" />
              <span>Suivre via Conciergerie WhatsApp</span>
            </a>
            <button 
              onClick={() => { window.location.href = '/'; }}
              className="text-gray-300 text-[8px] uppercase tracking-[0.6em] font-bold hover:text-black transition-colors border-b hairline-border border-transparent hover:border-black pb-1"
            >
              Découvrir d'autres pièces
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="bg-black py-4 px-6 flex items-center justify-center space-x-4">
        <AlertTriangle size={14} className="text-emerald-500 animate-pulse" />
        <p className="text-white text-[9px] font-bold uppercase tracking-[0.4em]">
          Stock d'exception : Disponibilité limitée pour cette collection
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 border hairline-border border-gray-100 shadow-2xl space-y-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/50 -rotate-45 translate-x-16 -translate-y-16 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-4">
            <label className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-300">Coordonnées de l'acquéreur</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <input 
                required
                type="text" 
                placeholder="PRÉNOM"
                className="w-full px-0 py-5 bg-transparent border-b hairline-border border-gray-100 focus:border-black outline-none transition-all text-sm font-semibold tracking-widest placeholder:text-gray-200 uppercase"
                value={formData.firstName}
                onChange={(e) => { if (error) setError(null); setFormData({...formData, firstName: e.target.value}); }}
              />
              <input 
                required
                type="text" 
                placeholder="NOM DE FAMILLE"
                className="w-full px-0 py-5 bg-transparent border-b hairline-border border-gray-100 focus:border-black outline-none transition-all text-sm font-semibold tracking-widest placeholder:text-gray-200 uppercase"
                value={formData.lastName}
                onChange={(e) => { if (error) setError(null); setFormData({...formData, lastName: e.target.value}); }}
              />
            </div>
             <input 
                required
                type="email" 
                placeholder="ADRESSE E-MAIL"
                className="w-full px-0 py-5 bg-transparent border-b hairline-border border-gray-100 focus:border-black outline-none transition-all text-sm font-semibold tracking-widest placeholder:text-gray-200 uppercase"
                value={formData.email}
                onChange={(e) => { if (error) setError(null); setFormData({...formData, email: e.target.value}); }}
              />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-300">Ville de livraison</label>
              <div className="relative">
                <select 
                  className="w-full px-0 py-5 bg-transparent border-b hairline-border border-gray-100 focus:border-black outline-none transition-all text-sm font-semibold tracking-widest appearance-none cursor-pointer uppercase"
                  value={formData.city}
                  onChange={(e) => { if (error) setError(null); setFormData({...formData, city: e.target.value}); }}
                >
                  {MOROCCO_CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                  <Truck size={12} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-300">Numéro de Contact Direct</label>
              <input 
                required
                type="tel" 
                placeholder="06 -- -- -- --"
                className="w-full px-0 py-5 bg-transparent border-b hairline-border border-gray-100 focus:border-black outline-none transition-all text-sm font-semibold tracking-widest placeholder:text-gray-200"
                value={formData.phone}
                onChange={(e) => { if (error) setError(null); setFormData({...formData, phone: e.target.value}); }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-300">Adresse Résidentielle Précise</label>
            <textarea 
              required
              rows={1}
              placeholder="RUE, QUARTIER, RÉSIDENCE..."
              className="w-full px-0 py-5 bg-transparent border-b hairline-border border-gray-100 focus:border-black outline-none transition-all text-sm font-semibold tracking-widest placeholder:text-gray-200 resize-none uppercase"
              value={formData.address}
              onChange={(e) => { if (error) setError(null); setFormData({...formData, address: e.target.value}); }}
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50/50 p-6 my-8 text-center border hairline-border border-red-200 animate-in fade-in duration-500">
            <div className="flex justify-center items-center space-x-3">
              <AlertTriangle size={18} className="text-red-500" />
              <p className="text-[11px] font-semibold tracking-wide text-red-800">{error}</p>
            </div>
          </div>
        )}

        <div className="bg-gray-50/50 p-10 space-y-6 border hairline-border border-gray-100">
          <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-gray-400">
            <span>{product.name}</span>
            <span className="text-black font-bold tracking-tighter">{originalPrice} DHS</span>
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-emerald-600 font-bold">
            <span>Service Logistique Prestige</span>
            <span className="tracking-widest">OFFERT</span>
          </div>
          {isDiscountApplied && (
            <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-emerald-600 font-bold border-t hairline-border border-emerald-100 pt-4">
              <span>Offre Prestige (-15%)</span>
              <span className="tracking-widest">- {discountAmount} DHS</span>
            </div>
          )}
          <div className="h-px bg-gray-200/50"></div>
          <div className="flex justify-between text-2xl font-cinzel font-bold text-black">
            <span className="tracking-[0.2em]">TOTAL</span>
            <span className="tracking-tighter">{finalPrice} DHS</span>
          </div>
        </div>

        <div className="space-y-8">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-7 bg-black text-white font-bold uppercase tracking-[0.5em] text-[11px] hover:bg-emerald-900 transition-all duration-700 shadow-2xl disabled:bg-gray-200 disabled:cursor-not-allowed active:scale-[0.98] flex items-center justify-center space-x-5"
          >
            {isSubmitting ? (
              'Authentification de la commande...'
            ) : (
              <>
                <LogoIcon size="w-6 h-6" variant="light" />
                <span>Valider mon acquisition</span>
              </>
            )}
          </button>
          <div className="flex items-center justify-center space-x-3 text-[8px] text-gray-400 uppercase tracking-[0.4em] font-medium">
            <Lock size={10} className="text-emerald-600" />
            <span>Serveur Sécurisé — Règlement à la réception</span>
          </div>
        </div>

        <div className="flex justify-center gap-14 pt-10 border-t hairline-border border-gray-50 transition-all duration-1000">
          <Truck size={22} className="stroke-1 text-emerald-600" />
          <Banknote size={22} className="stroke-1 text-emerald-600" />
          <Medal size={22} className="stroke-1 text-emerald-600" />
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
