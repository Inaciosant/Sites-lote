/* eslint-disable no-unused-vars */
import { FiMapPin, FiBook, FiPlusSquare, FiShoppingBag } from 'react-icons/fi'
import { FaBus } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function LocationSection() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#005A87] mb-4"
          >
            Localização Privilegiada
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Com fácil acesso às principais vias e serviços essenciais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pontos de Interesse */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: FiBook,
                title: "Escola Municipal",
                delay: 0.2
              },
              {
                icon: FiPlusSquare,
                title: "Posto de Saúde",
                
                delay: 0.4
              },
              {
                icon: FiShoppingBag,
                title: "Centro Comercial",
                
                delay: 0.6
              },
              {
                icon: FaBus,
                title: "Rodoviária",
                delay: 0.8
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <item.icon className="text-3xl text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-[#005A87] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white"
          >
            <iframe
              title="Localização do Empreendimento"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6192.851669902733!2d-47.30330058008513!3d-19.332475250574003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua%2025%20-%20Bairro%20Jardim%20Madalena%20Perdizes%20mg!5e1!3m2!1sen!2sbr!4v1745419909061!5m2!1sen!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}