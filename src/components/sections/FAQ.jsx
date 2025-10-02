import React, { useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      numero: '1',
      pregunta: "¿La voz suena natural?",
      respuesta:
        "Sí. Utilizamos tecnología avanzada con voces realistas y personalizables. Puedes elegir entre varias voces y estilos, para que se adapte al tono de tu negocio."
    },
    {
      numero: '2',
      pregunta: "¿Se integra con mi calendario actual?",
      respuesta:
        "Sí. Funciona con Google Calendar, Outlook y otros sistemas de gestión. Cada cita se sincroniza automáticamente, sin que tengas que hacer nada."
    },
    {
      numero: '3',
      pregunta: "¿Qué pasa si el asistente no entiende algo?",
      respuesta:
        "El sistema está diseñado para reconducir la conversación y dar opciones claras. Y en casos específicos, puede derivar la llamada a un número de tu equipo."
    },
    {
      numero: '4',
      pregunta: "¿Puedo usarlo en varios canales además del teléfono?",
      respuesta:
        "Sí. También puedes activarlo para WhatsApp, Instagram o incluso tu web. Así ofreces una experiencia unificada en todos los canales donde tus clientes te contactan."
    },
    {
      numero: '5',
      pregunta: "¿Qué pasa si falla?",
      respuesta:
        "Incluye soporte técnico siempre disponible. Además, guardamos registros de todas las llamadas para revisar incidencias y mejorar el servicio continuamente."
    },
    {
      numero: '6',
      pregunta: "¿Es seguro?",
      respuesta:
        "Sí. Todos los datos se almacenan de forma cifrada y cumplimos con la normativa de protección de datos (RGPD). Tu información y la de tus clientes está protegida."
    },
    {
      numero: '7',
      pregunta: "¿Necesito instalar algo en mi negocio?",
      respuesta:
        "No. Todo funciona en la nube. Solo necesitas conexión a internet y un calendario digital. En menos de 24h podemos activarlo en tu negocio."
    },
    {
      numero: '8',
      pregunta: "¿Puedo probarlo antes de pagar?",
      respuesta:
        "Sí. Tienes 7 días de prueba gratuita sin compromiso. Si no te convence, no pagas nada."
    },
    {
      numero: '9',
      pregunta: "¿Qué pasa si quiero cancelarlo?",
      respuesta:
        "Puedes cancelar en cualquier momento, sin permanencia."
    },
    {
      numero: '10',
      pregunta: "¿Es caro?",
      respuesta:
        "No. Cuesta menos que contratar personal adicional, y funciona 24/7. En la práctica, cada cita extra que consigas gracias a Neurastyle paga el servicio entero."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-fondo-secundario py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-boton-primario/10 text-boton-primario font-bold">
                    {faq.numero}
                  </span>
                  <h3 className="text-lg font-semibold text-texto-principal">
                    {faq.pregunta}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-boton-primario transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-texto-secundario leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Garantía */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <Shield className="w-16 h-16 text-boton-secundario mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-texto-principal mb-4">
            Garantía de satisfacción
          </h3>
          <p className="text-lg text-texto-secundario leading-relaxed">
            <strong>Prueba gratis 7 días.</strong> Si no te convence, no pagas nada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
