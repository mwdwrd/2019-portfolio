import React from 'react'
import * as Style from './style.js'

class Image extends React.Component {
  render() {
    const { data } = this.props

    const content = data.content
    const imageLocation = content.location
    const imageSource = content.src
    const imageURL = (imageLocation === 'local') ? `static/images/${imageSource}` : imageSource

    return (
      <Style.Wrapper>
        <Style.Image src={imageURL} />
      </Style.Wrapper>
    )
  }
}

export default Image
