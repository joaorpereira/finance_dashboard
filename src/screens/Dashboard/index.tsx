import React from 'react'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import { monthOptions } from '../../utils/monthOptions'
import { yearsOptions } from '../../utils/yearsOptions'

import * as S from './styled'

const Dashboard: React.FC = () => {
  return (
    <S.Wrapper>
      <HeaderTitle title={'Dashboard'} color={'#222831'}>
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
      <S.Main></S.Main>
    </S.Wrapper>
  )
}

export default Dashboard
