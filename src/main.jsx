import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './index.jsx'
import { MockAPI } from "./Services/mock.class.js";
import './index.css'

window.$api = new MockAPI();
window.$api.init().then(response => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})

