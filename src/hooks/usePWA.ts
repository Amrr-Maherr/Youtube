import { useEffect } from 'react'

export function usePWA() {
  useEffect(() => {
    // Register service worker (only in production)
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
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

  // Listen for updates (only in production)
  useEffect(() => {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
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
