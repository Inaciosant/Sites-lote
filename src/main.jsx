import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App' // (1)
import './index.css'
import Rotas from './Route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </StrictMode>
)