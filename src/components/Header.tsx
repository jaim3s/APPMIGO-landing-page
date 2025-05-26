import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#007550] dark:text-[#36a558] flex items-center">
              <span className="mr-2 bg-[#007550] dark:bg-[#36a558] text-white p-1 rounded">APP</span>
              <span className={isScrolled ? 'text-[#007550] dark:text-[#36a558]' : 'text-white'}>MIGO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } hover:text-[#36a558] transition-colors duration-300`}
            >
              Características
            </a>
            <a
              href="#app"
              className={`${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } hover:text-[#36a558] transition-colors duration-300`}
            >
              APP
            </a>
            <a
              href="#testimonials"
              className={`${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } hover:text-[#36a558] transition-colors duration-300`}
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className={`${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } hover:text-[#36a558] transition-colors duration-300`}
            >
              FAQ
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              } transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="#download"
              className="bg-[#36a558] text-white px-4 py-2 rounded-md hover:bg-[#2a8241] transition-colors duration-300"
            >
              Descargar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              } transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`${
                isScrolled ? 'text-[#007550] dark:text-[#36a558]' : 'text-white'
              } focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 rounded-lg mt-4 p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-[#36a558] dark:hover:text-[#36a558] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#app"
                className="text-gray-700 dark:text-gray-300 hover:text-[#36a558] dark:hover:text-[#36a558] transition-colors duration-300"
                onClick={toggleMenu}
              >
                App
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 dark:text-gray-300 hover:text-[#36a558] dark:hover:text-[#36a558] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-700 dark:text-gray-300 hover:text-[#36a558] dark:hover:text-[#36a558] transition-colors duration-300"
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <a
                href="#download"
                className="bg-[#36a558] text-white px-4 py-2 rounded-md hover:bg-[#2a8241] transition-colors duration-300 text-center"
                onClick={toggleMenu}
              >
                Descargar
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;