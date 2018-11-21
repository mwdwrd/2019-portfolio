import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`

export const GridItem = styled.div``
