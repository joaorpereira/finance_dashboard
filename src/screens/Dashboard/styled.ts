import styled from 'styled-components'
interface UIRow {
  paddingBottom?: string
}
interface UICardHeader {
  marginBottom?: string
}

export const Wrapper = styled.div`
  padding: 40px 50px;
  height: calc(100% - 56px);
  overflow-y: scroll;
`

export const Main = styled.div`
  padding: 1rem 0rem;
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
export const Row = styled.div<UIRow>`
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  width: 100%;
  padding-bottom: ${props => props.paddingBottom};
`

export const Item = styled.div`
  display: flex;
  width: 49%;
`

export const CardHeader = styled.div<UICardHeader>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 4rem;
  margin-bottom: ${props => props.marginBottom};
`
