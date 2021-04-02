import styled from 'styled-components'

interface IBackground {
  height: string
}

export const Card = styled.div<IBackground>`
  display: flex;
  position: relative;
  min-width: 250px;
  flex-grow: 1;
  border-radius: 0.5rem;
  height: ${props => (props.height ? props.height : '300px')};
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  h4 {
    text-transform: capitalize;
    font-size: 16px;
    font-weight: bold;
  }
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
  }
`
export const Message = styled.p`
  font-size: 12px;
  color: #000;
`

export const Image = styled.img`
  position: absolute;
  height: 230px;
  right: 0;
  transform: translateX(-25%)
`
