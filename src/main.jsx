import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; for react bootstrap
import { BrowserRouter } from 'react-router-dom' /* for navigation */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter> {/* need for navigation */}

      <App />

    </BrowserRouter>

  </React.StrictMode>,
)
