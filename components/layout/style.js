import styled from 'styled-components'
import theme from '../../util/theme'

function generateTheme(props) {
  const pageTheme = props.theme

  return `
    background-color: ${(pageTheme.backgroundColor) ? pageTheme.backgroundColor : '#ffffff'};
    color: ${(pageTheme.textColor) ? pageTheme.textColor : '#000000'};
  `
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${generateTheme};
`

export const Body = styled.div`
  position: relative;
  margin: 0;
  height: 100%;

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
  }
`
