import React from 'react';
import { Quote, TrendingUp, User } from 'lucide-react';

const CasoExito = () => {
  return (
    <section className="bg-fondo-secundario py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            Historias reales de negocios como el tuyo
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
          {/* Icono de comillas */}
          <Quote className="w-12 h-12 text-boton-primario absolute -top-6 left-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Avatar y datos */}
            <div className="text-center lg:text-left">
              <div className="bg-boton-primario w-20 h-20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-texto-principal mb-2">Ana</h3>
              <p className="text-texto-secundario">Dueña de clínica dental</p>
              <p className="text-texto-secundario">Madrid</p>
            </div>

            {/* Testimonio */}
            <div className="lg:col-span-2">
              <blockquote className="text-lg md:text-xl text-texto-principal leading-relaxed mb-6 italic">
                "Perdía más de 10 pacientes al mes por llamadas no atendidas. Con Neurastyle, ahora cada llamada se convierte en una cita, y su facturación aumentó un 25% en tres meses."
              </blockquote>
              
              {/* Estadísticas */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">25%</div>
                  <div className="text-sm text-green-700">Aumento facturación</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-sm text-blue-700">Pacientes recuperados/mes</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                  <div className="text-sm text-purple-700">Meses para ver resultados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Icono de trending */}
          <TrendingUp className="w-8 h-8 text-boton-secundario absolute -bottom-4 right-8" />
        </div>
      </div>
    </section>
  );
};

export default CasoExito;
