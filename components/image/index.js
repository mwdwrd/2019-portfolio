import React from 'react'
import * as Style from './style.js'
import Caption from '../caption/index'

class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageLarge: '',
      loadedClassName: ''
    }
  }

  componentDidMount() {
    const { srcLoaded } = this.props
    const hdLoaderImg = document.createElement('img')

    hdLoaderImg.src = srcLoaded

    if (!hdLoaderImg.complete) {
      this.setState({
        imageLarge: srcLoaded
      })
      setTimeout(() => {
        this.setState({
          loadedClassName: 'loaded'
        })
      }, 300)
    }
  }

  render() {
    const { caption, srcPreload, ratio } = this.props
    const { imageLarge, loadedClassName } = this.state

    return (
      <Style.Wrapper>
        <Style.ImageWrapper ratio={ratio}>
          <Style.ImageLoaded className={loadedClassName} source={imageLarge} />
          <Style.ImagePreload source={srcPreload} />
        </Style.ImageWrapper>
        {caption && <Caption data={{ caption: caption.text, align: caption.align }} /> }
      </Style.Wrapper>
    )
  }
}

export default Image
