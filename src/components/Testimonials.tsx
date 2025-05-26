import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  delay: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image, rating, delay }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"} 
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-100">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Lo Que Dicen Nuestros Usuarios</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Únase a los miles de residentes de Neiva satisfechos que utilizan nuestra aplicación a diario
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="Esta aplicación ha cambiado completamente mi forma de moverme por Neiva. Ya no me preocupo por encontrar transporte a cualquier hora del día."
            name="Carolina Mendoza"
            role="Daily Commuter"
            image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            rating={5}
            delay="0.2s"
          />
          
          <Testimonial 
            quote="Como profesional de los negocios, necesito un transporte fiable. Esta aplicación nunca me ha fallado para mis reuniones por toda la ciudad."
            name="Javier Rodriguez"
            role="Business Executive"
            image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            rating={4}
            delay="0.4s"
          />
          
          <Testimonial 
            quote="Me siento mucho más seguro utilizando esta aplicación, especialmente por la noche. La función de seguimiento del conductor me da mucha tranquilidad."
            name="Luisa Fernandez"
            role="University Student"
            image="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            rating={5}
            delay="0.6s"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#download" 
            className="inline-block bg-[#36a558] text-white px-8 py-3 rounded-md hover:bg-[#2a8241] transition-colors duration-300 font-semibold"
          >
            Únase Hoy a Nuestros Usuarios Satisfechos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;