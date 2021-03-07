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
  defaultValue?: string | number
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined
}

const Select: React.FC<ISelectInput> = ({
  options,
  name,
  label,
  defaultValue,
  onChange,
}) => {
  console.log(options)
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select
        onChange={onChange}
        name={name}
        id={name}
        // defaultValue={defaultValue}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.option}
          </option>
        ))}
      </S.Select>
      <S.Selector>
        <FaAngleDown style={{ color: '#222831' }} />
      </S.Selector>
    </S.Container>
  )
}

export default Select
