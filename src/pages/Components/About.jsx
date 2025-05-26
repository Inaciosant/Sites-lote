/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import logoCaixa from '../assets/bancos/caixa.svg';
import logoBB from '../assets/bancos/banco-do-brasil.svg';
import logo from '../assets/logo_ARL.png';

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-20" id='sobre'>
      <motion.div
        className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Seção Cabeçalho */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-[#04649c] rounded-full p-3 md:p-4">
              <img 
                src={logo} 
                alt="ARL Engenharia" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
          
          <div className="md:col-span-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Sobre a <span className="text-[#04649c]">ARL Empreendimentos</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Com mais de uma década de excelência no mercado, a ARL Engenharia consolida-se como referência 
              em soluções integradas para o setor imobiliário. Combinamos expertise técnica com inovação para 
              entregar projetos personalizados e transações seguras.
            </p>
          </div>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Engenharia e Projetos */}
          <div className="bg-[#f8fafc] p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[#04649c] mb-4 md:mb-6 border-b-2 border-[#04649c] pb-3">
              Engenharia e Projetos
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Projetos Arquitetônicos Executivos
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Análise Estrutural Avançada
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Sistemas Prediais Integrados
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Regularização e Laudos Técnicos
              </li>
            </ul>
          </div>

          {/* Gestão Imobiliária */}
          <div className="bg-[#f8fafc] p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[#04649c] mb-4 md:mb-6 border-b-2 border-[#04649c] pb-3">
              Gestão Imobiliária
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Assessoria Completa em Transações
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Desenvolvimento de Loteamentos
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Gestão de Patrimônio
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#04649c] rounded-full" />
                Consultoria Jurídica Integrada
              </li>
            </ul>
          </div>

          {/* Parcerias Financeiras */}
          <div className="bg-[#04649c] p-6 md:p-8 rounded-xl text-white shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 border-b-2 border-white pb-3">
              Parcerias Financeiras
            </h3>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="py-4 md:py-6"
              breakpoints={{
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 2 }
              }}
            >
              <SwiperSlide>
                <div className="bg-white p-4 rounded-lg flex items-center justify-center h-20">
                  <img src={logoCaixa} alt="Caixa Econômica" className="h-12 object-contain" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-4 rounded-lg flex items-center justify-center h-20">
                  <img src={logoBB} alt="Banco do Brasil" className="h-12 object-contain" />
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="mt-4 md:mt-6 text-xs md:text-sm opacity-90">
              Parcerias estratégicas com as principais instituições financeiras para melhores condições 
              de financiamento imobiliário.
            </p>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center mt-8 md:mt-12">
          <motion.div 
            className="p-4 md:p-6 bg-white rounded-lg shadow-sm"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl text-[#04649c] mb-2 md:mb-4">10+</div>
            <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Anos de Experiência</h4>
            <p className="text-sm text-gray-600">Atuando no mercado imobiliário</p>
          </motion.div>

          <motion.div 
            className="p-4 md:p-6 bg-white rounded-lg shadow-sm"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl text-[#04649c] mb-2 md:mb-4">500+</div>
            <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Projetos Entregues</h4>
            <p className="text-sm text-gray-600">Soluções personalizadas</p>
          </motion.div>

          <motion.div 
            className="p-4 md:p-6 bg-white rounded-lg shadow-sm"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl text-[#04649c] mb-2 md:mb-4">100%</div>
            <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Satisfação</h4>
            <p className="text-sm text-gray-600">Clientes satisfeitos</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}