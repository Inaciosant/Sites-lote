/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FiArrowDownRight, FiCheckCircle } from 'react-icons/fi'
import logo from '../assets/logo.png'
import heroImage from '../assets/009.webp'

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden" id='home'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-20 w-auto mb-6 opacity-90"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block text-pink-600">Viva com estilo</span>
              Seu novo lar espera por você
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Descubra unidades exclusivas com acabamento premium e localização privilegiada. 
              <span className="block mt-2 font-medium">Pronto para morar - a partir de R$ 580.000</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg
                          hover:bg-pink-700 transition-all duration-300 text-lg font-medium"
              >
                Agendar Visita
                <FiArrowDownRight className="text-xl" />
              </motion.button>

              <button className="
                flex items-center gap-2 px-8 py-4 text-gray-900 
                hover:bg-gray-100 transition-all duration-300 
                rounded-lg text-lg font-medium border border-gray-300
              ">
                <FiCheckCircle className="text-pink-600" />
                Aceitamos financiamento
              </button>
            </div>

            <div className="flex gap-6 text-gray-600">
              <div className="pr-6 border-r border-gray-200">
                <span className="block text-2xl font-bold text-pink-600">+120</span>
                <span className="text-sm">Lotes</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-pink-600">4.9</span>
                <span className="text-sm">Avaliação dos Moradores</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt="Interior moderno"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow">
              <span className="block text-xs text-gray-500">Disponível</span>
              <span className="text-lg font-semibold text-pink-600">xxxxx metros</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 pattern-dots-md text-pink-100/50" />
    </header>
  )
}