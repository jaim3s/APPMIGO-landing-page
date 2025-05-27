import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AppPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const screenshots = [
    {
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Encuentra Tu Bus",
      description: "Solicite fácilmente viajes a cualquier lugar de Neiva con sólo unos toques."
    },
    {
      image: "https://images.pexels.com/photos/5082615/pexels-photo-5082615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Seguimiento en Tiempo Real",
      description: "Vea llegar a su conductor y siga su viaje en tiempo real."
    },
    {
      image: "https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pagos Fáciles",
      description: "Múltiples opciones de pago seguro para una experiencia sin complicaciones."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="app" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Vea Nuestra Aplicación en Acción</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Diseñado pensando en la sencillez y la eficacia para los residentes de Neiva  
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#007550]/10 to-[#36a558]/10 dark:from-[#007550]/20 dark:to-[#36a558]/20 rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Phone mockup with screenshot */}
              <div className="order-2 md:order-1 flex justify-center">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="relative w-64 h-auto border-8 border-gray-800 dark:border-gray-700 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:rotate-1">
                    {/* Screen content */}
                    <img 
                      src={screenshots[activeIndex].image} 
                      alt={`App Screenshot - ${screenshots[activeIndex].title}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Home button */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-800 dark:bg-gray-700 rounded-full"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#36a558]/20 dark:bg-[#36a558]/30 rounded-3xl transform rotate-3"></div>
                </div>
              </div>
              
              {/* Text content */}
              <div className="order-1 md:order-2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{screenshots[activeIndex].title}</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={20} className="text-[#007550] dark:text-[#36a558]" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={20} className="text-[#007550] dark:text-[#36a558]" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  {screenshots[activeIndex].description}
                </p>
                
                <div className="flex gap-2 mb-6">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeIndex ? 'bg-[#007550] dark:bg-[#36a558]' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to screenshot ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Características clave de la aplicación:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#36a558] rounded-full mr-2"></span>
                      Interfaz intuitiva para todas las edades
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#36a558] rounded-full mr-2"></span>
                      Proceso de reserva rápido
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#36a558] rounded-full mr-2"></span>
                      Valoraciones y comentarios de los conductores
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#36a558] rounded-full mr-2"></span>
                      Atención al cliente 24 horas al día
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;