import styled from 'styled-components'
import theme from '../../../../util/theme'
import { transition } from '../../../../util/mixin'

export const Wrapper = styled.div`
  text-align: right;
  padding: 0;
  margin: 0;
`

export const NavLink = styled.a`
  font-family: ${theme.typography.mainMenu.fontFamily};
  font-weight: ${theme.typography.mainMenu.fontWeight};
  font-size: ${theme.typography.mainMenu.fontSize};
  line-height: ${theme.typography.mainMenu.lineHeight};
  letter-spacing: ${theme.typography.mainMenu.letterSpacing};

  margin-left: 24px;
  color: black;

  &.active {
    color: #162C83;
  }
`

export const InActiveLabel = styled.span`
  position: absolute;
  top: 4px;
  left: 0;
  text-shadow: none;
  font-size: 9px;
  color: white;
  background-color: ${theme.colors.primary};
  display: inline-block;
  padding: 1px 6px 0;
  height: auto;
  line-height: 16px;
  opacity: 0;
  ${transition('opacity','300ms','linear')};
`

export const InActiveLink = styled.span`
  font-family: ${theme.typography.mainMenu.fontFamily};
  font-weight: ${theme.typography.mainMenu.fontWeight};
  font-size: ${theme.typography.mainMenu.fontSize};
  line-height: ${theme.typography.mainMenu.lineHeight};
  letter-spacing: ${theme.typography.mainMenu.letterSpacing};

  margin-left: 24px;
  cursor: not-allowed;
  color: transparent;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
  position: relative;

  &:hover ${InActiveLabel} {
    opacity: 1;
  }

`