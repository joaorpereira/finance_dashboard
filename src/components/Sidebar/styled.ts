import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IList {
  open: boolean
}

export const Container = styled.div`
  width: 240px;
  background: rgb(21,107,222);
  background: linear-gradient(29deg, rgba(21,107,222,1) 0%, rgba(230,0,233,1) 100%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
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

export const ListItem = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0px 5px 15px;
  width: calc(100% - 15px);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  transition: 0.2s ease-in;
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
  }
`
