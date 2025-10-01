import React from 'react';
import { ArrowRight, Calendar, Users } from 'lucide-react';

const HeroSecundario = () => {
  return (
    <section className="bg-gradient-to-r from-boton-primario to-blue-700 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
          {/* Iconos decorativos */}
          <div className="flex justify-center space-x-4 mb-6">
            <Calendar className="w-8 h-8 text-white" />
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            ¿Listo para llenar tu agenda sin perder más clientes?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Únete a cientos de negocios que ya no pierden clientes por llamadas no atendidas
          </p>
          
          {/* Botón CTA principal */}
          <button className="bg-white text-boton-primario px-12 py-4 text-xl font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto">
            <span>Solicitar demo gratuita ahora</span>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          {/* Elementos de confianza */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Negocios confían en nosotros</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Disponibilidad total</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-white mb-2">99%</div>
              <div className="text-white/80 text-sm">Satisfacción del cliente</div>
            </div>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            * Demo gratuita sin compromiso • Configuración en menos de 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSecundario;
