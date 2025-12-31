// Developer feature - managing individual developer data
import React, { createContext, useContext, useReducer } from 'react'
import { trackEvent } from '../../utils/track'

// Developer context
const DeveloperContext = createContext()

// Developer actions
const DEVELOPER_ACTIONS = {
  SET_DEVELOPER: 'SET_DEVELOPER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_VIEWS: 'SET_VIEWS',
  SET_FAVORITE: 'SET_FAVORITE'
}

// Initial state
const initialState = {
  developer: null,
  loading: false,
  error: null,
  views: 0,
  isFavorite: false
}

// Developer reducer
const developerReducer = (state, action) => {
  switch (action.type) {
    case DEVELOPER_ACTIONS.SET_DEVELOPER:
      return {
        ...state,
        developer: action.payload,
        loading: false,
        error: null
      }
    
    case DEVELOPER_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    
    case DEVELOPER_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    case DEVELOPER_ACTIONS.SET_VIEWS:
      return {
        ...state,
        views: action.payload
      }
    
    case DEVELOPER_ACTIONS.SET_FAVORITE:
      return {
        ...state,
        isFavorite: action.payload
      }
    
    default:
      return state
  }
}

// Developer provider component
export const DeveloperProvider = ({ children }) => {
  const [state, dispatch] = useReducer(developerReducer, initialState)

  // Actions
  const setDeveloper = (developer) => {
    dispatch({ type: DEVELOPER_ACTIONS.SET_DEVELOPER, payload: developer })
    trackEvent('Developer Loaded', { developerId: developer?.id })
  }

  const setLoading = (loading) => {
    dispatch({ type: DEVELOPER_ACTIONS.SET_LOADING, payload: loading })
  }

  const setError = (error) => {
    dispatch({ type: DEVELOPER_ACTIONS.SET_ERROR, payload: error })
  }

  const setViews = (views) => {
    dispatch({ type: DEVELOPER_ACTIONS.SET_VIEWS, payload: views })
  }

  const setFavorite = (isFavorite) => {
    dispatch({ type: DEVELOPER_ACTIONS.SET_FAVORITE, payload: isFavorite })
    trackEvent('Developer Favorite Toggled', { 
      developerId: state.developer?.id,
      isFavorite 
    })
  }

  const incrementViews = () => {
    const newViews = state.views + 1
    setViews(newViews)
    trackEvent('Developer View Incremented', { 
      developerId: state.developer?.id,
      views: newViews 
    })
  }

  const toggleFavorite = () => {
    setFavorite(!state.isFavorite)
  }

  const value = {
    ...state,
    setDeveloper,
    setLoading,
    setError,
    setViews,
    setFavorite,
    incrementViews,
    toggleFavorite
  }

  return (
    <DeveloperContext.Provider value={value}>
      {children}
    </DeveloperContext.Provider>
  )
}

// Developer hook
export const useDeveloper = () => {
  const context = useContext(DeveloperContext)
  if (!context) {
    throw new Error('useDeveloper must be used within a DeveloperProvider')
  }
  return context
}
