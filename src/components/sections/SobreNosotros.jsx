import React from 'react';
import { Calendar, MessageSquare, Users, Target } from 'lucide-react';

const SobreNosotros = () => {
  const valores = [
    {
      icon: <Target className="w-8 h-8" />,
      titulo: "Nuestra misión",
      descripcion: "Cada llamada debe convertirse en una cita confirmada"
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Nuestros clientes",
      descripcion: "Peluquerías, clínicas dentales, centros estéticos, fisioterapias y más"
    }
  ];

  const integraciones = [
    { nombre: "Google Calendar", icon: <Calendar className="w-6 h-6" /> },
    { nombre: "WhatsApp", icon: <MessageSquare className="w-6 h-6" /> }
  ];

  return (
    <section className="bg-fondo-principal py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
              Sobre Neurastyle
            </h2>
            
            <p className="text-xl text-texto-secundario leading-relaxed mb-8">
              En Neurastyle ayudamos a negocios a no perder clientes gracias a la automatización inteligente. Nuestra misión es clara: cada llamada debe convertirse en una cita confirmada. Trabajamos con peluquerías, clínicas dentales, centros estéticos, fisioterapias y más.
            </p>

            <div className="space-y-6 mb-8">
              {valores.map((valor, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-boton-primario flex-shrink-0 mt-1">
                    {valor.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-texto-principal mb-2">
                      {valor.titulo}
                    </h3>
                    <p className="text-texto-secundario">
                      {valor.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logos de confianza */}
            <div className="border-t pt-6">
              <p className="text-texto-secundario mb-4">Integraciones confiables:</p>
              <div className="flex space-x-6">
                {integraciones.map((integracion, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-fondo-secundario px-4 py-2 rounded-lg">
                    <div className="text-boton-primario">
                      {integracion.icon}
                    </div>
                    <span className="text-texto-principal font-medium">
                      {integracion.nombre}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagen/Representación visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-boton-primario to-blue-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="text-center">
                  <div className="bg-boton-secundario w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-texto-principal mb-4">
                    Equipo Neurastyle
                  </h3>
                  <p className="text-texto-secundario leading-relaxed">
                    Especialistas en automatización e inteligencia artificial, comprometidos con el éxito de tu negocio.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-boton-secundario rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
