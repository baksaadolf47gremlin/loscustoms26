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

// Hide splash screen
const splash = document.getElementById('splash')
if (splash) {
  setTimeout(() => {
    splash.style.opacity = '0'
    setTimeout(() => splash.remove(), 600)
  }, 300)
}
