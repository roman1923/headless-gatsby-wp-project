import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'default',
  ...props 
}) => {
  const baseClasses = 'bg-white shadow-lg rounded-xl border border-gray-100 transition-all duration-300 ease-in-out'
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:border-gray-200' : ''
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`.trim()
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
