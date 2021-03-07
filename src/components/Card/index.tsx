import React from 'react'
import * as S from './styled'

enum Types {
  EVENTUAL = 'EVENTUAL',
  RECORRENTE = 'RECORRENTE',
}

interface ICardProps {
  description: string
  date: string
  value: string
  type: string | Types
}

const Card: React.FC<ICardProps> = ({ description, date, value, type }) => {
  return (
    <S.Card>
      <S.CardInfo>
        <h2>{description}</h2>
        <p>{date}</p>
      </S.CardInfo>
      <p>{`R$ ${value}`}</p>
      <S.Span color={type} />
    </S.Card>
  )
}

export default Card
