/* eslint-disable no-unused-vars */

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiSend, FiLoader } from 'react-icons/fi';
import { useState } from 'react';

export default function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm();

  const [phone, setPhone] = useState('');

  // Função para formatar o telefone
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    let formatted = '';
    
    if (numbers.length > 0) {
      formatted += '(' + numbers.substring(0, 2);
    }
    if (numbers.length > 2) {
      formatted += ') ' + numbers.substring(2, 7);
    }
    if (numbers.length > 7) {
      formatted += '-' + numbers.substring(7, 11);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const onSubmit = async (data) => {
    const fullData = {
      ...data,
      phone: phone.replace(/\D/g, '') // Remove a máscara para salvar
    };
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(fullData);
    reset();
    setPhone('');
  };

  return (
    <section className="bg-gradient-to-br from-[#005A87] to-[#003953] py-20 px-4 sm:px-6 lg:px-8" id='contact'>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12"
        >
          <h2 className="text-3xl font-bold text-[#005A87] mb-6 text-center">
            Receba Mais Informações
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Campo Nome */}
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                <FiUser className="inline mr-2 text-[#005A87]" />
                Nome Completo
              </label>
              <input
                id="name"
                {...register('name', { required: 'Campo obrigatório' })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#005A87] focus:ring-2 focus:ring-[#005A87]/50`}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                <FiMail className="inline mr-2 text-[#005A87]" />
                E-mail
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'E-mail inválido'
                  }
                })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#005A87] focus:ring-2 focus:ring-[#005A87]/50`}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Campo Telefone com Máscara Manual */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                <FiPhone className="inline mr-2 text-[#005A87]" />
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#005A87] focus:ring-2 focus:ring-[#005A87]/50`}
                placeholder="(99) 99999-9999"
                {...register('phone', {
                  required: 'Campo obrigatório',
                  validate: (value) => {
                    const numbers = value.replace(/\D/g, '');
                    return numbers.length === 11 || 'Número inválido (DDD + 9 dígitos)';
                  }
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Botão de Envio */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#005A87] to-[#004066] text-white py-4 px-6 rounded-lg
                        font-medium text-lg hover:from-[#004066] hover:to-[#005A87] transition-all
                        flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <FiSend />
                  Enviar Informações
                </>
              )}
            </motion.button>
          </form>

          {/* Mensagem de Privacidade */}
          <p className="text-gray-600 text-sm mt-6 text-center">
            Seus dados estão seguros. Não compartilhamos suas informações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}