import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Smartphone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-white flex items-center mb-4">
              <span className="mr-2 bg-[#007550] text-white p-1 rounded">APP</span>
              <span>MIGO</span>
            </div>
            <p className="text-gray-400 mb-6">
              Hacer que el transporte en Neiva sea sencillo, seguro y accesible para todos.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/AppMigo" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/appmigoo/" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/app-migo-ba16a3365/" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Características</a></li>
              <li><a href="#app" className="text-gray-400 hover:text-white transition-colors duration-300">Vista Previa de la Aplicación</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonios</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
              <li><a href="#download" className="text-gray-400 hover:text-white transition-colors duration-300">Descargar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Condiciones de Uso</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Política de Privacidad</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">Política de Cookies</a></li>
              <li><a href="/licenses" className="text-gray-400 hover:text-white transition-colors duration-300">Licencias</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacte con Nosotros</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Smartphone size={16} className="mr-2" /> +57 313 805 2999
              </li>
              <li>appmigooo@gmail.com</li>
              <li>Neiva, Huila, Colombia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} APPMIGO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;