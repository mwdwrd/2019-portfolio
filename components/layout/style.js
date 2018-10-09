import styled from 'styled-components'

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

export const Header = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  z-index: 5000;
`