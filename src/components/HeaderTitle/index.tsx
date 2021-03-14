import React from 'react'
import * as S from './styled'

interface IHeaderTitle {
  title: string
  color: string
  children: React.ReactNode
}

const HeaderTitle: React.FC<IHeaderTitle> = ({ title, color, children }) => {
  return (
    <S.Container>
      <S.Title color={color}>
        <h1>{title}</h1>
      </S.Title>
      <S.Box>{children}</S.Box>
    </S.Container>
  )
}

export default HeaderTitle
