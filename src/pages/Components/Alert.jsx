/* eslint-disable no-unused-vars */
// src/components/AlertaSucesso.js
import { FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAlert } from '../../contexts/AlertContext';

export default function AlertaSucesso() {
  const { alert } = useAlert();

  return (
    <AnimatePresence>
      {alert && (
        <motion.div
          key="global-alert"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-md px-4"
        >
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <FiCheckCircle className="text-gren-600 text-xl flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold">Cadastro realizado com sucesso!</p>
              <p>Nossa equipe entrará em contato em breve.</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}