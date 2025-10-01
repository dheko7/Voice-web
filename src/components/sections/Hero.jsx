import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-fondo-principal py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-texto-principal leading-tight mb-6">
              Tu recepcionista virtual que nunca descansa
            </h1>
            <p className="text-xl md:text-2xl text-texto-secundario mb-8 leading-relaxed">
              Atiende cada llamada, agenda citas automáticamente y responde dudas frecuentes. Todo por menos de 5 € al día.
            </p>
            <button className="btn-primary text-white px-8 py-4 text-lg font-semibold rounded-xl hover-lift">
              Solicitar demo gratuita
            </button>
          </div>

          {/* Imagen/Icono */}
          <div className="animate-slide-up flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-boton-primario to-blue-600 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <Phone className="w-16 h-16 text-white" />
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-sm font-semibold text-texto-principal mb-2">Agenda llena</div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-boton-secundario rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-boton-secundario rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
