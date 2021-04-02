import styled from 'styled-components'

interface IBackground {
  backgroundColor: string
}

export const Card = styled.div<IBackground>`
  display: flex;
  position: relative;
  min-width: 250px;
  height: 150px;
  flex-grow: 1;
  border-radius: 0.5rem;
  background-color: ${props => props.backgroundColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 1.5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #fff;

  p {
    text-transform: capitalize;
    font-size: 16px;
    font-weight: bold;
  }
  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
  }
`
export const Message = styled.p`
  font-size: 11px;
  color: #fff;
`
