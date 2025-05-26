/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import mapa from '../assets/loc.png';


export default function Localizacao() {
  return (
    <section className="bg-[#04649c]/5 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto e botão */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#04649c]"
        >
          <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-lg mb-6">
            Estamos localizados na <strong>Praça Governador Valadares, nº72</strong>,
            no <strong>Centro de Perdizes-MG</strong>. Fácil acesso e próximo a
            pontos importantes da cidade.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              window.open('https://www.google.com/maps/place/Praça+Governador+Valadares,+72,+Perdizes+-+MG', '_blank')
            }
            className="inline-flex items-center gap-2 bg-[#04649c] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#035786] transition-all duration-300"
          >
            <FiMapPin className="text-xl" />
            Ver no Google Maps
          </motion.button>
        </motion.div>

        {/* Imagem ilustrativa */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={mapa}
            alt="Mapa da localização"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
