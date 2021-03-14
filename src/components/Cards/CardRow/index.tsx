import React from 'react'
import formatCurrency from '../../../utils/formatCurrency'
import formatDate from '../../../utils/formatDate'
import * as S from './styled'
interface ICardProps {
  description: string
  date: string
  value: number
  status: string
}

const Card: React.FC<ICardProps> = ({ description, date, value, status }) => {
  return (
    <S.Card>
      <S.CardInfo>
        <h2>{description}</h2>
        <p>{formatDate(date)}</p>
      </S.CardInfo>
      <p>{formatCurrency(value)}</p>
      <S.Span color={status} />
    </S.Card>
  )
}

export default Card
