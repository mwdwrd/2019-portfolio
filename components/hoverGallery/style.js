import styled from 'styled-components'
import theme from '../../util/theme'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Item = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props => props.backgroundColor) ? props => props.backgroundColor : 'transparent'};
  display: none;
`