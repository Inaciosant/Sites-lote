/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ou use <a href="/parques"> se não usar React Router
import logo from '../assets/logo.png';

export default function EmpreendimentoSection() {
  return (
    <section className="w-full bg-[#f9fafb] py-20 px-6 md:px-20" id='empreendimento'>
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          <span className="text-[#04649c]">Empreendimentos</span> em Destaque
        </h2>

        {/* Card do Empreendimento */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3">
            <img
              src={logo}
              alt="Parque dos Ipês"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-4 md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Parque dos Ipês</h3>
            <p className="text-gray-600">
              Um loteamento planejado com infraestrutura completa, localizado em uma área privilegiada.
              Ideal para quem busca qualidade de vida e valorização.
            </p>

            <Link to="/parques">
              <button className="mt-4 px-6 py-3 bg-[#04649c] text-white rounded-lg hover:bg-[#03537d] transition shadow-md">
                Ver mais
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
