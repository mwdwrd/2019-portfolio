import styled from 'styled-components'
import { ColumnWrapper } from '../util/mixin'
import theme from '../util/theme'
import media from "styled-media-query"

export const Wrapper = styled.div`
  ${ColumnWrapper};
  display: block;
  padding-top: 40vh;
  padding-bottom: 70px;

  ${media.lessThan("medium")`
    padding-left: 25px;
    padding-right: 25px;
  `}
`
export const Bio = styled.div`
  margin-bottom: 70px;
`
export const ProfileCard = styled.div`
  margin-bottom: 70px;
`
export const ProfileImage = styled.div`
  margin-bottom: 16px;
  border-radius: 2px;
  overflow: hidden;
`
export const ProfileName = styled.div`
  font-family: 'Berthold', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
`
export const ProfileDetails = styled.ul`
  font-family: ${theme.typography.caption.fontFamily};
  font-weight: ${theme.typography.caption.fontWeight};
  font-size: ${theme.typography.caption.fontSize};
  line-height: ${theme.typography.caption.lineHeight};
  letter-spacing: ${theme.typography.caption.letterSpacing};
  color: rgba(43, 51, 63, 0.7);
  margin: 0;
  padding: 0;

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
`
export const ProfileLink = styled.li`
  list-style: none;
`
export const Resume = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
