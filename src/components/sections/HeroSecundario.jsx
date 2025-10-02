import React from 'react';
import { ArrowRight, Calendar, CheckCircle2, Clock } from 'lucide-react';

const HeroSecundario = () => {
  const pasos = [
    {
      icono: CheckCircle2,
      titulo: 'Haz clic en “Agenda con Calendly”',
      descripcion: 'Accede directamente a nuestro calendario para reservar sin correos ni esperas.'
    },
    {
      icono: Calendar,
      titulo: 'Elige la fecha y hora ideal',
      descripcion: 'Disponibilidad real en tiempo real para que encuentres el momento perfecto para tu negocio.'
    },
    {
      icono: Clock,
      titulo: 'Recibe confirmación automática',
      descripcion: 'Te enviamos recordatorios y el enlace de la videollamada de forma inmediata.'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-boton-primario to-blue-700 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            ¿Cómo agendar una llamada?
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Sigue estos pasos y coordina en segundos una sesión personalizada con nuestro equipo para ver Neurastyle en acción.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            {pasos.map(({ icono: Icono, titulo, descripcion }, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-6 h-full">
                <Icono className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{titulo}</h3>
                <p className="text-white/80 leading-relaxed text-base">{descripcion}</p>
              </div>
            ))}
          </div>

          <a
            href="https://calendly.com/saidjniah/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-boton-primario px-12 py-4 text-xl font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl space-x-3"
          >
            <span>Agenda con Calendly</span>
            <ArrowRight className="w-6 h-6" />
          </a>

          <p className="text-white/70 text-sm mt-6">
            Confirmación inmediata y recordatorios automáticos para que no pierdas tu cita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSecundario;
