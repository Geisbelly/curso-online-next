
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-flashblue/95 backdrop-blur-md shadow-lg' 
          : 'bg-flashdark/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold text-white code-font">
              Flash<span className="text-glow text-flashblue-light">Clip</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/sobre" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre
            </Link>
            <Link 
              to="/cursos" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Cursos
            </Link>
            <Link 
              to="/cronograma" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Cronograma
            </Link>
            <Link 
              to="/patrocinadores" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Patrocinadores
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contato
            </Link>
            <Link 
              to="/inscricao" 
              className="btn-primary"
            >
              Inscreva-se
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-flashdark-light border-t border-flashblue/20 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link 
            to="/" 
            className="block text-gray-300 hover:text-white py-2 transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/sobre" 
            className="block text-gray-300 hover:text-white py-2 transition-colors"
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link 
            to="/cursos" 
            className="block text-gray-300 hover:text-white py-2 transition-colors"
            onClick={closeMenu}
          >
            Cursos
          </Link>
          <Link 
            to="/cronograma" 
            className="block text-gray-300 hover:text-white py-2 transition-colors"
            onClick={closeMenu}
          >
            Cronograma
          </Link>
          <Link 
            to="/patrocinadores" 
            className="block text-gray-300 hover:text-white py-2 transition-colors"
            onClick={closeMenu}
          >
            Patrocinadores
          </Link>
          <Link 
            to="/contato" 
            className="block text-gray-300 hover:text-white py-2 transition-colors"
            onClick={closeMenu}
          >
            Contato
          </Link>
          <Link 
            to="/inscricao" 
            className="btn-primary w-full text-center mt-4"
            onClick={closeMenu}
          >
            Inscreva-se
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
