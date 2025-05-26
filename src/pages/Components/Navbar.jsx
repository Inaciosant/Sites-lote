/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`w-full fixed top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500
        ${scrolled ? 'bg-white shadow-md backdrop-blur-0' : 'bg-white/30 backdrop-blur-xl'}
      `}
    >
      {/* Logo */}
      <div className="text-xl font-bold text-[#04649c] tracking-tight">
        ARL <span className="font-medium text-gray-800">Empreendimentos</span>
      </div>

      {/* Menu Hamburguer Mobile */}
      <button
        className="md:hidden text-2xl text-[#04649c]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#empreendimento" className="hover:text-blue-600 transition">
          Empreendimentos
        </a>
        <a href="#sobre" className="hover:text-blue-600 transition">
          Sobre Nós
        </a>
      </nav>

      {/* Ícones Sociais Desktop */}
      <div className="hidden md:flex items-center gap-4 text-[#04649c] text-lg">
        <a href="https://instagram.com/arlempreendimentos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
          <FaInstagram />
        </a>
        <a href="https://wa.me/5534996352879?text=Olá%2C%20gostaria%20de%20mais%20informações!" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com/arlempreendimentos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
          <FaFacebookF />
        </a>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 right-0 w-50 h-screen bg-white z-50 p-6 shadow-xl"
          >
            <div className="flex flex-col items-center gap-8 h-full">
              {/* Links do Menu */}
              <nav className="flex flex-col gap-6 text-gray-700 font-medium text-center w-full">
                <a 
                  href="#empreendimento" 
                  className="hover:text-blue-600 transition py-2 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Empreendimentos
                </a>
                <a 
                  href="#sobre" 
                  className="hover:text-blue-600 transition py-2 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </a>
              </nav>

              {/* Ícones Sociais Mobile */}
              <div className="flex items-center gap-6 text-[#04649c] text-2xl mt-auto">
                <a href="https://instagram.com/arlempreendimentos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/5534996352879?text=Olá%2C%20gostaria%20de%20mais%20informações!" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                  <FaWhatsapp />
                </a>
                <a href="https://facebook.com/arlempreendimentos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}