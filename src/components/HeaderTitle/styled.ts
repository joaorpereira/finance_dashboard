import styled from 'styled-components'

interface IColor {
  color?: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  > h1 {
    font-weight: 900;
    font-size: 1.6rem;
  }
`
export const Title = styled.div<IColor>`
  h1 {
    font-weight: 900;
    font-size: 1.6rem;
  }

  &::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 6px solid ${props => props.color};
  }
`

export const Box = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
`
