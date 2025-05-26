import React from 'react';
import AppStoreBadge from './ui/AppStoreBadge';
import GooglePlayBadge from './ui/GooglePlayBadge';

const Download = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-[#007550] to-[#36a558] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo Para Transformar Sus Desplazamientos en Neiva?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Únase a miles de usuarios satisfechos que han simplificado su transporte diario con nuestra aplicación.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
            <p className="text-white/90 mb-2">Escanear para descargar</p>
            <div className="bg-white p-2 rounded-lg inline-block">
              {/* This would be a QR code in a real implementation */}
              <div className="w-32 h-32 bg-gray-900 flex items-center justify-center">
                <span className="text-white text-xs text-center">QR Code<br/>Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;