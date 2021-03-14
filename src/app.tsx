import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'
import theme from './styles/theme'
import MainContent from './template/MainContent/MainContent'
import 'react-toastify/dist/ReactToastify.css';

const app: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <MainContent />
      </ThemeProvider>
    </Router>
  )
}

export default app
