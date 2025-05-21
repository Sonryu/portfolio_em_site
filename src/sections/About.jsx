import { motion } from 'framer-motion'
import { FiCode, FiServer, FiLinux } from 'react-icons/fi'

const skills = [
  { name: 'Front-end', icon: <FiCode />, level: 90 },
  { name: 'Back-end', icon: <FiServer />, level: 85 },
  { name: 'Linux', icon: <FiLinux />, level: 80 }
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Sobre <span className="text-primary dark:text-primary-light">Mim</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Minha Jornada</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sou um desenvolvedor apaixonado por tecnologia e open source. Comecei minha jornada como 
              autodidata no mundo do Linux e desde então venho me especializando em desenvolvimento web.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Além de programar, adoro compartilhar conhecimento criando conteúdo técnico e ajudando 
              a comunidade.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <h3 className="text-2xl font-semibold mb-6">Minhas Habilidades</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-primary dark:text-primary-light">
                        {skill.icon}
                      </span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary dark:bg-primary-light h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}