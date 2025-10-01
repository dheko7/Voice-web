import React from 'react';
import { Clock, Gift } from 'lucide-react';

const Urgencia = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-pink-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
          {/* Iconos decorativos */}
          <div className="flex justify-center space-x-4 mb-6">
            <Gift className="w-8 h-8 text-white" />
            <Clock className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Oferta de lanzamiento
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Los primeros 10 negocios en solicitar demo tendrán precio reducido de por vida.
          </p>
          
          {/* Contador de urgencia */}
          <div className="bg-white/20 rounded-2xl p-6 mb-8">
            <p className="text-white text-lg mb-4">¡Solo quedan 7 plazas disponibles!</p>
            <div className="flex justify-center space-x-2">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 h-4 rounded-full ${
                    i < 7 ? 'bg-white' : 'bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          
          <button className="bg-white text-red-600 px-12 py-4 text-xl font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Reserva tu demo ahora
          </button>
          
          <p className="text-white/80 text-sm mt-4">
            * Oferta válida solo para los primeros 10 clientes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgencia;
