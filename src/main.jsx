import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Earth from './earth';
import planetTexture from "./img/map_h.jpg";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Earth class="" planetTexture={planetTexture}/>
    
  </React.StrictMode>,
)
