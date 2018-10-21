import styled from 'styled-components'
import Link from 'next/link'
import theme from '../../util/theme'
import { transition } from '../../util/mixin'

export const Wrapper = styled.div`
  margin: 0;
`
export const FlexWrapper = styled.div`
  display: flex;
`
export const LeftWrapper = styled.div`
  padding: ${theme.layout.menuPadding}px;
  padding-right: 0;
`
export const RightWrapper = styled.div`
  flex: 1;
  text-align: right;
  padding: ${theme.layout.menuPadding}px;
  padding-left: 0;
  margin: 0;
`
export const LogoLink = styled.a`
  cursor: pointer;
  display: inline-block;
`

export const NavLink = styled.a`
  font-family: Akkurat;
  font-size: 20px;
  line-height: 20px;
  font-weight: 100;
  margin-left: 24px;
  cursor: pointer;
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
  font-family: Akkurat;
  font-size: 20px;
  line-height: 20px;
  font-weight: 100;
  margin-left: 24px;
  cursor: not-allowed;
  color: transparent;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
  position: relative;

  &:hover ${InActiveLabel} {
    opacity: 1;
  }

`