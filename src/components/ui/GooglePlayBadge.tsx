import React from 'react';

const GooglePlayBadge = () => {
  return (
    <a 
      href="#" 
      className="inline-block bg-black text-white rounded-xl px-6 py-3 flex items-center hover:bg-gray-900 transition-colors duration-300"
      rel="noopener noreferrer"
      aria-label="Consíguelo en Google Play"
    >
      <div className="mr-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.1,20.1L12,12.2L4.1,4.3C4,4.5,4,4.7,4,5V19C4,19.3,4,19.5,4.1,19.7C4.1,19.8,4.1,19.9,4.1,20.1z" />
          <path d="M18.3,12L4.1,20.1C4.2,20.2,4.4,20.3,4.5,20.3C4.8,20.5,5.1,20.5,5.5,20.5C5.9,20.5,6.2,20.4,6.5,20.3L21.9,12.5L18.3,12z" />
          <path d="M18.3,12L21.9,11.5L6.5,3.7C6.2,3.6,5.9,3.5,5.5,3.5C5.1,3.5,4.8,3.6,4.5,3.7C4.4,3.7,4.2,3.8,4.1,3.9L18.3,12z" />
          <path d="M4.1,3.9C4,4.1,4,4.2,4,4.3C4,4.5,4,4.7,4,5V19C4,19.3,4,19.5,4.1,19.7L12,12.2L4.1,3.9z" />
        </svg>
      </div>
      <div>
        <div className="text-xs">Descargar en</div>
        <div className="text-lg font-semibold leading-tight">Google Play</div>
      </div>
    </a>
  );
};

export default GooglePlayBadge;