import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp (reemplazar con el número real)
    const phoneNumber = '34600000000'; // Sin el + y espacios
    const message = 'Hola, me interesa solicitar una demo de Neurastyle.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-sticky flex items-center space-x-2 group"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:block font-medium">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
