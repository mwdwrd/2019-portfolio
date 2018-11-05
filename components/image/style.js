import styled from 'styled-components'
import theme from '../../util/theme'
import { transition } from '../../util/mixin'

function generateRatio(props) {
  if (props.ratio) {
    const ratio = props.ratio
    const xRatio = ratio.slice(0, ratio.indexOf(":"))
    const yRatio = ratio.split(':')[1]
    const ratioOffset = yRatio / xRatio * 100

    return `${ratioOffset}%`;
  } else {
    return `56.25%`;
  }
}

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: ${generateRatio};
`

export const ImagePreload = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-image: url('${props => props.source}');
  background-position: center;
  background-repeat: no-repeat;
`

export const ImageLoaded = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-image: url('${props => props.source}');
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: all 600ms ease;

  &.loaded {
    opacity: 1;
  }
`

export const Caption = styled.div`
  font-family: ${theme.typography.caption.fontFamily};
  font-weight: ${theme.typography.caption.fontWeight};
  font-size: ${theme.typography.caption.fontSize};
  line-height: ${theme.typography.caption.lineHeight};
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
