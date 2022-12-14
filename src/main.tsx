import './index.css'

import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeConfig } from './config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <AppRouter />
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>
)
