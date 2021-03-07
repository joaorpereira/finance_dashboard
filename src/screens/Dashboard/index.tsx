import React from 'react'
import Card from '../../components/Card'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import { monthOptions } from '../../utils/monthOptions'
import { yearsOptions } from '../../utils/yearsOptions'

import mockCardData from '../../mock/cardsMockData'

import * as S from './styled'
import FilterHeader from '../../components/FilterHeader'

const Dashboard: React.FC = () => {
  return (
    <S.Wrapper>
      <HeaderTitle title={'Dashboard'} color={'#222831'}>
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
          {mockCardData &&
            mockCardData.map(item => (
              <Card
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

export default Dashboard
