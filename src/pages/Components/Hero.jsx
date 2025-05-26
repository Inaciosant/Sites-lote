/* eslint-disable no-unused-vars */
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { MdShoppingCart, MdSell, MdHomeWork, MdPlumbing, MdEngineering, MdArchitecture } from 'react-icons/md';
import { FaPhone } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { motion } from 'framer-motion';
import image from '../assets/image.webp';
import { useState } from 'react';
import AlertaSucesso from './Alert';
import axios from 'axios';
import { useAlert } from '../../contexts/AlertContext';
export default function Hero() {
  const { showAlert } = useAlert();
  const [formData, setFormData] = useState({
    primeironome: '',
    email: '',
    celular: '',
  });
  const [enviado, setEnviado] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validação básica dos campos
    if (!formData.primeironome.trim() || !formData.email.trim() || !formData.celular.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }
  
    // Validação de e-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um e-mail válido');
      return;
    }
  
    // Validação de celular (formato brasileiro básico)
    const celularRegex = /^\d{10,11}$/;
    if (!celularRegex.test(formData.celular.replace(/\D/g, ''))) {
      alert('Por favor, insira um número de celular válido');
      return;
    }
  
    const data = {
      primeironome: formData.primeironome,
      email: formData.email,
      celular: formData.celular,
      obs: 'vim do site',
      interesse: '1',
      // Campos default requeridos pelo PHP
      crm_categoria: '2',
      crm_origem: 'site',
      // Adicione outros campos necessários com valores default
    };
  
    try {
      const response = await axios.post(
        'https://arlempreendimentos.ibsystem.com.br/recebe_dados_site.php',
        new URLSearchParams(data).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
  
      // Verificação genérica de resposta bem sucedida
      if (response.status === 200) {
        setFormData({ primeironome: '', email: '', celular: '' });
        showAlert();
      } else {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro completo:', error);
      alert(error.message);
    }
  };

  return (
    <section className="w-full h-[90vh] bg-gradient-to-br from-[#eaf4ff] to-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
      {/* Texto */}
      {enviado && <AlertaSucesso />}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
          Transformando <span className="text-[#04649c]">Sonhos</span><br />
          em <span className="underline decoration-[#04649c]/60">Realidade</span>
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Soluções completas em projetos arquitetônicos, estruturais e hidráulicos.
        </p>
        <form onSubmit={handleSubmit}>

        <div className="flex flex-col md:flex-row items-center max-w-2xl mx-auto md:mx-0 gap-4">
  <div className="w-full space-y-4 flex-grow">
  <div className="relative w-full">
  <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
  <input
    name='primeironome'
    type="text"
    placeholder="Digite seu nome completo"
    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#04649c]/50 shadow-sm"
    pattern="[A-Za-zÀ-ú\s]{3,}"
    title="Digite seu nome completo (mínimo 3 caracteres)"
    required
    minLength="3"
    onChange={handleChange}
    value={formData.primeironome}
    onBlur={(e) => {
      if (!/^[A-Za-zÀ-ú\s]{3,}$/.test(e.target.value)) {
        e.target.setCustomValidity('Nome inválido');
      } else {
        e.target.setCustomValidity('');
      }
    }}
  />
</div>

<div className="flex flex-col md:flex-row gap-4">
  {/* Celular com formatação automática */}
  <div className="relative w-full md:w-1/2">
    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      name='celular'
      type="tel"
      placeholder="(99) 99999-9999"
      className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#04649c]/50 shadow-sm"
      required
      pattern="\(\d{2}\) \d{4,5}-\d{4}"
            title="Digite um número válido com DDD"
      value={formData.celular}
      onChange={handleChange}
      onInput={(e) => {
        const numbers = e.target.value.replace(/\D/g, '');
        const match = numbers.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        e.target.value = !match[2] 
          ? numbers 
          : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
      }}
      maxLength="15"
    />
  </div>

  {/* Email com validação em tempo real */}
  <div className="relative w-full md:w-1/2">
    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      name='email'
      type="email"
      placeholder="seu.email@exemplo.com"
      className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#04649c]/50 shadow-sm"
      required
      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
      title="Digite um email válido"
      value={formData.email}
      onChange={handleChange}
      onBlur={(e) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
          e.target.setCustomValidity('Email inválido');
        } else {
          e.target.setCustomValidity('');
        }
      }}
    />
  </div>
</div>

  </div>

  {/* Botão */}
  <button className="w-full md:w-auto px-6 py-3 mt-5 mx-auto bg-[#04649c] text-white rounded-lg hover:bg-[#03537d] transition flex items-center justify-center gap-2 shadow-md" >
    Inscrever <FiArrowRight />
  </button>
</div>
</form>



      </motion.div>

      {/* Imagem e Tags */}
      <motion.div
        className="relative hidden md:block md:w-1/2  ml-2"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
  src="https://images.pexels.com/photos/11021173/pexels-photo-11021173.jpeg"
  alt="Projeto de Engenharia"
  className="rounded-3xl shadow-2xl w-full object-cover h-[28rem]"
/>



        {/* Floating tags */}
        <FloatingTag
          icon={<MdArchitecture className="text-xl"/>}
          text=" Projetos Arquitetônicos"
          position="top-12 left-8"
        />
        <FloatingTag
          icon={<MdEngineering className="text-xl"/>}
          text=" Projetos Estruturais"
          position="top-12 right-8"
        />
        <FloatingTag
          icon={<MdPlumbing className="text-xl"/>}
          text=" Projetos  Hidráulicos"
          position="bottom-12 left-1/2 -translate-x-1/2"
        />
      </motion.div>
    </section>
  );
}

// FloatingTag Component
const FloatingTag = ({ icon, text, position }) => {
  return (
    <motion.div
      className={`absolute ${position} px-5 py-3 rounded-2xl flex items-center gap-3 text-gray-800 font-semibold
                  bg-white/20 backdrop-blur-lg border border-white/30 shadow-glass
                  hover:bg-white/30 hover:shadow-glass-hover transition-all`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {icon}
      <span className="text-sm">{text}</span>
    </motion.div>
  );
};
