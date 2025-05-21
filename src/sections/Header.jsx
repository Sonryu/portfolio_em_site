import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

export default function Header({ darkMode, setDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-xl font-bold text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary transition-colors"
        >
          SonRyuu
        </NavLink>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink 
              key={item.href}
              to={item.href}
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-secondary font-semibold' 
                    : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Controles */}
        <div className="flex items-center gap-4">
          {/* Botão Tema */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Alternar tema"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          {/* Botão Mobile */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu mobile"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => 
                  `px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-secondary font-semibold' 
                      : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}