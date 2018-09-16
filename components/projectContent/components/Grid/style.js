import styled from 'styled-components'

 function generateGrid(props) {
  if (props.columns) {
    switch (props.columns) {
      case 1:
        return `1fr`;
      case 2:
        return `1fr 1fr`;
      case 3:
        return `1fr 1fr 1fr`;
      case 4:
        return `1fr 1fr`;
      case 6:
        return `1fr 1fr 1fr`;
      default:
        return `1fr 1fr`;
    }
  } else {
    return `1fr 1fr`;
  }
}

export const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  width: 100%;
  grid-template-columns: ${generateGrid};
`

export const ContentItem = styled.div`
  display: block;
  margin: 0;
`