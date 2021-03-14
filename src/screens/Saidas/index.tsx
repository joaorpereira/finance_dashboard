import React, { useEffect, useState } from 'react'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import monthList from '../../utils/monthList'
import yearsOptions from '../../mocks/yearsOptions'

import mockCardData from '../../mocks/cardsMockData'

import * as S from './styled'
import FilterHeader from '../../components/FilterHeader'
import Card from '../../components/Cards/CardRow'

interface IEntries {
  id: number
  operation_type: string
  description: string
  value: number
  date: string
  status: string
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
        {/* <Select
          options={monthOptions}
          name='date'
          label='Mês'
          onChange={() => undefined}
        />
        <Select
          options={yearsOptions}
          name='ano'
          label='Ano'
          onChange={() => undefined}
        /> */}
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
                status={item.status}
              />
            ))}
        </S.Box>
      </S.Main>
    </S.Wrapper>
  )
}

export default Saidas
