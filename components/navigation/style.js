import styled from 'styled-components'
import theme from '../../util/theme'
import { transition } from '../../util/mixin'

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6000;
  display: flex;
`
export const Drawer = styled.div`
  display: block;
`
export const Mark = styled.div`
  padding: ${theme.layout.menuPadding}px;
  padding-right: 0;

  &:hover {
    polygon {
      transition: color 300ms ease;
      fill: #162C83;
    }
  }
`
export const MainMenu = styled.div`
  flex: 1;
  text-align: right;
  padding: ${theme.layout.menuPadding}px;
  padding-left: 0;
  margin: 0;
`
