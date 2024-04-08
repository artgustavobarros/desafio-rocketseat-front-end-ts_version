import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { AuthProvider } from './hooks/context/auth'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
    <GlobalStyles/>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
