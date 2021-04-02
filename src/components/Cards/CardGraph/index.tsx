import React, { ReactNode } from 'react'
import * as S from './styled'

interface IInputProps {
  height?: any
  children?: ReactNode
}

const CardGraph: React.FC<IInputProps> = ({ height, children }) => {
  return <S.Card height={height}>{children}</S.Card>
}

export default CardGraph
