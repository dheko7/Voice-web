import React from 'react';
import Hero from './sections/Hero';
import Problema from './sections/Problema';
import Solucion from './sections/Solucion';
import Beneficios from './sections/Beneficios';
import ComoFunciona from './sections/ComoFunciona';
import CasoExito from './sections/CasoExito';
import Testimonios from './sections/Testimonios';
import Integraciones from './sections/Integraciones';
import Planes from './sections/Planes';
import FAQ from './sections/FAQ';
import Urgencia from './sections/Urgencia';
import SobreNosotros from './sections/SobreNosotros';
import Contacto from './sections/Contacto';
import HeroSecundario from './sections/HeroSecundario';
import Footer from './layout/Footer';
import WhatsAppButton from './WhatsAppButton';
import DemoInteractiva from './DemoInteractiva';

const NeurastyleLanding = () => {
  return (
    <div className="min-h-screen bg-fondo-principal">
      <Hero />
      <Problema />
      <Solucion />
      <Beneficios />
      <ComoFunciona />
      <CasoExito />
      <Testimonios />
      <Integraciones />
      <Planes />
      <FAQ />
      <Urgencia />
      <SobreNosotros />
      <Contacto />
      <HeroSecundario />
      <Footer />
      
      {/* Componentes flotantes */}
      <WhatsAppButton />
      <DemoInteractiva />
    </div>
  );
};

export default NeurastyleLanding;
