import React from 'react'
import * as Style from './style.js'

class Image extends React.Component {
  render() {
    const { src, size, backgroundColor } = this.props

    return <Style.Wrapper src={src} size={size} backgroundColor={backgroundColor} />
  }
}

export default Image
