import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen, delay }) => {
  return (
    <div 
      className="border-b border-gray-200 dark:border-gray-700 last:border-0 opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <button
        className="flex justify-between items-center w-full py-5 text-left font-semibold text-gray-800 dark:text-gray-200 hover:text-[#36a558] dark:hover:text-[#36a558] transition-colors duration-300 focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "¿Cómo se Descarga la Aplicación?",
      answer: "Nuestra aplicación está disponible tanto en App Store para dispositivos iOS como en Google Play Store para dispositivos Android. Solo tiene que buscar «NeivaMov» en cualquiera de las dos tiendas o utilizar los botones de descarga de esta página."
    },
    {
      question: "¿Es Gratuita la Aplicación?",
      answer: "Sí, la descarga y el registro en la aplicación son totalmente gratuitos. Solo pagas por los servicios de transporte que utilices."
    },
    {
      question: "¿Cómo se Calculan las Tarifas?",
      answer: "Las tarifas se calculan en función de la distancia, la hora del día y la demanda actual. Siempre verás la tarifa exacta antes de confirmar tu viaje, sin costes ocultos."
    },
    {
      question: "¿Están Seguros Mis Datos Personales?",
      answer: "Por supuesto. Utilizamos cifrado de nivel bancario para proteger toda su información personal y de pago. Nunca compartimos tus datos con terceros sin tu consentimiento."
    },
    {
      question: "¿Cómo puedo ponerme en contacto con el servicio de atención al cliente?",
      answer: "Puedes ponerte en contacto con nuestro equipo de atención al cliente directamente a través de la aplicación en Ajustes > Ayuda > Contactar con el servicio de atención al cliente. Estamos disponibles 24/7 para ayudarte con cualquier problema."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Respuestas rápidas a las preguntas más frecuentes sobre nuestra aplicación de transporte
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
              delay={`${0.2 + index * 0.1}s`}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">¿Aún tiene preguntas?</p>
          <a 
            href="mailto:support@neivamov.com" 
            className="inline-block text-[#007550] dark:text-[#36a558] font-semibold hover:text-[#36a558] dark:hover:text-[#2a8241] transition-colors duration-300"
          >
            Póngase en contacto con nuestro equipo de asistencia
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;