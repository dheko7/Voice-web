import React, { useState } from 'react';
import { Phone, MessageSquare, X, Calendar } from 'lucide-react';

const DemoInteractiva = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Botón para abrir demo */}
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={openModal}
          className="bg-boton-primario text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
          title="Simular llamada"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>

      {/* Modal de demo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slide-up">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-boton-primario p-2 rounded-full">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-texto-principal">Asistente Neurastyle</h3>
                  <p className="text-sm text-texto-secundario">En línea ahora</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-texto-secundario hover:text-texto-principal transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mensaje del asistente */}
            <div className="bg-fondo-secundario rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="bg-boton-primario p-2 rounded-full flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-texto-principal font-medium mb-2">
                    Hola, soy tu asistente virtual.
                  </p>
                  <p className="text-texto-principal">
                    ¿Quieres agendar una cita ahora?
                  </p>
                </div>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="space-y-3">
              <button className="w-full btn-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Agendar ahora</span>
              </button>
              
              <button
                onClick={closeModal}
                className="w-full bg-gray-100 text-texto-principal py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Cerrar demo
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-6 text-center">
              <p className="text-xs text-texto-secundario">
                Esta es una simulación. En la versión real, el asistente mantendría una conversación completa.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoInteractiva;
