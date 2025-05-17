import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BasicContext from './BasicContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicContext>
    <App />
    </BasicContext>
  </StrictMode>,
)
