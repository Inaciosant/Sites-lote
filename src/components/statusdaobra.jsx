/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FiCheckCircle, FiClock, FiZap, FiDroplet, FiLayout } from 'react-icons/fi'

const mockConstructionData = [
  { 
    phase: 'Terraplanagem',
    progress: 100,
    status: 'completed',
    start: '2023-09',
    end: '2023-11'
  },
  {
    phase: 'Pavimentação',
    progress: 85,
    status: 'in-progress',
    start: '2023-12',
    end: '2024-03'
  },
  {
    phase: 'Rede Elétrica',
    progress: 45,
    status: 'in-progress',
    start: '2024-02',
    end: '2024-04'
  },
  {
    phase: 'Sistema de Água',
    progress: 20,
    status: 'started',
    start: '2024-03',
    end: '2024-05'
  },
  {
    phase: 'Marcação de Lotes',
    progress: 0,
    status: 'planned',
    start: '2024-04',
    end: '2024-06'
  }
]

const statusColors = {
  completed: '#10B981',
  'in-progress': '#3B82F6',
  started: '#F59E0B',
  planned: '#6B7280'
}

const ProgressIcon = ({ phase }) => {
  const icons = {
    'Terraplanagem': <FiCheckCircle className="text-xl"/>,
    'Pavimentação': <FiLayout className="text-xl"/>,
    'Rede Elétrica': <FiZap className="text-xl"/>,
    'Sistema de Água': <FiDroplet className="text-xl"/>,
    'Marcação de Lotes': <FiClock className="text-xl"/>
  }
  
  return icons[phase] || <FiCheckCircle className="text-xl"/>
}

export default function ConstructionProgress() {
  return (
    <section className="relative bg-white py-24 overflow-hidden" id='status'>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#005A87] mb-12 text-center">
            Andamento da <span className="text-pink-600">Obra</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {mockConstructionData.map((item, index) => (
              <motion.div
                key={item.phase}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg`} style={{ backgroundColor: statusColors[item.status] + '20' }}>
                    <ProgressIcon phase={item.phase} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{item.phase}</h3>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="rounded-full h-2 transition-all duration-500"
                          style={{ 
                            width: `${item.progress}%`,
                            backgroundColor: statusColors[item.status]
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium" style={{ color: statusColors[item.status] }}>
                        {item.progress}%
                      </span>
                    </div>
                    <div className="mt-3 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Início:</span>{' '}
                        {new Date(item.start).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
                      </div>
                      <div>
                        <span className="font-medium">Previsão:</span>{' '}
                        {new Date(item.end).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-600 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Atualizado em: {new Date().toLocaleDateString('pt-BR')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}