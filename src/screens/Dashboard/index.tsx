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

import { options, barOptions, lineOptions } from './constants'
import { current_month, current_year } from '../../utils/constants'
import useHandleOperations from '../../hooks/useHandleOperations'
import useHistoryData from '../../hooks/useHistoryData'
import useLineGraphicData from '../../hooks/useLineGraphicData'
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredData, setFilteredData] = useState<IBalance[]>([])
  const [month, setMonth] = useState<string>(current_month)
  const [year, setYear] = useState<string>(current_year)
  const [income, setIncome] = useState<number>(0)
  const [outcome, setOutcome] = useState<number>(0)
  const [expenses, setExpenses] = useState<number>(0)
  const [recurrentOutcome, setRecurrentOutcome] = useState<number>(0)
  const [eventualOutcome, setEventualOutcome] = useState<number>(0)
  const [recurrentIncome, setRecurrentIncome] = useState<number>(0)
  const [eventualIncome, setEventualIncome] = useState<number>(0)

  const entradas = useHandleOperations(mockCardData, 'ENTRADA')
  const saidas = useHandleOperations(mockCardData, 'SAIDA')
  const historyDate = useHistoryData(entradas, saidas)
  const [entryData, expenseData] = useLineGraphicData(historyDate)

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
    handleByOperation(newData)
    handleByStatus(newData)
  }

  useEffect(() => {
    filteredDataByDate(month, year)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year, data])

  const handlOperation = (data: IBalance[], params: string) => {
    const newData = data.filter(item => item.operation_type === params)
    return newData
  }

  const handleByOperation = (data: IBalance[]) => {
    const incomes = handlOperation(data, 'ENTRADA')
    const incomeValue = incomes.reduce((acc, val) => acc + val.value, 0)
    const outcomes = handlOperation(data, 'SAIDA')
    const outcomeValue = outcomes.reduce((acc, val) => acc + val.value, 0)
    const total = incomeValue - outcomeValue
    setIncome(incomeValue)
    setOutcome(outcomeValue)
    setExpenses(total)
  }

  const handleByStatus = (data: IBalance[]) => {
    const eventualTotal = data.filter(item => item.status === 'EVENTUAL')
    const recurrentTotal = data.filter(item => item.status === 'RECORRENTE')

    let eventualOutcomeTotal = 0
    let eventualIncomeTotal = 0

    // eslint-disable-next-line array-callback-return
    eventualTotal.map(item => {
      if (item.operation_type === 'SAIDA') {
        eventualOutcomeTotal += item.value
      } else {
        eventualIncomeTotal += item.value
      }
    })

    let recurrentOutcomeTotal = 0
    let recurrentIncomeTotal = 0

    // eslint-disable-next-line array-callback-return
    recurrentTotal.map(item => {
      if (item.operation_type === 'SAIDA') {
        recurrentOutcomeTotal += item.value
      } else {
        recurrentIncomeTotal += item.value
      }
    })

    setRecurrentIncome(recurrentIncomeTotal)
    setEventualIncome(eventualIncomeTotal)
    setRecurrentOutcome(recurrentOutcomeTotal)
    setEventualOutcome(eventualOutcomeTotal)
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
          <S.Item>
            {outcome && income ? (
              <CardContent
                positive={income > outcome}
                image={income > outcome ? RichBoy : PoorBoy}
              />
            ) : (
              <CardGraph />
            )}
          </S.Item>
          <S.Item>
            <CardGraph>
              <S.CardHeader>
                <h3>Relação</h3>
              </S.CardHeader>
              <ChartComponent
                options={options}
                series={[income, outcome]}
                type='pie'
                width='350px'
              />
            </CardGraph>
          </S.Item>
        </S.Row>
        <S.Row>
          <CardGraph height='400px'>
            <S.CardHeader marginBottom='1.5rem'>
              <h3>Histórico de saldo</h3>
            </S.CardHeader>
            <ChartComponent
              options={lineOptions}
              series={[
                {
                  name: 'Entradas',
                  data: entryData,
                },
                {
                  name: 'Saídas',
                  data: expenseData,
                },
              ]}
              type='line'
              width='1000px'
              height='280px'
            />
          </CardGraph>
        </S.Row>
        <S.Row paddingBottom='1rem'>
          <S.Item>
            <CardGraph>
              <S.CardHeader>
                <h3>Entradas</h3>
              </S.CardHeader>
              <ChartComponent
                options={barOptions}
                series={[
                  {
                    name: 'Recorrentes',
                    data: [recurrentIncome],
                  },
                  {
                    name: 'Eventuais',
                    data: [eventualIncome],
                  },
                ]}
                type='bar'
                width='350px'
              />
            </CardGraph>
          </S.Item>
          <S.Item>
            <CardGraph>
              <S.CardHeader>
                <h3>Saídas</h3>
              </S.CardHeader>
              <ChartComponent
                options={barOptions}
                series={[
                  {
                    name: 'Recorrentes',
                    data: [recurrentOutcome],
                  },
                  {
                    name: 'Eventuais',
                    data: [eventualOutcome],
                  },
                ]}
                type='bar'
                width='350px'
              />
            </CardGraph>
          </S.Item>
        </S.Row>
      </S.Main>
    </S.Wrapper>
  )
}

export default Dashboard
