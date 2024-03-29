import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'
import Profile from './pages/Profile'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
    <GlobalStyles/>
    <Profile/>
    </ThemeProvider>
  </React.StrictMode>
)
