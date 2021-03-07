import styled from 'styled-components'

interface IColor {
  color?: string
}

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 97%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 3.5rem;
  border-radius: 0.5rem;
  padding: 0 1.4rem;
  transition: all 0.3s;
  > p {
    font-weight: 500;
    font-size: 1.1rem;
  }
  margin: 0.5rem 0rem;
  :last-child {
    margin-bottom: 2rem;
  }
  &:hover {
    opacity: 0.7;
    transform: translate(7px);
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 3.5rem;
  margin-left: 0.5rem;
  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.75rem;
    color: gray;
  }
`
export const Span = styled.span<IColor>`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.75rem;
  height: 100%;
  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: ${props =>
    props.color === 'RECORRENTE' ? props.theme.colors.darkPurple : '#e600e9'};
`
