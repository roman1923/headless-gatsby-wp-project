// Analytics tracking utilities
// Safe implementation that works with existing Amplitude setup

// Track events for analytics
export const trackEvent = (eventName, properties = {}) => {
  try {
    // Check if Amplitude is available
    if (typeof window !== 'undefined' && window.amplitude) {
      window.amplitude.track(eventName, {
        timestamp: new Date().toISOString(),
        url: window.location.href,
        ...properties
      })
    } else {
      // Fallback logging for development
      console.log('Analytics Event:', eventName, properties)
    }
  } catch (error) {
    console.warn('Analytics tracking failed:', error)
  }
}

// Track page views
export const trackPageView = (pageName, properties = {}) => {
  trackEvent('Page View', {
    page: pageName,
    ...properties
  })
}

// Track user interactions
export const trackUserAction = (action, target, properties = {}) => {
  trackEvent('User Action', {
    action,
    target,
    ...properties
  })
}

// Track developer-related events
export const trackDeveloperEvent = (eventType, developerId, properties = {}) => {
  trackEvent('Developer Event', {
    eventType,
    developerId,
    ...properties
  })
}

// Track search events
export const trackSearchEvent = (searchTerm, resultsCount, properties = {}) => {
  trackEvent('Search', {
    searchTerm,
    resultsCount,
    ...properties
  })
}

// Track filter events
export const trackFilterEvent = (filterType, filterValue, properties = {}) => {
  trackEvent('Filter Applied', {
    filterType,
    filterValue,
    ...properties
  })
}
