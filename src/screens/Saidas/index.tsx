import React, { useEffect, useMemo, useState } from 'react'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import yearsOptions from '../../mocks/yearsOptions'
import monthList from '../../utils/monthList'
import mockCardData from '../../mocks/cardsMockData'

import * as S from './styled'
import FilterHeader from '../../components/FilterHeader'
import Card from '../../components/Cards/CardRow'
import { current_month, current_year } from '../../utils/constants'
import useHandleOperations from '../../hooks/useHandleOperations'
interface IOutcomes {
  id: number
  operation_type: string
  description: string
  value: number
  date: string
  status: string
}

const Saidas: React.FC = () => {
  const [filteredData, setFilteredData] = useState<IOutcomes[]>([])
  const [month, setMonth] = useState<string>(current_month)
  const [year, setYear] = useState<string>(current_year)
  const [status, setStatus] = useState<string>('')

  const outcomeData = useHandleOperations(mockCardData, 'SAIDA')

  const filteredDataByDate = (month: string, year: string, status: string) => {
    const newData: IOutcomes[] = outcomeData.filter(item => {
      const date = new Date(item.date)
      const monthEntry = String(date.getMonth() + 1)
      const yearEntry = String(date.getFullYear())
      return (
        month === monthEntry &&
        year === yearEntry &&
        item.status.includes(status)
      )
    })
    setFilteredData(newData)
  }

  useEffect(() => {
    filteredDataByDate(month, year, status)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year, status])

  const monthOptions = useMemo(() => {
    const list = monthList
      .map((month, index) => ({
        value: index + 1,
        option: month,
      }))
      .filter(month =>
        Number(year) === Number(current_year)
          ? Number(month.value) <= Number(current_month)
          : month
      )

    return list
  }, [year])

  const handleStatus = (newStatus: string) => {
    if (newStatus === status) {
      setStatus('')
    } else {
      setStatus(newStatus)
    }
  }

  return (
    <S.Wrapper>
      <HeaderTitle title={'Saídas'} color={'#dc3545'}>
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
        <FilterHeader
          onClickRecurrent={() => handleStatus('RECORRENTE')}
          onClickEventual={() => handleStatus('EVENTUAL')}
        />
        <S.Box>
          {!filteredData && outcomeData
            ? outcomeData.map(item => (
                <Card
                  key={item.id}
                  value={item.value}
                  description={item.description}
                  date={item.date}
                  status={item.status}
                />
              ))
            : filteredData.map(item => (
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
