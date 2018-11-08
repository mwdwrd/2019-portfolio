import styled from 'styled-components'

function generateRatio(props) {
  if (props.ratio) {
    const ratio = props.ratio
    const xRatio = ratio.slice(0, ratio.indexOf(":"))
    const yRatio = ratio.split(':')[1]
    const ratioOffset = yRatio / xRatio * 100

    return `${ratioOffset}%`;
  } else {
    return `56.25%`;
  }
}

export const Wrapper = styled.div`

`
export const VideoFloat = styled.div`

`
export const VideoEmbed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`