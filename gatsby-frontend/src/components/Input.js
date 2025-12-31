import React from 'react'

const Input = ({ 
  label,
  error,
  className = '',
  ...props 
}) => {
  const inputClasses = `form-input ${error ? 'border-red-500 focus:border-red-500' : ''} ${className}`.trim()
  
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default Input
