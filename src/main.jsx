import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Index styles
import './App.css';   // App styles
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
