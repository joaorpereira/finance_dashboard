import styled from 'styled-components'

interface IProps {
  open: boolean
}

export const Span = styled.span<IProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  top: 0;
  padding-left: ${props => (props.open ? '0px' : '2px')};
  left:  ${props => (props.open ? '192' : '18')} ;
  margin-top: 17px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};
  transition: 0.2s ease-in;
`
