import styled from 'styled-components'
import theme from '../../../../util/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.primary};
  height: 100%;
  width: 110%;
  position: fixed;
  top: 0;
  left: 0;
  border: 0;
  right: 0;
  z-index: 5000;
  color: white;
`
export const Container = styled.div`
  margin: 0;
  padding: 40px;
`
export const NavWrapper = styled.ul`
  margin: 120px 0 0 0;
  padding: 0;
  list-style: none;
`

export const NavItem = styled.li`
  margin-bottom: 12px;
`

export const NavLink = styled.a`
  font-family: ${theme.typography.drawer.fontFamily};
  font-weight: ${theme.typography.drawer.fontWeight};
  font-size: ${theme.typography.drawer.fontSize};
  line-height: ${theme.typography.drawer.lineHeight};
  letter-spacing: ${theme.typography.drawer.letterSpacing};

  color: white;
  text-decoration: none;

  &.active {
    color: white;
  }
`

export const InActiveLabel = styled.span`
  text-shadow: none;
  font-size: 10px;
  color: white;
  display: inline-block;
  padding: 0 8px;
  height: auto;
  line-height: 16px;
`

export const InActiveLink = styled.span`
  font-family: ${theme.typography.drawer.fontFamily};
  font-weight: ${theme.typography.drawer.fontWeight};
  font-size: ${theme.typography.drawer.fontSize};
  line-height: ${theme.typography.drawer.lineHeight};
  letter-spacing: ${theme.typography.drawer.letterSpacing};

  cursor: not-allowed;
  color: transparent;
  text-shadow: 0 0 5px rgba(255,255,255,0.5);
  position: relative;
`