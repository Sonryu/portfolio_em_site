import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const projects = [
  {
    id: 1,
    title: 'Portfólio React',
    description: 'Site pessoal desenvolvido com React.js e Tailwind CSS',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: '/project1.jpg'
  },
  {
    id: 2,
    title: 'API RESTful',
    description: 'API desenvolvida com Node.js e Express para sistema de blog',
    tags: ['Node.js', 'Express', 'MongoDB'],
    image: '/project2.jpg'
  },
  {
    id: 3,
    title: 'Aplicativo de Tarefas',
    description: 'Aplicativo para gerenciamento de tarefas diárias',
    tags: ['React Native', 'Firebase'],
    image: '/project3.jpg'
  }
]

const categories = ['Todos', 'Front-end', 'Back-end', 'Mobile']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => 
          (activeCategory === 'Front-end' && tag.includes('React')) ||
          (activeCategory === 'Back-end' && tag.includes('Node')) ||
          (activeCategory === 'Mobile' && tag.includes('React Native'))
        )
    );  
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Meus <span className="text-primary dark:text-primary-light">Projetos</span>
        </motion.h2>
        
        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'ghost'}
              onClick={() => setActiveCategory(category)}
              className="px-4 py-2 text-sm"
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="secondary" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}