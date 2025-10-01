import React from 'react';
import { Phone, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

const ComoFunciona = () => {
  const pasos = [
    {
      numero: 1,
      icono: <Phone className="w-8 h-8" />,
      titulo: "Cliente llama o escribe por WhatsApp",
      descripcion: "Tu cliente se pone en contacto contigo de la forma que prefiera."
    },
    {
      numero: 2,
      icono: <MessageSquare className="w-8 h-8" />,
      titulo: "El asistente responde con voz natural",
      descripcion: "Neurastyle atiende con una voz profesional y amable."
    },
    {
      numero: 3,
      icono: <Calendar className="w-8 h-8" />,
      titulo: "Agenda la cita automáticamente en tu calendario",
      descripcion: "La cita se registra directamente en tu sistema."
    },
    {
      numero: 4,
      icono: <CheckCircle className="w-8 h-8" />,
      titulo: "El cliente recibe confirmación y recordatorio",
      descripcion: "Confirmación inmediata y recordatorio antes de la cita."
    }
  ];

  return (
    <section className="bg-fondo-principal py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            Así de simple funciona Neurastyle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pasos.map((paso, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift text-center h-full">
                <div className="bg-boton-primario text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {paso.numero}
                </div>
                <div className="text-boton-primario mb-4 flex justify-center">
                  {paso.icono}
                </div>
                <h3 className="text-lg font-semibold text-texto-principal mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-texto-secundario text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
              
              {/* Flecha conectora */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-boton-primario"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-boton-primario border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary text-white px-8 py-4 text-lg font-semibold rounded-xl hover-lift">
            Solicitar demo gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
