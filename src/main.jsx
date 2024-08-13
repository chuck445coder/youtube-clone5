<<<<<<< HEAD
import React, { StrictMode } from 'react'
=======
import { StrictMode } from 'react'
import React from 'react'
>>>>>>> edd269ce92ef14fa401b6992d3a3d7f334cd6143
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <React.StrictMode>
    <BrowserRouter basename="/youtube-clone/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
  
=======
  <BrowserRouter basename='/youtube-clone/'>
    <App />
  </BrowserRouter>
>>>>>>> edd269ce92ef14fa401b6992d3a3d7f334cd6143
)
