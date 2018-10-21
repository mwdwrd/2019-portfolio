import React from 'react'
import * as Style from './style.js'
import Caption from '../caption/index'

class Image extends React.Component {
  render() {
    const { data } = this.props

    const imageSource = data.src
    const URL = (!imageSource.includes("http")) ? `static/images/${imageSource}` : imageSource
    const caption = data.cap
    const align = (data.capAlign) ? data.capAlign : 'left'

    return (
      <Style.Wrapper>
        <Style.Image src={URL} />
        {caption && <Caption data={{ caption, align }} /> }
      </Style.Wrapper>
    )
  }
}

export default Image
