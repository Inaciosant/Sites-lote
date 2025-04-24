/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiMapPin, FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi'
import logo from '../assets/logo.png'
import { FaWhatsapp } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-pink-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-600">
                <FiMapPin className="text-pink-600 text-xl mt-1" />
                <div>
                  <p className="font-medium">Sede:</p>
                  <p>Praça Governador Valadares, nº72<br />Centro, Perdizes-MG</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-600">
                <FiMapPin className="text-pink-600 text-xl mt-1" />
                <div>
                  <p className="font-medium">Empreendimento:</p>
                  <p>Rua 25 - Bairro Jardim Madalena</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <FiPhone className="text-pink-600 text-xl" />
                <div>
                  <p>(34) 99108-2879 (Telefone)</p>
                  <p>(34) 99635-2879 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FiMail className="text-pink-600 text-xl" />
                <span>engenharia.arl@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Redes Sociais</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
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
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors cursor-pointer"
                  >
                    <social.icon className="text-2xl" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg
            hover:bg-pink-700 transition-all duration-300 text-lg font-medium"
                onClick={() =>
                  window.open("https://wa.me/5534996352879?text=Olá%2C%20gostaria%20de%20mais%20informações!", "_blank")
                }
              >
                <FaWhatsapp  className="text-xl" />
                Fale pelo WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600"
        >
          <p>
            © {new Date().getFullYear()} Ibsystem. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>

      <div className="absolute pattern-dots-md text-pink-100/50" />
    </footer>
  )
}