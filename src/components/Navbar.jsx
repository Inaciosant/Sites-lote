import { useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 
        transition-all duration-300
        rounded-2xl backdrop-blur-md shadow-lg border
        ${scrolled ? 'bg-white/80 border-[#F5F5F5]' : 'bg-white/30 border-white/20'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Links centralizados */}
          <div className="flex items-center gap-8 md:gap-10 mx-auto">
            <a
              href="#"
              className="text-[#005A87] hover:text-[#E91E63] transition-colors duration-300 text-base md:text-lg"
            >
              Home
            </a>
            <a
              href="#sobre"
              className="text-[#005A87] hover:text-[#E91E63] transition-colors duration-300 text-base md:text-lg"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-[#005A87] hover:text-[#E91E63] transition-colors duration-300 text-base md:text-lg"
            >
              Contato
            </a>
          </div>

          {/* Ícones sociais */}
          <div className="hidden md:flex items-center gap-5 mr-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005A87] hover:text-[#E91E63] transition-colors duration-300"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005A87] hover:text-[#E91E63] transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}