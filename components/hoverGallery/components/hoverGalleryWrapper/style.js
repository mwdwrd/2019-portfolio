import styled from 'styled-components'
import theme from '../../../../util/theme'

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`
export const Coordinates = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 12px;
  background-color: #f2f2f2;
  font-size: 10px;
  font-family: ${theme.typography.caption.fontFamily};
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: ${theme.typography.caption.letterSpacing};
  text-align: right;

  > span {
    margin: 0 0 0 8px;
    display: inline-block;
  }
`

export const Items = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .item {
    &:nth-child(${props => props.current}) {
      display: block;
    }
  }
`
