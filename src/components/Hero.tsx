import { ArrowDown } from 'lucide-react';
import AppStoreBadge from './ui/AppStoreBadge';
import GooglePlayBadge from './ui/GooglePlayBadge';
import React, { useState } from 'react';

const Hero = () => {

  const [clicked, setClicked] = useState(false);

  const handleImageClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // duración de la animación
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#007550] to-[#36a558] text-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full pt-16 pb-24">
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Transporte simple en Neiva
              </h1>
              <p className="text-xl sm:text-2xl opacity-80 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Navega por la ciudad con facilidad. Llega donde necesites de forma más rápida, segura e inteligente.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
            
            <div className="text-sm text-white/70 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <p>
                Miles de residentes de Neiva confían en nosotros a diario. Únete a nuestra comunidad y descubre una forma más eficiente de moverte por la ciudad.</p>
            </div>
          </div>
          
          <div className="relative flex justify-center mt-8 md:mt-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-auto">
              <div className="absolute inset-0 bg-black/20 -left-4 -top-4 rounded-3xl"></div>
              <img 
                src="/images/example_app.png" 
                alt="APPMIGO Ejemplo" 
                onClick={handleImageClick}
                className={`relative z-10 rounded-3xl shadow-2xl cursor-pointer transform transition-transform duration-300 ${
                  clicked ? 'scale-95' : ''
                }`}
              />
              <div className="absolute -bottom-4 -right-4 bg-white/20 blur-xl h-32 w-32 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" aria-label="Scroll to features">
          <ArrowDown className="text-white/80 hover:text-white" size={32} />
        </a>
      </div>
      
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 dark:bg-gray-900"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      ></div>
    </section>
  );
};

export default Hero;