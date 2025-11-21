import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 
        ? darkMode 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-pink-500/20' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : darkMode 
          ? 'bg-black/50' 
          : 'bg-white/50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src="/shevolve-logo.png" 
              alt="SHEvolve Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-bold text-lg transition-colors ${
                darkMode 
                  ? 'text-white hover:text-pink-400' 
                  : 'text-gray-900 hover:text-pink-600'
              }`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('problem')}
              className={`font-bold text-lg transition-colors ${
                darkMode 
                  ? 'text-white hover:text-pink-400' 
                  : 'text-gray-900 hover:text-pink-600'
              }`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className={`font-bold text-lg transition-colors ${
                darkMode 
                  ? 'text-white hover:text-pink-400' 
                  : 'text-gray-900 hover:text-pink-600'
              }`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-bold text-lg transition-colors ${
                darkMode 
                  ? 'text-white hover:text-pink-400' 
                  : 'text-gray-900 hover:text-pink-600'
              }`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              Contact
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all ${
                darkMode 
                  ? 'bg-pink-500 text-white hover:bg-pink-600' 
                  : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-pink-500 text-white"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden pb-6 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-left font-bold text-lg ${
                  darkMode ? 'text-white hover:text-pink-400' : 'text-gray-900 hover:text-pink-600'
                }`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('problem')}
                className={`text-left font-bold text-lg ${
                  darkMode ? 'text-white hover:text-pink-400' : 'text-gray-900 hover:text-pink-600'
                }`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                Problem
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className={`text-left font-bold text-lg ${
                  darkMode ? 'text-white hover:text-pink-400' : 'text-gray-900 hover:text-pink-600'
                }`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                Solution
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-left font-bold text-lg ${
                  darkMode ? 'text-white hover:text-pink-400' : 'text-gray-900 hover:text-pink-600'
                }`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;