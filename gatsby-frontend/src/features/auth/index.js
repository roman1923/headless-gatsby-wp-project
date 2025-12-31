// Auth feature - managing authentication state
import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { trackEvent } from '../../utils/track'

// Auth context
const AuthContext = createContext()

// Auth actions
const AUTH_ACTIONS = {
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  LOGOUT: 'LOGOUT',
  SET_TOKEN: 'SET_TOKEN'
}

// Initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  role: null
}

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        loading: false,
        error: null
      }
    
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    case AUTH_ACTIONS.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...initialState,
        loading: false
      }
    
    default:
      return state
  }
}

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      dispatch({ type: AUTH_ACTIONS.SET_TOKEN, payload: token })
      // Validate token and get user data
      validateToken(token)
    }
  }, [])

  // Actions
  const setUser = (user) => {
    dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user })
    trackEvent('User Authenticated', { userId: user?.id, role: user?.role })
  }

  const setLoading = (loading) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: loading })
  }

  const setError = (error) => {
    dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error })
  }

  const setToken = (token) => {
    dispatch({ type: AUTH_ACTIONS.SET_TOKEN, payload: token })
    if (token) {
      localStorage.setItem('auth_token', token)
    } else {
      localStorage.removeItem('auth_token')
    }
  }

  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT })
    localStorage.removeItem('auth_token')
    trackEvent('User Logged Out')
  }

  const login = async (email, password) => {
    try {
      setLoading(true)
      setError(null)

      // Simulate API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      setToken(data.token)
      setUser(data.user)
      
      trackEvent('Login Success', { userId: data.user.id })
    } catch (error) {
      setError(error.message)
      trackEvent('Login Failed', { error: error.message })
    }
  }

  const validateToken = async (token) => {
    try {
      setLoading(true)
      
      const response = await fetch('/api/auth/validate', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const user = await response.json()
        setUser(user)
      } else {
        logout()
      }
    } catch (error) {
      logout()
    }
  }

  const hasRole = (requiredRole) => {
    return state.user?.role === requiredRole
  }

  const hasPermission = (permission) => {
    if (!state.user) return false
    return state.user.permissions?.includes(permission) || false
  }

  const value = {
    ...state,
    setUser,
    setLoading,
    setError,
    setToken,
    logout,
    login,
    validateToken,
    hasRole,
    hasPermission
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Auth hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
