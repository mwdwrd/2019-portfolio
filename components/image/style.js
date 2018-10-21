import styled from 'styled-components'
import theme from '../../util/theme'
import { transition } from '../../util/mixin'

export const Image = styled.img`
  display: block;
  border: none;
  width: 100%;
  height: auto;
  margin: 0;
`
export const Caption = styled.div`
  font-family: ${theme.typography.caption.fontFamily};
  font-weight: ${theme.typography.caption.fontWeight};
  font-size: ${theme.typography.caption.fontSize};
  letter-spacing: ${theme.typography.caption.letterSpacing};
  text-align: ${props => props.align};
  padding: 8px 0;
  opacity: 0.1;
  ${transition('all', '300ms', 'linear')};
  &:hover {
    cursor: help;
  }
`
export const Wrapper = styled.div`
  &:hover ${Caption} {
    opacity: 1;
  }
`
