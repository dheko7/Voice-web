import React from 'react';
import { CheckCircle, Clock, Calendar, MessageSquare } from 'lucide-react';

const Solucion = () => {
  const caracteristicas = [
    {
      icon: <Clock className="w-8 h-8" />,
      text: "Atiende llamadas las 24 horas"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      text: "Agenda citas al instante"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      text: "Da respuestas rápidas a tus clientes"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      text: "Profesional, eficiente y sin costes extra"
    }
  ];

  return (
    <section className="bg-fondo-principal py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CheckCircle className="w-16 h-16 text-boton-secundario mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            La solución: un asistente que siempre contesta
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl md:text-2xl text-texto-secundario leading-relaxed mb-8">
              Neurastyle es tu recepcionista virtual con inteligencia artificial. Atiende llamadas las 24 horas, agenda citas al instante y da respuestas rápidas a tus clientes, incluso fuera de horario. Profesional, eficiente y sin costes de personal extra.
            </p>
            
            <button className="btn-secondary text-white px-8 py-4 text-lg font-semibold rounded-xl hover-lift">
              Ver cómo funciona
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caracteristicas.map((caracteristica, index) => (
              <div key={index} className="bg-fondo-secundario p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-boton-primario mb-4">
                  {caracteristica.icon}
                </div>
                <p className="text-texto-principal font-medium">
                  {caracteristica.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucion;
