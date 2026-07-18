import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./Header.jsx"
import App2 from './App-2.jsx'
import App3 from './App-3.jsx'
import App4 from './App-4.jsx'
import App5 from './App-5.jsx'
import App6 from './App-6.jsx'
import App7 from './App-7.jsx'
import App8 from './App-8.jsx'
import App9 from './App-9.jsx'
import App10 from './App-10.jsx'
import App11 from './App-11.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this way you can call another file Header file instead of default App file */}
    {/* Default App is calling */}
    {/* <App /> */}
    {/* <Header /> */}

    {/* This is import export demo file so create new file App-2 and call here and comment default App file above */}
    {/* <App2 /> */}

    {/* JSX in react demo */}
    {/* <App3 /> */}

    {/* JS Exercise */}
    {/* <App4 /> */}

    {/* JSX with Curly Braces */}
    {/* <App5 /> */}

    {/* Event and function call in React */}
    {/* <App6 /> */}

    {/* State in React JS */}
    {/* <App7 /> */}

    {/* Toggle or Hide Show in React */}
    {/* <App8 /> */}

    {/* Multiple Condition in React */}
    {/* <App9 /> */}

    {/* Props in React */}
    {/* <App10 /> */}

    {/* Get input field value */}
    <App11 />
  </StrictMode>,
)
