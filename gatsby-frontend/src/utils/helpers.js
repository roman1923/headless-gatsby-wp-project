// General helper functions
// Safe utility functions for common operations

// Format date to readable string
export const formatDate = (date, options = {}) => {
  try {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options
    }
    
    if (typeof date === 'string') {
      date = new Date(date)
    }
    
    return new Intl.DateTimeFormat('en-US', defaultOptions).format(date)
  } catch (error) {
    console.warn('Date formatting failed:', error)
    return date.toString()
  }
}

// Format currency
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(amount)
  } catch (error) {
    console.warn('Currency formatting failed:', error)
    return `${currency} ${amount}`
  }
}

// Convert string to slug
export const slugify = (text) => {
  try {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w-]+/g, '')       // Remove all non-word chars
      .replace(/-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '')             // Trim - from end of text
  } catch (error) {
    console.warn('Slugify failed:', error)
    return text.toString()
  }
}

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Check if element is in viewport
export const isInViewport = (element) => {
  try {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  } catch (error) {
    console.warn('Viewport check failed:', error)
    return false
  }
}

// Generate random ID
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

// Safe JSON parse
export const safeJsonParse = (jsonString, defaultValue = null) => {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.warn('JSON parse failed:', error)
    return defaultValue
  }
}

// Safe JSON stringify
export const safeJsonStringify = (obj, defaultValue = '{}') => {
  try {
    return JSON.stringify(obj)
  } catch (error) {
    console.warn('JSON stringify failed:', error)
    return defaultValue
  }
}

// Check if running in browser
export const isBrowser = () => {
  return typeof window !== 'undefined'
}

// Check if running in development
export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development'
}

// Check if running in production
export const isProduction = () => {
  return process.env.NODE_ENV === 'production'
}
