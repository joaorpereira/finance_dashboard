import React from 'react'
import * as S from './styled'

interface IInputProps {
  children?: React.ReactNode
}

const CardLogin: React.FC<IInputProps> = ({ children }) => {
  return <S.Card>{children}</S.Card>
}

export default CardLogin
