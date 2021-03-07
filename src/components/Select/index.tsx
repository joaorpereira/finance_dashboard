import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import * as S from './styled'

interface ISelectInput {
  name: string
  label: string
  options: {
    value: string | number
    option: string | number
  }[]
  onChange: any
}

const Select: React.FC<ISelectInput> = ({ options, name, label, onChange }) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select onChange={onChange} name={name} id={name}>
        {options &&
          options?.map(item => (
            <option value={item.value}>{item.option}</option>
          ))}
      </S.Select>
      <S.Selector>
        <FaAngleDown style={{ color: '#222831' }} />
      </S.Selector>
    </S.Container>
  )
}

export default Select
