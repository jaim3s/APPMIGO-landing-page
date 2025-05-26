import React from 'react';

const AppStoreBadge = () => {
  return (
    <a 
      href="#" 
      className="inline-block bg-black text-white rounded-xl px-6 py-3 flex items-center hover:bg-gray-900 transition-colors duration-300"
      rel="noopener noreferrer"
      aria-label="Descargar en la App Store"
    >
      <div className="mr-3">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.94-3.1.42-1.12-.54-2.13-.53-3.3 0-1.58.71-2.63.46-3.56-.44-2.54-2.48-2.8-7.11-.54-10.28 1.38-1.91 3.2-2.13 4.28-2.13 1.02 0 2.85.2 4.28 2.13.71.87.94 1.86.96 1.92-.03 0-3.37 1.29-3.34 4.59.03 3.6 3.34 3.92 3.34 3.92-.03.06-.44 1.75-1.02 2.87z" />
          <path d="M15.61 6.74c.71-.9 1.21-2.15 1.08-3.44-1.11.07-2.39.8-3.14 1.69-.74.87-1.27 2.04-1.11 3.39 1.19.05 2.44-.67 3.17-1.64z" />
        </svg>
      </div>
      <div>
        <div className="text-xs">Descargar en</div>
        <div className="text-lg font-semibold leading-tight">App Store</div>
      </div>
    </a>
  );
};

export default AppStoreBadge;