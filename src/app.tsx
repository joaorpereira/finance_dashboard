import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles'
import theme from './styles/theme'
import MainContent from './template/MainContent/MainContent'

const app: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContent />
      </ThemeProvider>
    </Router>
  )
}

export default app
