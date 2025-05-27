import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Smartphone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<'terminos' | 'privacidad' | 'cookies' | 'licencias' | null>(null);

  const openModal = (type: 'terminos' | 'privacidad' | 'cookies' | 'licencias') => {
    setModalContent(type);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  // Contenido para cada tipo
  const modalTexts = {
    terminos: `
Al usar APPMIGO, aceptas estos términos:

1. Uso: APPMIGO te ayuda a encontrar rutas de transporte público en Neiva. Úsala de forma legal y responsable.
2. Cuenta: Si creas una cuenta, eres responsable de tus datos de acceso.
3. Información: La app ofrece rutas y ubicación en tiempo real, pero puede haber variaciones. No garantizamos precisión total.
4. Privacidad: Recogemos solo los datos necesarios. Al usar la app, aceptas nuestra Política de Privacidad.
5. Responsabilidad: No nos hacemos responsables por retrasos, pérdidas o problemas derivados del uso de la app.
6. Cambios: Podemos actualizar estos términos. El uso continuo implica aceptación.
7. Contacto: Para soporte, escribe a [tu email o página de contacto].
`,
    privacidad:  `
En APPMIGO respetamos tu privacidad. Solo recopilamos los datos necesarios para mejorar tu experiencia, como nombre, correo y ubicación (si la autorizas). Usamos esta información para mostrarte rutas de transporte en Neiva y mejorar la app.

No compartimos tus datos con terceros, salvo por razones legales o para operar ciertos servicios. Puedes acceder, modificar o eliminar tu información escribiéndonos a appmigooo@gmail.com.

Al usar APPMIGO, aceptas esta política. Podemos actualizarla y notificaremos los cambios importantes.
`,
    cookies: `
En APPMIGO usamos cookies propias y de terceros para mejorar tu experiencia, analizar el uso de la app y personalizar contenido. No usamos cookies para publicidad ni compartimos tu información con anunciantes.

Puedes gestionar o desactivar las cookies desde la configuración de tu dispositivo o navegador.

Al usar la app, aceptas el uso de cookies según esta política.
`,
    licencias: `
APPMIGO utiliza librerías y herramientas de código abierto para su desarrollo. Cada una está bajo su respectiva licencia, como MIT, Apache o GPL.

Respetamos estas licencias y agradecemos a la comunidad que hace posible el software libre.
`,
  };
  
  return (
    <>
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
              <li>
                <button
                  onClick={() => openModal('terminos')}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Condiciones de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('privacidad')}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('cookies')}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Política de Cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('licencias')}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Licencias
                </button>
              </li>
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
    {/* Modal */}
    {modalContent && (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]
                    transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fadeIn"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-4 text-gray-600 hover:text-black font-bold text-3xl leading-none"
            aria-label="Cerrar modal"
          >
            ×
          </button>
          <h2 className="text-xl font-bold mb-4 capitalize">
            {modalContent.replace(/^\w/, c => c.toUpperCase())}
          </h2>
          <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">
            {modalTexts[modalContent]}
          </p>
        </div>
      </div>
    )}
    </>
  );
};

export default Footer;