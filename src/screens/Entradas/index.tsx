import React, { useEffect, useMemo, useState } from 'react'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import yearsOptions from '../../utils/yearsOptions'
import monthList from '../../utils/monthList'
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
  const [filteredData, setFilteredData] = useState<IEntries[]>([])
  const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1))
  const [year, setYear] = useState<string>(String(new Date().getFullYear()))

  useEffect(() => {
    const newEntries = mockCardData.filter(
      item => item.operation_type === 'ENTRADA'
    )
    setEntriesData(newEntries)
  }, [])

  useEffect(() => {
    if (month && year) {
      const newData = entriesData.filter(item => {
        const date = new Date(item.date)
        const monthEntry = String(date.getMonth() + 1)
        const yearEntry = String(date.getFullYear())
        return month === monthEntry && year === yearEntry
      })
      setFilteredData(newData)
    }
  }, [entriesData, month, year])

  // const yearsOptions2 = useMemo(() => {
  //   let uniqueYears: number[] = []
  //   entriesData.forEach(item => {
  //     const date = new Date(item.date)
  //     const newYear = date.getFullYear()
  //     if (!uniqueYears.includes(newYear)) {
  //       uniqueYears.push(newYear)
  //     }
  //   })
  //   return uniqueYears.map(year => ({ value: year, option: String(year) }))
  // }, [entriesData])

  const monthOptions = useMemo(() => {
    return monthList.map((month, index) => ({
      value: index + 1,
      option: month,
    }))
  }, [])

  return (
    <S.Wrapper>
      <HeaderTitle title={'Entradas'} color={'#28a745'}>
        <Select
          options={monthOptions}
          name='date'
          label='Mês'
          defaultValue={month}
          onChange={e => setMonth(e.target.value)}
        />
        <Select
          options={yearsOptions}
          name='ano'
          label='Ano'
          defaultValue={year}
          onChange={e => setYear(e.target.value)}
        />
      </HeaderTitle>
      <S.Main>
        <FilterHeader onClickRecurrent={() => {}} onClickEventual={() => {}} />
        <S.Box>
          {!filteredData && entriesData
            ? entriesData.map(item => (
                <Card
                  key={item.id}
                  value={item.value}
                  description={item.description}
                  date={item.date}
                  type={item.type}
                />
              ))
            : filteredData.map(item => (
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
