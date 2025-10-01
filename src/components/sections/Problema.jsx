import React from 'react';
import { AlertTriangle, PhoneOff, Star, Clock, DollarSign } from 'lucide-react';

const Problema = () => {
  const problemas = [
    {
      icon: <PhoneOff className="w-8 h-8" />,
      text: "Clientes que llaman y no reciben respuesta."
    },
    {
      icon: <Star className="w-8 h-8" />,
      text: "Reseñas negativas por mala atención."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      text: "Personal saturado y llamadas que se pierden."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      text: "Citas canceladas que son dinero perdido."
    }
  ];

  return (
    <section className="bg-fondo-secundario py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            ¿Cuántos clientes pierdes cada día sin darte cuenta?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {problemas.map((problema, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-red-500 flex-shrink-0">
                {problema.icon}
              </div>
              <p className="text-lg text-texto-principal font-medium">
                {problema.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <p className="text-xl md:text-2xl text-texto-principal font-semibold leading-relaxed">
              Cada llamada perdida es una oportunidad menos. Y esas oportunidades suman cientos o miles de euros al mes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problema;
