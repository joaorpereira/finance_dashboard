import React, { useMemo, useState } from 'react'
import Select from '../../components/Select'
import HeaderTitle from '../../components/HeaderTitle'
import monthList from '../../utils/monthList'
import yearsOptions from '../../mocks/yearsOptions'

import * as S from './styled'
import { current_month, current_year } from '../../utils/constants'

const Dashboard: React.FC = () => {
  const [month, setMonth] = useState<string>(current_month)
  const [year, setYear] = useState<string>(current_year)
  const [status, setStatus] = useState<string>('')

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
            
        </S.Row>
      </S.Main>
    </S.Wrapper>
  )
}

export default Dashboard
