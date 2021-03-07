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

const Entradas: React.FC = () => {
  const [entriesData, setEntriesData] = useState<IEntries[]>([])

  useEffect(() => {
    const newEntries = mockCardData.filter(
      item => item.operation_type === 'ENTRADA'
    )
    setEntriesData(newEntries)
  }, [])

  return (
    <S.Wrapper>
      <HeaderTitle title={'Entradas'} color={'#28a745'}>
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
          {entriesData &&
            entriesData.map(item => (
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

export default Entradas
