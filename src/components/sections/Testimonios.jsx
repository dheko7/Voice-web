import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonios = () => {
  const testimonios = [
    {
      nombre: "Laura",
      negocio: "Clínica Dental",
      ciudad: "Madrid",
      testimonio: "Antes perdíamos llamadas a diario. Ahora tenemos la agenda llena."
    },
    {
      nombre: "Pedro",
      negocio: "Peluquería",
      ciudad: "Barcelona",
      testimonio: "En la peluquería nunca podíamos contestar todas las llamadas. Ahora no perdemos ni una cita."
    },
    {
      nombre: "Marta",
      negocio: "Fisioterapia",
      ciudad: "Valencia",
      testimonio: "Mi consulta de fisioterapia estaba siempre colapsada. Este sistema me salvó."
    }
  ];

  const renderStars = () => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-fondo-principal py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover-lift relative">
              {/* Icono de comillas */}
              <Quote className="w-8 h-8 text-boton-primario absolute -top-4 left-8" />
              
              {/* Estrellas */}
              {renderStars()}
              
              {/* Testimonio */}
              <blockquote className="text-lg text-texto-principal leading-relaxed mb-6 italic">
                "{testimonio.testimonio}"
              </blockquote>
              
              {/* Autor */}
              <div className="border-t pt-4">
                <p className="font-semibold text-texto-principal">{testimonio.nombre}</p>
                <p className="text-texto-secundario">{testimonio.negocio}</p>
                <p className="text-texto-secundario text-sm">({testimonio.ciudad})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
