import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Gestor } from './Gestor'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Gestor />
  </BrowserRouter>,
)
