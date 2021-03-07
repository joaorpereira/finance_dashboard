import styled from 'styled-components'

interface IColor {
  color?: string
}


export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
`

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1rem;
  flex-direction: column;
  padding: 0.4rem 1rem;
  margin: 0rem 0rem 1rem 0rem;
  font-weight: 700;
  background-color: ${props => props.theme.colors.backgroundColor};
`
export const Span = styled.span<IColor>`
  position: absolute;
  padding: 0.2rem;
  width: 2.5rem;
  bottom: 0;
  background-color: ${props =>
    props.color === 'RECORRENTE' ? props.theme.colors.darkPurple : '#e600e9'};
`
