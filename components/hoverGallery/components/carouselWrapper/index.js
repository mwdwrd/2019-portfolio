import React from 'react'
import * as Style from './style.js'
import Slider from "react-slick"

class CarouselWrapper extends React.Component {
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

  componentDidUpdate(prevProps) {
    const {
      position: { x = 0, y = 0 } = {},
      elementDimensions: { width = 0 } = {}
    } = this.props

    const oldIndex = this.getCurrentItem(prevProps.position.x, prevProps.elementDimensions.width)
    const newIndex = this.getCurrentItem(x, width)

    if (oldIndex !== newIndex) {
      this.slider.slickGoTo(newIndex-1)
    }
  }

  render() {
    const {
      children,
      position: { x = 0, y = 0 } = {},
      elementDimensions: { width = 0 } = {},
      isActive,
      settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: false,
        speed: 300,
        respondTo: 'slider',
        waitForAnimate: false
      }
    } = this.props
    const itemCount = React.Children.count(children)

    return (
      <Style.Wrapper>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {children}
        </Slider>
        <Style.ToolTip active={isActive} x={x} y={y}>
          {this.getCurrentItem(x, width)} / {itemCount}<br />
        </Style.ToolTip>
      </Style.Wrapper>
    )
  }
}

CarouselWrapper.defaultProps = {
  shouldShowIsActive: true
};

export default CarouselWrapper;