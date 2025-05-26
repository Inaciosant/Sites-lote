/* eslint-disable no-unused-vars */
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo_ARL.png';

export default function Footer() {
    return (
      <footer className="relative bg-white text-[#04649c] border-t border-[#04649c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Logo e Endereços */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-16 w-auto opacity-90"
                />
              </div>
              <div className="space-y-4 text-[#04649c]/90 text-sm">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#04649c] text-xl mt-1" />
                  <div>
                    <p className="font-semibold">Sede:</p>
                    <p>Praça Governador Valadares, nº72<br />Centro, Perdizes-MG</p>
                  </div>
                </div>
  
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#04649c] text-xl mt-1" />
                  <div>
                    <p className="font-semibold">Empreendimento:</p>
                    <p>Rua 25 - Bairro Jardim Madalena</p>
                  </div>
                </div>
              </div>
            </motion.div>
  
            {/* Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <div className="space-y-4 text-[#04649c]/90 text-sm">
                <div className="flex items-center gap-3">
                  <FiPhone className="text-[#04649c] text-xl" />
                  <div>
                    <p>(34) 99108-2879 (Telefone)</p>
                    <p>(34) 99635-2879 (WhatsApp)</p>
                  </div>
                </div>
  
                <div className="flex items-center gap-3">
                  <FiMail className="text-[#04649c] text-xl" />
                  <span>engenharia.arl@gmail.com</span>
                </div>
              </div>
            </motion.div>
  
            {/* Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h3 className="text-lg font-semibold mb-6">Redes Sociais</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-6 text-[#04649c]/90 text-sm">
                  {[
                    {
                      icon: FiInstagram,
                      name: '@arlempreendimentos',
                      url: 'https://www.instagram.com/arlempreendimentos/'
                    },
                    {
                      icon: FiFacebook,
                      name: '@arlempreendimentos',
                      url: 'https://www.facebook.com/arlempreendimentos/'
                    }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#04649c] font-medium transition-colors"
                    >
                      <social.icon className="text-2xl" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
  
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#04649c] text-white px-6 py-3 rounded-lg
                  hover:bg-[#035786] transition-all duration-300 text-lg font-medium"
                  onClick={() =>
                    window.open("https://wa.me/5534996352879?text=Olá%2C%20gostaria%20de%20mais%20informações!", "_blank")
                  }
                >
                  <FaWhatsapp className="text-xl" />
                  Fale pelo WhatsApp
                </motion.button>
              </div>
            </motion.div>
          </div>
  
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="border-t border-[#04649c]/20 mt-12 pt-8 text-center text-[#04649c]/80 text-sm"
          >
            <p>
              © {new Date().getFullYear()} Ibsystem. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    );
  }
