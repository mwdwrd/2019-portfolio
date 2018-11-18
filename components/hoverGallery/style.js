import styled from 'styled-components'
import theme from '../../util/theme'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .slick-slider {
    position: absolute !important;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    .slick-list,
    .slick-track {
      height: 100%;
    }
    .slick-slide {
      > div {
        width: 100%;
        height: 100%;
      }
    }
  }
`

export const Item = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${(props => props.backgroundColor) ? props => props.backgroundColor : 'transparent'};
`