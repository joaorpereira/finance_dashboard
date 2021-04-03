import styled from 'styled-components'

interface IBackground {
  height: string
}

export const Card = styled.div<IBackground>`
  display: flex;
  position: relative;
  min-width: 250px;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border-radius: 0.5rem;
  padding: 2rem 0rem;
  height: ${props => (props.height ? props.height : '300px')};
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
