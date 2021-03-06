import React from 'react'
import Dashboard from './screens/Dashboard'
import GlobalStyle from './styles/GlobalStyles'

const app: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  )
}

export default app

