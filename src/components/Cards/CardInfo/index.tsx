import React from 'react'
import formatCurrency from '../../../utils/formatCurrency'
import * as S from './styled'

interface ICardInfo {
  title: string
  value: number
  Image: any
  backgroundColor: string
  message: string
}

const CardInfo: React.FC<ICardInfo> = ({
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
          <h2>{formatCurrency(value)}</h2>
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
