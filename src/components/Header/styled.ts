import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0px 25px;
  height: 56px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  > p {
    font-size: 12px;
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.text};
    letter-spacing: 0.05rem;
    font-weight: 700;
  }
`
