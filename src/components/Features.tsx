import React from 'react';
import { MapPin, Clock, Shield, Smartphone } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="bg-[#36a558]/10 dark:bg-[#36a558]/20 p-3 rounded-full w-16 h-16 flex items-center justify-center text-[#007550] dark:text-[#36a558]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">¿Por qué Elegir APPMIGO?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestra app aporta un nuevo nivel de comodidad al transporte en Neiva
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<MapPin size={32} />}
            title="Seguimiento en Tiempo Real"
            description="Sigue tu trayecto en tiempo real y compártelo con familiares y amigos para mayor seguridad."
            delay="0.2s"
          />
          
          <Feature 
            icon={<Clock size={32} />}
            title="Llegadas Puntuales"
            description="Planifica mejor tu día con ETAs precisos y notificaciones cuando se acerque tu trayecto."
            delay="0.4s"
          />
          
          <Feature 
            icon={<Shield size={32} />}
            title="Seguro & Protegido"
            description="Todos los conductores son verificados y los viajes son supervisados para su seguridad y tranquilidad."
            delay="0.6s"
          />
          
          <Feature 
            icon={<Smartphone size={32} />}
            title="Pagos Fáciles"
            description="Múltiples opciones de pago, como efectivo, tarjetas de crédito y monederos móviles, para su comodidad."
            delay="0.8s"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;