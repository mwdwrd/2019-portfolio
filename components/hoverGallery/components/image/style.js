import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url('${props => props.src}');
  background-size: ${props => props.size};
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${(props => props.backgroundColor) ? props => props.backgroundColor : 'transparent'};

  ${media.lessThan("medium")`
    background-size: ${props => props.size === 'cover' ? props => props.size : 'contain'};
  `}
`
