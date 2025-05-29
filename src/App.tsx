import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Footer from './components/Footer';
import './utils/animations.css';
import FloatingCTA from './components/FloatingCTA';
import Demo from './components/Demo';

function App() {
  // Update document title for SEO
  React.useEffect(() => {
    document.title = 'APPMIGO - App para moverte por Neiva';
    
    // Add meta description for SEO
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'APPMIGO es la aplicación de transporte público diseñada para los ciudadanos de Neiva. Descubre rutas, horarios y opciones para moverte fácil y rápido por la ciudad.';
  document.head.appendChild(metaDescription);
      
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <AppPreview />
      <Demo />
      <Testimonials />
      <FAQ />
      <Download />
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;