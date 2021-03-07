import React from 'react'
import * as S from './styled'

interface ITitle {
  title: string
  color: string
  children: any
}

const Title: React.FC<ITitle> = ({ title, color, children }) => {
  return (
    <S.Container>
      <S.Title>
        <h1 color={color}>{title}</h1>
      </S.Title>
      <S.Box>{children}</S.Box>
    </S.Container>
  )
}

export default Title
