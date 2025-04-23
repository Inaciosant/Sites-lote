/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiMapPin, FiTrendingUp, FiShield, FiArrowRight } from 'react-icons/fi'
import Lottie from 'lottie-react'
import animationData from '../assets/lottie/realestate.json'
import logo from '../assets/logo.png'

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Seção Esquerda - Visual */}
          <motion.div 
            className="relative order-last lg:order-first"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Lottie 
                animationData={animationData} 
                loop={true}
                className="h-[400px]"
              />
              
              
              
            </div>
          </motion.div>

          {/* Seção Direita - Conteúdo */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#005A87] mb-4">
                Excelência em <span className="text-pink-600">Loteamento Urbano</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                No <strong className="text-pink-600">Parque dos Ipês</strong>, combinamos 
                infraestrutura moderna com planejamento estratégico para oferecer 
                a melhor experiência em aquisição de terrenos.
              </p>
            </motion.div>

            {/* Destaques em Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: FiCheckCircle, title: "Infraestrutura Completa", text: "Água, luz e esgoto instalados" },
                { icon: FiTrendingUp, title: "Valorização Garantida", text: "Média de 15% ao ano" },
                { icon: FiMapPin, title: "Localização Privilegiada", text: "Acesso a principais vias" },
                { icon: FiShield, title: "Segurança Total", text: "Sistema de monitoramento 24h" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <item.icon className="text-3xl text-pink-600 mb-4" />
                  <h3 className="text-xl font-semibold text-[#005A87] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Botão com Microinterações */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button className="
                relative
                px-8 py-4
                bg-[#005A87] text-white
                rounded-lg
                font-medium
                overflow-hidden
                group
                hover:bg-[#00466a]
                transition-all
                duration-300
                shadow-lg
                hover:shadow-xl
              ">
                <span className="relative z-10 flex items-center gap-2">
                  Saiba Mais
                  <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elemento Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full pattern-dots-md text-gray-200/50 pointer-events-none" />
    </section>
  )
}