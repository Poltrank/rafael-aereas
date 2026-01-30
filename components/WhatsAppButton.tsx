
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Olá Rafael, gostaria de solicitar um serviço!`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-10 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] transition-all duration-300 active:scale-90 animate-bounce sm:animate-none"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="font-bold text-sm">Chamar no WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
