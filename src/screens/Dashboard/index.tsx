import React, { useMemo, useState } from 'react'
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

import { options } from './constants'
import { current_month, current_year } from '../../utils/constants'

const Dashboard: React.FC = () => {
  const [month, setMonth] = useState<string>(current_month)
  const [year, setYear] = useState<string>(current_year)

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
            value='150'
            message='atualizado com base nas entradas e saídas'
            Image={FaDollarSign}
          />
          <CardInfo
            title='entradas'
            backgroundColor='#00d49d'
            value='150'
            message='atualizado com base nas entradas e saídas'
            Image={FaArrowUp}
          />
          <CardInfo
            title='saídas'
            backgroundColor='#ff005d'
            value='150'
            message='atualizado com base nas entradas e saídas'
            Image={FaArrowDown}
          />
        </S.Row>
        <S.Row>
          <CardContent
            positive={true}
            image={true ? RichBoy : PoorBoy}
            color={true ? '#00d49d' : '#ff005d'}
          />
          <CardGraph>
            <S.CardHeader>
              <h3>Relação</h3>
            </S.CardHeader>
            <ChartComponent
              options={options}
              series={[55, 44]}
              type='pie'
              width='350px'
            />
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
              width='900px'
              height='280px'
            />
          </CardGraph>
        </S.Row>
      </S.Main>
    </S.Wrapper>
  )
}

export default Dashboard
