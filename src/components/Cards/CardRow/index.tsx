import React from 'react'
import formatCurrency from '../../../utils/formatCurrency'
import formatDate from '../../../utils/formatDate'
import * as S from './styled'

enum Types {
  EVENTUAL = 'EVENTUAL',
  RECORRENTE = 'RECORRENTE',
}

interface ICardProps {
  description: string
  date: string
  value: number
  type: string | Types
}

const Card: React.FC<ICardProps> = ({ description, date, value, type }) => {
  return (
    <S.Card>
      <S.CardInfo>
        <h2>{description}</h2>
        <p>{formatDate(date)}</p>
      </S.CardInfo>
      <p>{formatCurrency(value)}</p>
      <S.Span color={type} />
    </S.Card>
  )
}

export default Card
