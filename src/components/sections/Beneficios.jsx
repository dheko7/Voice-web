import React from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

const Beneficios = () => {
  const beneficios = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      titulo: "Más ingresos",
      descripcion: "Llena tu agenda hasta un 30% más.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      titulo: "Disponible 24/7",
      descripcion: "Nunca pierdas un cliente, ni de día ni de noche.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      titulo: "Menos costes",
      descripcion: "Ahorra hasta 1.000 €/mes frente a una recepcionista tradicional.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="bg-fondo-secundario py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className={`${beneficio.bgColor} ${beneficio.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                {beneficio.icon}
              </div>
              <h3 className="text-2xl font-bold text-texto-principal mb-4">
                {beneficio.titulo}
              </h3>
              <p className="text-lg text-texto-secundario leading-relaxed">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
