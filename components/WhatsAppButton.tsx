
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
      className="fixed bottom-6 right-4 sm:bottom-10 sm:right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 sm:px-6 sm:py-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] transition-all duration-300 active:scale-90 animate-bounce sm:animate-none"
    >
      <MessageCircle size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
      <span className="font-bold text-xs sm:text-sm">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
