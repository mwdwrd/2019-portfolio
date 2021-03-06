import styled from 'styled-components'
import theme from '../../util/theme'

export const Wrapper = styled.div`
  font-family: ${theme.typography.body.fontFamily};
  font-weight: ${theme.typography.body.fontWeight};
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  letter-spacing: ${theme.typography.body.letterSpacing};

  margin-bottom: 28px;
  color: #222;

  a {
    position: relative;
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 1px;
      width: 0;
      background: ${theme.colors.primary};
      -webkit-transition: width .5s;
      transition: width .5s;
    }
  }

  a:link,
  a:visited {
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  a:active,
  a:hover {
    cursor: alias;
    color: ${theme.colors.primary};
    text-decoration: none;

    &:after {
      width: 100%;
    }
  }

  p {
    margin-bottom: 28px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  b, strong {
    font-family: ${theme.typography.body.fontFamily};
    font-weight: 500;
  }

  h2 {
    font-family: 'Berthold', Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 40px;
    line-height: 1;
  }
  h3 {
    font-family: 'Berthold', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  h4 {
    font-family: 'Berthold', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`