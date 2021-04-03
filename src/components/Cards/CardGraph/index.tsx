import React, { ReactNode } from 'react'
import * as S from './styled'

interface ICardGraph {
  height?: any
  children?: ReactNode
}

const CardGraph: React.FC<ICardGraph> = ({ height, children }) => {
  return <S.Card height={height}>{children}</S.Card>
}

export default CardGraph
