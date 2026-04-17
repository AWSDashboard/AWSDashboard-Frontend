import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js' // Asegúrate de que App.jsx existe en /src
import './index.css'        // Asegúrate de que index.css existe

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)