import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 40px 50px;
  height: calc(100% - 56px);
`

export const Main = styled.div`
  padding: 1.5rem 1rem;
  height: calc(100% - 56px);
  width: 100%;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 24rem;
  height: 24rem;
`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`
