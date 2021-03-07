import React, { useEffect, useState } from 'react'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import { monthOptions } from '../../utils/monthOptions'
import { yearsOptions } from '../../utils/yearsOptions'

import mockCardData from '../../mocks/cardsMockData'

import * as S from './styled'
import FilterHeader from '../../components/FilterHeader'
import Card from '../../components/Card'

interface IEntries {
  id: number
  operation_type: string
  description: string
  value: number
  date: string
  type: string
}

const Saidas: React.FC = () => {
  const [outcomeData, setOutcomeData] = useState<IEntries[]>([])

  useEffect(() => {
    const newEntries = mockCardData.filter(
      item => item.operation_type === 'SAIDA'
    )
    setOutcomeData(newEntries)
  }, [])

  return (
    <S.Wrapper>
      <HeaderTitle title={'Saídas'} color={'#dc3545'}>
        <Select
          options={monthOptions}
          name='date'
          label='Mês'
          onChange={() => null}
        />
        <Select
          options={yearsOptions}
          name='ano'
          label='Ano'
          onChange={() => null}
        />
      </HeaderTitle>
      <S.Main>
        <FilterHeader onClickRecurrent={() => {}} onClickEventual={() => {}} />
        <S.Box>
          {outcomeData &&
            outcomeData.map(item => (
              <Card
                key={item.id}
                value={item.value}
                description={item.description}
                date={item.date}
                type={item.type}
              />
            ))}
        </S.Box>
      </S.Main>
    </S.Wrapper>
  )
}

export default Saidas
