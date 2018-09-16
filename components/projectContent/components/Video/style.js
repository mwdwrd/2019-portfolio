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
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: ${generateRatio};
  height: 0;
  margin: 0 0 16px 0;

  object,
  embed,
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`