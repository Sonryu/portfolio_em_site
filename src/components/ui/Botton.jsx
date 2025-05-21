import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow hover:shadow-md',
    secondary: 'border-2 border-primary text-primary hover:bg-primary/10 dark:border-primary-light dark:text-primary-light',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800'
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool
}

export default Button