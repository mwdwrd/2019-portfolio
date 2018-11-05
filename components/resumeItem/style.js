import styled from 'styled-components'
import theme from '../../util/theme'

export const Wrapper = styled.li`
  margin: 0 0 40px 0;
  
  > span {
    display: block;
  }
`
export const Year = styled.span`
  font-family: 'Berthold', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  margin-bottom: 8px;
`
export const Company = styled.span`
  font-family: 'Berthold', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
`
export const Position = styled.span`
  font-family: 'Berthold', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`
export const Desc = styled.span`
  font-family: ${theme.typography.caption.fontFamily};
  font-weight: ${theme.typography.caption.fontWeight};
  font-size: ${theme.typography.caption.fontSize};
  line-height: ${theme.typography.caption.lineHeight};
  letter-spacing: ${theme.typography.caption.letterSpacing};

  margin-top: 3px;
  color: rgba(43, 51, 63, 0.7);

  a {
    color: inherit;
    text-decoration: none;
  }
`
