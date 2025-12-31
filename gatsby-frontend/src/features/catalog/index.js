// Catalog feature - managing developers catalog
import React, { createContext, useContext, useReducer } from 'react'
import { trackEvent } from '../../utils/track'

// Catalog context
const CatalogContext = createContext()

// Catalog actions
const CATALOG_ACTIONS = {
  SET_DEVELOPERS: 'SET_DEVELOPERS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_FILTERS: 'SET_FILTERS',
  SET_SORT: 'SET_SORT',
  SET_PAGINATION: 'SET_PAGINATION'
}

// Initial state
const initialState = {
  developers: [],
  loading: false,
  error: null,
  filters: {
    skill: '',
    location: '',
    rating: ''
  },
  sort: {
    field: 'date',
    order: 'DESC'
  },
  pagination: {
    page: 1,
    perPage: 10,
    total: 0,
    hasNextPage: false,
    hasPreviousPage: false
  }
}

// Catalog reducer
const catalogReducer = (state, action) => {
  switch (action.type) {
    case CATALOG_ACTIONS.SET_DEVELOPERS:
      return {
        ...state,
        developers: action.payload,
        loading: false,
        error: null
      }
    
    case CATALOG_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    
    case CATALOG_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    case CATALOG_ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      }
    
    case CATALOG_ACTIONS.SET_SORT:
      return {
        ...state,
        sort: { ...state.sort, ...action.payload }
      }
    
    case CATALOG_ACTIONS.SET_PAGINATION:
      return {
        ...state,
        pagination: { ...state.pagination, ...action.payload }
      }
    
    default:
      return state
  }
}

// Catalog provider component
export const CatalogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(catalogReducer, initialState)

  // Actions
  const setDevelopers = (developers) => {
    dispatch({ type: CATALOG_ACTIONS.SET_DEVELOPERS, payload: developers })
  }

  const setLoading = (loading) => {
    dispatch({ type: CATALOG_ACTIONS.SET_LOADING, payload: loading })
  }

  const setError = (error) => {
    dispatch({ type: CATALOG_ACTIONS.SET_ERROR, payload: error })
  }

  const setFilters = (filters) => {
    dispatch({ type: CATALOG_ACTIONS.SET_FILTERS, payload: filters })
    trackEvent('Filter Applied', filters)
  }

  const setSort = (sort) => {
    dispatch({ type: CATALOG_ACTIONS.SET_SORT, payload: sort })
    trackEvent('Sort Applied', sort)
  }

  const setPagination = (pagination) => {
    dispatch({ type: CATALOG_ACTIONS.SET_PAGINATION, payload: pagination })
  }

  const clearFilters = () => {
    setFilters({ skill: '', location: '', rating: '' })
  }

  const value = {
    ...state,
    setDevelopers,
    setLoading,
    setError,
    setFilters,
    setSort,
    setPagination,
    clearFilters
  }

  return (
    <CatalogContext.Provider value={value}>
      {children}
    </CatalogContext.Provider>
  )
}

// Catalog hook
export const useCatalog = () => {
  const context = useContext(CatalogContext)
  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider')
  }
  return context
}
