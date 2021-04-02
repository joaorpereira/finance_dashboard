import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`
export const Label = styled.label`
  font-size: 0.7rem;
  margin-bottom: 2px;
  margin-left: 5px;
  color: gray;
`

export const Select = styled.select`
  position: relative;
  font-size: 0.85rem;
  padding: 0.4rem 0.7rem;
  min-width: 110px;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
export const Selector = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.4rem 0.7rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-top: 15px;
  cursor: pointer;
  pointer-events: none;
`