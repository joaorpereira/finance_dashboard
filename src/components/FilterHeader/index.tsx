import React from 'react'
import * as S from './styled'

interface IFilterProps {
  onClickRecurrent: any
  onClickEventual: any
}

const FilterHeader: React.FC<IFilterProps> = ({
  onClickRecurrent,
  onClickEventual,
}) => {
  return (
    <S.Filter>
      <S.Button onClick={onClickRecurrent}>
        Recorrentes
        <S.Span color={'RECORRENTE'} />
      </S.Button>
      <S.Button onClick={onClickEventual}>
        Eventuais <S.Span />
      </S.Button>
    </S.Filter>
  )
}

export default FilterHeader
