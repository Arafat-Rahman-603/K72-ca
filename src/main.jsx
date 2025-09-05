import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import OpenAnimate from './components/openAnimate.jsx'
import NavContext from './context/NavbarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OpenAnimate>
        <NavContext>
          <App />
        </NavContext>
      </OpenAnimate>
    </BrowserRouter>
  </React.StrictMode>,
)
