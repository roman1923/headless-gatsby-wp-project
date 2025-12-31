// Search feature - managing search functionality
import React, { createContext, useContext, useReducer, useCallback } from 'react'
import { trackEvent, debounce } from '../../utils/track'

// Search context
const SearchContext = createContext()

// Search actions
const SEARCH_ACTIONS = {
  SET_QUERY: 'SET_QUERY',
  SET_RESULTS: 'SET_RESULTS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_FILTERS: 'SET_FILTERS',
  SET_SUGGESTIONS: 'SET_SUGGESTIONS',
  CLEAR_SEARCH: 'CLEAR_SEARCH'
}

// Initial state
const initialState = {
  query: '',
  results: [],
  suggestions: [],
  loading: false,
  error: null,
  filters: {
    skill: '',
    location: '',
    rating: '',
    experience: ''
  },
  pagination: {
    page: 1,
    perPage: 10,
    total: 0,
    hasNextPage: false,
    hasPreviousPage: false
  },
  searchHistory: []
}

// Search reducer
const searchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_ACTIONS.SET_QUERY:
      return {
        ...state,
        query: action.payload
      }
    
    case SEARCH_ACTIONS.SET_RESULTS:
      return {
        ...state,
        results: action.payload.results || [],
        pagination: { ...state.pagination, ...action.payload.pagination },
        loading: false,
        error: null
      }
    
    case SEARCH_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    
    case SEARCH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    case SEARCH_ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      }
    
    case SEARCH_ACTIONS.SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      }
    
    case SEARCH_ACTIONS.CLEAR_SEARCH:
      return {
        ...state,
        query: '',
        results: [],
        suggestions: [],
        error: null
      }
    
    default:
      return state
  }
}

// Search provider component
export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState)

  // Actions
  const setQuery = (query) => {
    dispatch({ type: SEARCH_ACTIONS.SET_QUERY, payload: query })
  }

  const setResults = (results, pagination = {}) => {
    dispatch({ type: SEARCH_ACTIONS.SET_RESULTS, payload: { results, pagination } })
  }

  const setLoading = (loading) => {
    dispatch({ type: SEARCH_ACTIONS.SET_LOADING, payload: loading })
  }

  const setError = (error) => {
    dispatch({ type: SEARCH_ACTIONS.SET_ERROR, payload: error })
  }

  const setFilters = (filters) => {
    dispatch({ type: SEARCH_ACTIONS.SET_FILTERS, payload: filters })
  }

  const setSuggestions = (suggestions) => {
    dispatch({ type: SEARCH_ACTIONS.SET_SUGGESTIONS, payload: suggestions })
  }

  const clearSearch = () => {
    dispatch({ type: SEARCH_ACTIONS.CLEAR_SEARCH })
  }

  // Search function
  const search = useCallback(async (query, filters = {}) => {
    try {
      setLoading(true)
      setError(null)

      // Track search event
      trackEvent('Search Performed', { query, filters })

      // Simulate API call
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, filters }),
      })

      if (!response.ok) {
        throw new Error('Search failed')
      }

      const data = await response.json()
      setResults(data.results, data.pagination)
      
      // Add to search history
      if (query && !state.searchHistory.includes(query)) {
        const newHistory = [query, ...state.searchHistory].slice(0, 10)
        // Update search history in localStorage
        localStorage.setItem('searchHistory', JSON.stringify(newHistory))
      }

    } catch (error) {
      setError(error.message)
      trackEvent('Search Failed', { error: error.message })
    }
  }, [state.searchHistory])

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query, filters) => {
      if (query.trim()) {
        search(query, filters)
      }
    }, 300),
    [search]
  )

  // Get suggestions
  const getSuggestions = useCallback(async (query) => {
    if (!query.trim()) {
      setSuggestions([])
      return
    }

    try {
      const response = await fetch(`/api/search/suggestions?q=${encodeURIComponent(query)}`)
      if (response.ok) {
        const suggestions = await response.json()
        setSuggestions(suggestions)
      }
    } catch (error) {
      console.warn('Failed to get suggestions:', error)
    }
  }, [])

  // Debounced suggestions
  const debouncedSuggestions = useCallback(
    debounce(getSuggestions, 200),
    [getSuggestions]
  )

  // Clear filters
  const clearFilters = () => {
    setFilters({
      skill: '',
      location: '',
      rating: '',
      experience: ''
    })
  }

  // Load search history
  const loadSearchHistory = () => {
    try {
      const history = localStorage.getItem('searchHistory')
      if (history) {
        return JSON.parse(history)
      }
    } catch (error) {
      console.warn('Failed to load search history:', error)
    }
    return []
  }

  const value = {
    ...state,
    setQuery,
    setResults,
    setLoading,
    setError,
    setFilters,
    setSuggestions,
    clearSearch,
    search,
    debouncedSearch,
    getSuggestions,
    debouncedSuggestions,
    clearFilters,
    loadSearchHistory
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

// Search hook
export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
