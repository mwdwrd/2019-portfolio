import styled from 'styled-components'
import Link from 'next/link'
import theme from '../../util/theme'


export const Wrapper = styled.div`
  padding: 70px;
  margin: 0;
  font-family: 'Akkurat-Bold';
  font-size: 14px;
`
export const FlexWrapper = styled.div`
  display: flex;
`
export const LeftWrapper = styled.div`
  flex: 1;
`
export const RightWrapper = styled.div`
  flex: 1;
  text-align: right;

  span {
    display: inline-block;
    margin: 0 0 0 32px;
  }
`

export const Logo = styled.a`
  font-family: 'Akkurat-Bold';
  font-size: 32px;
  text-align: left;
  display: inline-block;
`
export const LogoLink = styled(Link)``