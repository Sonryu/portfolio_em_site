import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Botton'

export default function Hero() {
  const constraintsRef = useRef(null)
  const [roles] = useState([
    'Desenvolvedor Full Stack',
    'Criador de Conteúdo',
    'Entusiasta de Linux'
  ])
  const [currentRole, setCurrentRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]
      
      setCurrentRole(
        isDeleting
          ? fullText.substring(0, currentRole.length - 1)
          : fullText.substring(0, currentRole.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && currentRole === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentRole, isDeleting, loopNum, roles])

  return (
    <section 
      id="home"
      ref={constraintsRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Fundo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-orange-500/10 dark:from-blue-900/30 dark:to-orange-500/20" />
        
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary dark:border-primary-light overflow-hidden floating"
          >
            <img 
              src="/avatar.jpg" 
              alt="SonRyuu" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Texto */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Olá, eu sou <span className="text-primary dark:text-primary-light">SonRyuu</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-12 mb-6 flex justify-center md:justify-start items-center"
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                {currentRole}
                <span className="type-cursor" />
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >
              <Button 
                variant="primary" 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Meus Projetos
              </Button>
              <Button 
                variant="secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contato
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}