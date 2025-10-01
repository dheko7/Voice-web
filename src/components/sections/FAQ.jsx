import React, { useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      pregunta: "¿La voz suena natural?",
      respuesta: "Sí, utilizamos tecnología avanzada con voces realistas."
    },
    {
      pregunta: "¿Se integra con mi calendario?",
      respuesta: "Compatible con Google Calendar y más."
    },
    {
      pregunta: "¿Qué pasa si falla?",
      respuesta: "Incluye soporte técnico siempre disponible."
    },
    {
      pregunta: "¿Es caro?",
      respuesta: "Cuesta menos que contratar personal, y trabaja 24/7."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-fondo-secundario py-20">
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
                <h3 className="text-lg font-semibold text-texto-principal">
                  {faq.pregunta}
                </h3>
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
