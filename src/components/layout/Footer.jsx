import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-texto-principal text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Neurastyle</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu recepcionista virtual que nunca descansa. Atiende cada llamada, agenda citas automáticamente y responde dudas frecuentes las 24 horas del día.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Enlaces útiles */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-boton-secundario" />
                <span className="text-gray-300">info@neurastyle.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-boton-secundario" />
                <span className="text-gray-300">+34 900 000 000</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria y enlaces legales */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 Neurastyle. Todos los derechos reservados.
            </p>
            
            {/* Enlaces legales */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Aviso legal
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Condiciones de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
