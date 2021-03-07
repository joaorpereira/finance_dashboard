import React from 'react'
import Select from '../../components/Select'
import Title from '../../components/Title'
import { monthOptions } from '../../utils/monthOptions'
import { yearsOptions } from '../../utils/yearsOptions'

const Entradas: React.FC = () => {
  return (
    <div>
      <Title title={'Entradas'} color={'#222831'}>
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
      </Title>
    </div>
  )
}

export default Entradas
