import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Providers from './providers/providers.tsx'
import { usePWA } from './hooks/usePWA'
import './index.css'
import App from './App.tsx'

function PWAInitializer() {
  usePWA()
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <PWAInitializer />
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>,
)
