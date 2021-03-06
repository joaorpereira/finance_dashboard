import React from 'react'
import { ThemeProvider } from 'styled-components'
import {  BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyles'
import Main from './template/MainContent/MainContent'
import theme from './styles/theme'

const app: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </Router>
  )
}

export default app
