import React from 'react'
import * as S from './styled'

interface IInputProps {
  name: string
  label: string
  type: string
  value: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void | undefined
}

const Input: React.FC<IInputProps> = ({
  name,
  label,
  type,
  onChange,
  value,
}) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
      />
    </S.Container>
  )
}

export default Input
