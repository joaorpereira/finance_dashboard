import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IContainer {
  openSidebar: boolean
  selected?: boolean
}

export const Container = styled.div<IContainer>`
  width: ${props => (props.openSidebar ? '240px' : '60px')};
  background: rgb(21, 107, 222);
  background: linear-gradient(
    29deg,
    rgba(21, 107, 222, 1) 0%,
    rgba(230, 0, 233, 1) 100%
  );
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in;
  :hover {
    box-shadow: none;
  }
`

export const ImageBox = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  height: 30px;
`
export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  height: calc(100% - 56px);
`

export const ListItem = styled(Link)<IContainer>`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0px 5px 15px;
  width: calc(100% - 15px);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  transition: 0.2s ease-in-out;
  padding: ${props => (props.openSidebar ? '10px 0px 13px 20px' : '10px 4px')};

  background-color: ${props =>
    props.selected ? props.theme.colors.backgroundColor : ''};
  color: ${props =>
    props.selected ? props.theme.colors.text : props.theme.colors.white};

  :hover {
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.text};
  }
  :last-child {
    bottom: 30;
    position: absolute;
  }
  p {
    font-size: 1rem;
    margin-left: 15px;
    letter-spacing: 0.05rem;
    font-weight: 700;
    display: ${props => (props.openSidebar ? 'block' : 'none')};
  }
`
