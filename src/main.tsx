import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'
import SignUp from './pages/SignUp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
    <GlobalStyles/>
    <SignUp/>
    </ThemeProvider>
  </React.StrictMode>
)
