import React from 'react'
import * as S from './styled'

interface ICardLogin {
  children?: React.ReactNode
}

const CardLogin: React.FC<ICardLogin> = ({ children }) => {
  return <S.Card>{children}</S.Card>
}

export default CardLogin
