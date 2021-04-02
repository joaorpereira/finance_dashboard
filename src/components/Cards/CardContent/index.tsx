import React, { ReactNode } from 'react'
import * as S from './styled'

interface IInputProps {
  height?: any
  children?: ReactNode
  positive: boolean
  image: any
  color: string
}

const CardContent: React.FC<IInputProps> = ({
  image,
  positive,
  height,
  color,
}) => {
  return (
    <S.Card height={height}>
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
