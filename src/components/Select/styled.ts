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
  min-width: 100px;
  border-radius: 0.5rem;
  border: none;
  background-color: lightgray;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
export const Selector = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.4rem 0.7rem;
  background-color: lightgray;
  border-radius: 0.5rem;
  margin-top: 15px;
  cursor: pointer;
  pointer-events: none;
`