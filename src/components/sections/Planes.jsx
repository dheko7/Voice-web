import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Planes = () => {
  const planes = [
    {
      nombre: "Básico",
      precio: "99",
      icono: <Zap className="w-8 h-8" />,
      color: "border-gray-200",
      bgColor: "bg-white",
      caracteristicas: [
        "Agenda automática",
        "Soporte estándar",
        "Integración básica",
        "Hasta 100 llamadas/mes"
      ]
    },
    {
      nombre: "Pro",
      precio: "199",
      icono: <Star className="w-8 h-8" />,
      color: "border-boton-primario",
      bgColor: "bg-blue-50",
      destacado: true,
      caracteristicas: [
        "Agenda automática",
        "Recordatorios automáticos",
        "Integración WhatsApp",
        "Soporte prioritario",
        "Hasta 500 llamadas/mes"
      ]
    },
    {
      nombre: "Premium",
      precio: "299",
      icono: <Crown className="w-8 h-8" />,
      color: "border-yellow-400",
      bgColor: "bg-yellow-50",
      caracteristicas: [
        "Todo incluido",
        "Soporte prioritario",
        "Personalización avanzada",
        "Analíticas detalladas",
        "Llamadas ilimitadas"
      ]
    }
  ];

  return (
    <section className="bg-fondo-principal py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            Planes sencillos y transparentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planes.map((plan, index) => (
            <div key={index} className={`relative border-2 rounded-2xl p-8 hover-lift ${plan.color} ${plan.bgColor}`}>
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-boton-primario text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="text-boton-primario mb-4 flex justify-center">
                  {plan.icono}
                </div>
                <h3 className="text-2xl font-bold text-texto-principal mb-2">
                  {plan.nombre}
                </h3>
                <div className="text-4xl font-bold text-texto-principal mb-2">
                  {plan.precio} €
                  <span className="text-lg font-normal text-texto-secundario">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-boton-secundario flex-shrink-0" />
                    <span className="text-texto-principal">{caracteristica}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                plan.destacado 
                  ? 'btn-primary text-white' 
                  : 'bg-gray-100 text-texto-principal hover:bg-gray-200'
              }`}>
                Empieza gratis ahora
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-texto-secundario">
            Todos los planes incluyen prueba gratuita de 7 días
          </p>
        </div>
      </div>
    </section>
  );
};

export default Planes;
