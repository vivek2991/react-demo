import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./Header.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this way you can call another file Header file instead of default App file */}
    {/* Default App is calling */}
    <App />
    {/* <Header /> */}
  </StrictMode>,
)
