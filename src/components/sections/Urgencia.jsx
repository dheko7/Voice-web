import React from 'react';
import { Calendar, Clock, PhoneCall } from 'lucide-react';

const Urgencia = () => {
  const pasos = [
    {
      icono: Calendar,
      titulo: 'Elige el momento',
      descripcion: 'Selecciona el día y la hora que mejor se adapte a tu agenda.'
    },
    {
      icono: PhoneCall,
      titulo: 'Cuéntanos tus metas',
      descripcion: 'Durante la llamada revisaremos tu proceso actual y te mostraremos cómo optimizarlo.'
    },
    {
      icono: Clock,
      titulo: 'Implementación en 24h',
      descripcion: 'Si encajamos, configuramos tu asistente y dejamos todo listo en menos de un día.'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-red-500 to-pink-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Agenda una llamada personalizada
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Reserva un espacio con nuestro equipo y descubre en detalle cómo Neurastyle puede automatizar tus citas sin perder el toque humano.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            {pasos.map(({ icono: Icono, titulo, descripcion }, index) => (
              <div key={index} className="bg-white/15 rounded-2xl p-6 h-full">
                <Icono className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{titulo}</h3>
                <p className="text-white/80 text-base leading-relaxed">{descripcion}</p>
              </div>
            ))}
          </div>

          <a
            href="https://calendly.com/saidjniah/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-red-600 px-12 py-4 text-xl font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Agenda con Calendly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Urgencia;
