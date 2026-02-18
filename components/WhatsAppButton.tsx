
import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="absolute bottom-full right-0 mb-4 w-64 bg-white p-4 shadow-2xl border border-gray-100 rounded-none animate-bounce-slow">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Conciergerie LE BARON</p>
        <p className="text-[11px] font-medium leading-tight">Besoin d'un conseil ? Un expert vous répond en direct.</p>
        <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"></div>
      </div>
      
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-500 group flex items-center"
        aria-label="Contactez notre conseiller sur WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-[10px] font-bold uppercase tracking-widest ml-0 group-hover:ml-3">
          Conseiller en ligne
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
