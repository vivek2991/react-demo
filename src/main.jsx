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
import App12 from './App-12.jsx'
import App13 from './App-13.jsx'
import App14 from './App-14.jsx'
import App15 from './App-15.jsx'
import App16 from './App-16.jsx'

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
    {/* <App11 /> */}

    {/* Controlled Component in React */}
    {/* <App12 /> */}

    {/* Handle Checkbox in React */}
    {/* <App13 /> */}

    {/* Handle Radio and Dropdown in React */}
    {/* <App14 /> */}

    {/* Loop in JSX with Map Function in React */}
    {/* <App15 /> */}

    {/* Reuse Component in Loop */}
    <App16 />
  </StrictMode>,
)
