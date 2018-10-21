import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`
export const CoverImage = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  right: 100px;
  bottom: 100px;
  background-image: url('${props => props.image}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`