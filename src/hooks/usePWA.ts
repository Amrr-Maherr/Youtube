import { useEffect } from 'react'

export function usePWA() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('✅ SW registered:', registration.scope)
          })
          .catch(error => {
            console.error('❌ SW registration failed:', error)
          })
      })
    }
  }, [])

  // Listen for updates
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available - dispatch custom event
                window.dispatchEvent(new CustomEvent('swUpdate', { detail: { registration } }))
              }
            })
          }
        })
      })
    }
  }, [])

  return null
}
