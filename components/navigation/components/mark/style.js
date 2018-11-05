import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0;
  margin: 0;

  svg, polygon {
    fill: ${props => props.color};
  }
`
