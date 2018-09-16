import styled from 'styled-components';

function generateTheme(props) {
  const pageTheme = props.theme

  return `
    background-color: ${(pageTheme.backgroundColor) ? pageTheme.backgroundColor : '#000000'};
    color: ${(pageTheme.textColor) ? pageTheme.textColor : '#ffffff'};
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

export const Header = styled.div``