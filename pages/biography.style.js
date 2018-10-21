import styled from 'styled-components'
import { ColumnWrapper } from '../util/mixin'

export const Wrapper = styled.div`
  ${ColumnWrapper};
  display: block;
  padding-top: 40vh;
`
export const ProfileImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${props => props.image}');
  background-size: cover;
  margin-top: 140px;
`
export const Resume = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
