import styled from 'styled-components'
import theme from '../../util/theme'

const activeState = state => {
  if (state.active) {
    return `
      color: ${theme.colors.white};
      border-bottom: 1px solid;
    `
  }
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px;
  margin: 0;
  color: #aaa;
  background-color: transparent;
  font-family: ${theme.typography.utility.fontFamily};
	font-weight: 300;
	font-size: 12px;
  line-height: 18px;
  z-index: 5000;
`

export const FlexWrapper = styled.div`
  display: flex;
`

export const LogoWrapper = styled.div`
  flex: 1;
`

export const MenuWrapper = styled.div`
  flex: 1;
`

export const Logo = styled.div`
  display: inline-block;
  width: 100%;
`

export const BiLine = styled.p`
  display: inline-block;
  margin: 0 12px 0 0;

  span {
    color: white;
  }
`

export const Menu = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
  text-align: right;
`

export const MenuItem = styled.li`
  display: inline-block;
  margin: 0 0 0 12px;
`

export const MenuItemLink = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  color: ${theme.colors.violetRed};
  font-family: ${theme.typography.utility.fontFamily};
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  text-decoration: none;

  > button {
    display: inline;
    position: relative;
    margin: 0;
    top: -1px;

    svg {
      width: auto;
      height: 10px;
    }
  }

  &:hover,
  &:active {
    cursor: pointer;
    color: ${theme.colors.white};
  }

  ${activeState};
`