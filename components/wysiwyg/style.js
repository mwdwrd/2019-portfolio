import styled from 'styled-components'
import theme from '../../util/theme'

export const Wrapper = styled.div`
  font-family: ${theme.typography.body.fontFamily};
  font-weight: ${theme.typography.body.fontWeight};
  margin-bottom: 28px;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.1px;
  color: #222;

  a:link,
  a:visited {
    color: #222;
    text-decoration: none;
    border-bottom: 1px solid;
  }

  a:active,
  a:hover {
    cursor: alias;
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  p {
    margin-bottom: 28px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    font-family: 'AkzidenzGroteskBE-LightEx';
    font-size: 44px;
    line-height: 1.1;
    font-weight: 100;
    padding: 0;
    margin: 0 0 62px 0;
    letter-spacing: 0.1px;
    max-width: 90%;

    b {
      color: #162C83;
    }
  }
`