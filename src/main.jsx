import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove splash screen after app mounts
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Hide splash screen instantly
const splash = document.getElementById('splash')
if (splash) {
  splash.style.transition = 'opacity 0.3s ease-out'
  splash.style.opacity = '0'
  setTimeout(() => splash.remove(), 300)
}
