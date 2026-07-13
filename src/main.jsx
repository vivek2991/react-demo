import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./Header.jsx"
import App2 from './App-2.jsx'
import App3 from './App-3.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this way you can call another file Header file instead of default App file */}
    {/* Default App is calling */}
    {/* <App /> */}
    {/* <Header /> */}

    {/* This is import export demo file so create new file App-2 and call here and comment default App file above */}
    {/* <App2 /> */}

    {/* JSX in react demo */}
    <App3 />
  </StrictMode>,
)
