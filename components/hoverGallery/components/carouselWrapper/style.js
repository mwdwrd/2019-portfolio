import styled from 'styled-components'
import theme from '../../../../util/theme'
import media from 'styled-media-query'


export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

export const Items = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const ToolTip = styled.div`
  position: absolute;
  color: #000;
  z-index: 5000;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-family: ${theme.typography.caption.fontFamily};
  font-weight: ${theme.typography.caption.fontWeight};
  font-size: 12px;
  white-space: nowrap;
  line-height: ${theme.typography.caption.lineHeight};
  letter-spacing: -0.13em;
  padding: 20px;
  transition: opacity 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: ${props => props.active ? '1' : '0'};

  ${media.lessThan("medium")`
    display: none;
  `}
`
