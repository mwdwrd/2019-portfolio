import styled from 'styled-components'
import { ColumnWrapper } from '../util/mixin'
import media from "styled-media-query"

export const Wrapper = styled.div`
  ${ColumnWrapper};
  display: block;
  padding-top: 40vh;

  ${media.lessThan("medium")`
    padding-left: 25px;
    padding-right: 25px;
  `}
`
export const Post = styled.div`
  padding: 70px 0;

  ${media.lessThan("medium")`
    padding: 0 0 20px 0;
  `}
`