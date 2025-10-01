import React from 'react';
import { Calendar, MessageSquare, Instagram, Mail } from 'lucide-react';

const Integraciones = () => {
  const integraciones = [
    {
      icon: <Calendar className="w-12 h-12" />,
      nombre: "Google Calendar",
      descripcion: "Sincronización automática"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      nombre: "WhatsApp",
      descripcion: "Mensajes automáticos"
    },
    {
      icon: <Instagram className="w-12 h-12" />,
      nombre: "Instagram",
      descripcion: "Gestión de comentarios"
    },
    {
      icon: <Mail className="w-12 h-12" />,
      nombre: "Email",
      descripcion: "Confirmaciones por correo"
    }
  ];

  return (
    <section className="bg-fondo-secundario py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            Se integra con tus herramientas favoritas
          </h2>
          <p className="text-xl text-texto-secundario max-w-3xl mx-auto leading-relaxed">
            Conecta fácilmente con las aplicaciones que ya usas. Neurastyle se adapta a tu flujo de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {integraciones.map((integracion, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover-lift text-center">
              <div className="text-boton-primario mb-4 flex justify-center">
                {integracion.icon}
              </div>
              <h3 className="text-lg font-semibold text-texto-principal mb-2">
                {integracion.nombre}
              </h3>
              <p className="text-texto-secundario text-sm">
                {integracion.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Logo de confianza */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
              {integraciones.map((integracion, index) => (
                <div key={index} className="flex items-center space-x-2 opacity-60">
                  <div className="text-boton-primario">
                    {integracion.icon}
                  </div>
                  <span className="text-texto-secundario font-medium">
                    {integracion.nombre}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-texto-secundario mt-4 text-sm">
              Y muchas más integraciones disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integraciones;
