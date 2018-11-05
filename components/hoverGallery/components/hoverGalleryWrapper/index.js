import React from 'react'
import * as Style from './style.js'

class HoverGalleryWrapper extends React.Component {
  getCurrentItem(xAxis, areaWidth) {
    const { children } = this.props
    const itemCount = React.Children.count(children)
    const columnWidth = Math.ceil(areaWidth/itemCount)

    if(xAxis) {
      for (var i=0; i < itemCount+1; i++) {
        if(xAxis < columnWidth * i) {
          return i
        }
      }
    } else {
      return 1
    }
    
  }

  render() {
    const {
      children,
      position: {
        x = 0
      } = {},
      elementDimensions: {
        width = 0
      } = {}
    } = this.props

    return (
      <Style.Wrapper>
        <Style.Items current={this.getCurrentItem(x, width)}>
          {children}
        </Style.Items>
      </Style.Wrapper>
    )
  }
}

HoverGalleryWrapper.defaultProps = {
  shouldShowIsActive: true
};

export default HoverGalleryWrapper;