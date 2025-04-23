/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiBookmark, FiX } from 'react-icons/fi'

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false)
  
  const sections = [
    { id: 'home', title: 'Página Inicial' },
    { id: 'about', title: 'Sobre o Empreendimento' },
    { id: 'location', title: 'Localização' },
    { id: 'gallery', title: 'Galeria' },
    { id: 'contact', title: 'Contato' }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      {/* Botão Flutuante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#005A87] text-white p-4 rounded-full shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX className="text-xl" /> : <FiBookmark className="text-xl" />}
      </motion.button>

      {/* Sidebar Compacta */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="fixed bottom-20 right-6 z-50 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 p-4"
          >
            <div className="flex items-center gap-2 mb-4 text-[#005A87]">
              <FiBookmark className="text-xl" />
              <h3 className="font-medium">Navegação</h3>
            </div>

            <nav>
              <ul className="space-y-3">
                {sections.map((section, index) => (
                  <motion.li
                    key={section.id}
                    whileHover={{ x: 5 }}
                    className="group cursor-pointer"
                    onClick={() => scrollToSection(section.id)}
                  >
                    <div className="flex items-center gap-2 text-gray-600 group-hover:text-[#005A87] transition-colors">
                      <span className="text-xs text-pink-500">0{index + 1}</span>
                      <p className="text-sm">{section.title}</p>
                      <FiArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Clique para navegar
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}