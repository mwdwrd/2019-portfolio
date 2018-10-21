import styled from 'styled-components'

const headlineFontFamilyBold = 'Akkurat-Bold'
const bodyFontFamily = 'Akkurat'

export const Wrapper = styled.li`
  font-family: ${bodyFontFamily};
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.29px;
  margin: 0 0 30px 0;
`
export const Year = styled.span`
  display: block;
  font-family: ${headlineFontFamilyBold};
  font-weight: 200;
  font-size: 10px;
`
export const Company = styled.span`
  display: block;
  font-family: ${headlineFontFamilyBold};
  font-weight: 500;
`
export const Position = styled.span`
  font-family: ${bodyFontFamily};
  display: block;
`
export const Desc = styled.span`
  font-family: ${bodyFontFamily};
  display: block;
  font-size: 13px;
  line-height: 19px;
  margin-top: 5px;
  max-width: 90%;
  color: #555;

  a {
    color: inherit;
    text-decoration: none;
  }
`
