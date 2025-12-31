import React from 'react'

const Select = ({ 
  label,
  error,
  options = [],
  placeholder,
  className = '',
  ...props 
}) => {
  const selectClasses = `form-select ${error ? 'border-red-500 focus:border-red-500' : ''} ${className}`.trim()
  
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
        </label>
      )}
      <select
        className={selectClasses}
        {...props}
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default Select
