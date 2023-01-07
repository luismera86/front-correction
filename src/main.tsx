import './index.css'

import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeConfig } from './config'
import { store } from './redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeConfig>
          <AppRouter />
        </ThemeConfig>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
