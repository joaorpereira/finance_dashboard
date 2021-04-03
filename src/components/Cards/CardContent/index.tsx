import React  from 'react'
import * as S from './styled'

interface ICardContent {
  positive: boolean
  image: any
}

const CardContent: React.FC<ICardContent> = ({ image, positive }) => {
  return (
    <S.Card>
      <S.Content>
        <S.Header>
          <h4>{positive ? 'Muito bom!' : 'É hora de poupar'}</h4>
          <h2>
            {positive
              ? 'Sua carteira está positiva'
              : 'Sua carteira está negativa'}
          </h2>
        </S.Header>
        <S.Image src={image} alt={image} />
        <S.Message>
          {positive
            ? 'Continue assim. Considere investir seu saldo.'
            : 'É hora de mudanças. Considere economizar em seus gastos.'}
        </S.Message>
      </S.Content>
    </S.Card>
  )
}

export default CardContent
