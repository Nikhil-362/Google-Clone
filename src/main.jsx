import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ResultCP } from './Context/ResultCP'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ResultCP>
    <App />
    </ResultCP>
  </React.StrictMode>,
)
