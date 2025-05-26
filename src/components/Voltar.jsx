import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function BotaoVoltar() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 w-12 h-12 flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition z-50"
      aria-label="Voltar"
    >
      <FiArrowLeft size={22} />
    </button>
  );
}
