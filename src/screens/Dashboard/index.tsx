import React, { useEffect, useMemo, useState } from 'react'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import monthList from '../../utils/monthList'
import yearsOptions from '../../mocks/yearsOptions'

import * as S from './styled'
import ChartComponent from '../../components/Chart'
import CardInfo from '../../components/Cards/CardInfo'
import CardGraph from '../../components/Cards/CardGraph'
import CardContent from '../../components/Cards/CardContent'
import PoorBoy from '../../assets/poor_boy.svg'
import RichBoy from '../../assets/rich_boy.svg'
import { FaArrowUp, FaArrowDown, FaDollarSign } from 'react-icons/fa'

import mockCardData from '../../mocks/cardsMockData'

import { options } from './constants'
import { current_month, current_year } from '../../utils/constants'
interface IBalance {
  id: number
  operation_type: string
  description: string
  value: number
  date: string
  status: string
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<IBalance[]>([])
  const [filteredData, setFilteredData] = useState<IBalance[]>([])
  const [month, setMonth] = useState<string>(current_month)
  const [year, setYear] = useState<string>(current_year)
  const [income, setIncome] = useState<number>()
  const [outcome, setOutcome] = useState<number>()
  const [expenses, setExpenses] = useState<number>()

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

  useEffect(() => {
    setTimeout(function () {
      setData(mockCardData)
    }, 3000)
  }, [])

  const filteredDataByDate = (month: string, year: string) => {
    const newData: IBalance[] = mockCardData.filter(item => {
      const date = new Date(item.date)
      const monthEntry = String(date.getMonth() + 1)
      const yearEntry = String(date.getFullYear())
      return month === monthEntry && year === yearEntry
    })
    setFilteredData(newData)
    handleValues(newData)
  }

  useEffect(() => {
    filteredDataByDate(month, year)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year, data])

  const handleValues = (data: IBalance[]) => {
    const income = data
      .filter(item => item.operation_type === 'ENTRADA')
      .reduce((acc, val) => acc + val.value, 0)
    const outcome = data
      .filter(item => item.operation_type === 'SAIDA')
      .reduce((acc, val) => acc + val.value, 0)

    const total = income - outcome
    setIncome(income)
    setOutcome(outcome)
    setExpenses(total)
  }

  return (
    <S.Wrapper>
      <HeaderTitle title={'Dashboard'} color={'#222831'}>
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
        <S.Row>
          <CardInfo
            title='saldo'
            backgroundColor='#0085b6'
            value={expenses ? expenses : 0}
            message='atualizado com base nas entradas e saídas'
            Image={FaDollarSign}
          />
          <CardInfo
            title='entradas'
            backgroundColor='#00d49d'
            value={income ? income : 0}
            message='atualizado com base nas entradas e saídas'
            Image={FaArrowUp}
          />
          <CardInfo
            title='saídas'
            backgroundColor='#ff005d'
            value={outcome ? outcome : 0}
            message='atualizado com base nas entradas e saídas'
            Image={FaArrowDown}
          />
        </S.Row>
        <S.Row>
          <CardContent positive={true} image={true ? RichBoy : PoorBoy} />
          <CardGraph>
            <S.CardHeader>
              <h3>Relação</h3>
            </S.CardHeader>
            {outcome && income && (
              <ChartComponent
                options={options}
                series={[income, outcome]}
                type='pie'
                width='350px'
              />
            )}
          </CardGraph>
        </S.Row>
        <S.Row paddingBottom='1rem'>
          <CardGraph height='400px'>
            <S.CardHeader marginBottom='1.5rem'>
              <h3>Histórico de saldo</h3>
            </S.CardHeader>
            <ChartComponent
              options={options}
              series={[
                {
                  name: 'Entradas',
                  data: [40, 30, 50, 10, 100, 90, 80, 20, 125, 120, 115, 110],
                },
                {
                  name: 'Saídas',
                  data: [30, 40, 35, 50, 80, 50, 20, 100, 30, 40, 50, 60],
                },
              ]}
              type='line'
              width='1000px'
              height='280px'
            />
          </CardGraph>
        </S.Row>
      </S.Main>
    </S.Wrapper>
  )
}

export default Dashboard
