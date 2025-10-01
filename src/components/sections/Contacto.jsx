import React, { useState } from 'react';
import { Send, User, Building, Mail, Phone } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    email: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section className="bg-fondo-secundario py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto-principal mb-8">
            Solicita tu demo gratuita
          </h2>
          <p className="text-xl text-texto-secundario">
            Descubre cómo Neurastyle puede transformar tu negocio
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-texto-principal mb-2">
                  Nombre *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-texto-secundario" />
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-boton-primario focus:border-transparent transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              {/* Negocio */}
              <div>
                <label className="block text-sm font-medium text-texto-principal mb-2">
                  Negocio *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-texto-secundario" />
                  <input
                    type="text"
                    name="negocio"
                    value={formData.negocio}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-boton-primario focus:border-transparent transition-all"
                    placeholder="Nombre de tu negocio"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-texto-principal mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-texto-secundario" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-boton-primario focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-medium text-texto-principal mb-2">
                  Teléfono *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-texto-secundario" />
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-boton-primario focus:border-transparent transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
            </div>

            {/* Botón de envío */}
            <div className="text-center pt-6">
              <button 
                type="submit"
                className="btn-primary text-white px-12 py-4 text-lg font-semibold rounded-xl hover-lift flex items-center space-x-3 mx-auto"
              >
                <Send className="w-6 h-6" />
                <span>Solicitar demo gratuita</span>
              </button>
            </div>

            {/* Texto de confianza */}
            <div className="text-center pt-6 border-t">
              <p className="text-texto-secundario text-sm">
                🔒 Tus datos están seguros. No compartimos tu información con terceros.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
