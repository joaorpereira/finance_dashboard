import React, { ReactNode } from 'react'
import * as S from './styled'

interface IInputProps {
  title: string
  value: string
  Image: any
  backgroundColor: string
  message: string
}

const CardInfo: React.FC<IInputProps> = ({
  title,
  value,
  Image,
  backgroundColor,
  message,
}) => {
  return (
    <S.Card backgroundColor={backgroundColor}>
      <S.Content>
        <S.Header>
          <p>{title}</p>
          <h2>{`R$ ${value}`}</h2>
        </S.Header>
        <S.Message>{message}</S.Message>
      </S.Content>
      <Image
        style={{
          position: 'absolute',
          right: -30,
          marginTop: '7px',
          color: '#fff',
          opacity: 0.3,
        }}
        size={'140px'}
      />
    </S.Card>
  )
}

export default CardInfo
