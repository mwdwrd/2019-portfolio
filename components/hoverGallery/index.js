import React from 'react'
import * as Style from './style.js'
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position'
//import HoverGalleryWrapper from './components/hoverGalleryWrapper/index'
import CarouselWrapper from './components/carouselWrapper/index'
import Image from './components/image/index'
import Video from './components/video/index'

export default class HoverGallery extends React.Component {

  renderItems() {
    const { assets } = this.props

    if (assets) {
      const contentItems = assets.map((content, index) => {
        const type = content.slice_type

        if(type == 'image') {
          return (
            <Style.Item
              key={index}
              className='item'
              backgroundColor={content.primary.background_color}>
              {type === 'image' &&
                <Image
                  src={content.primary.image.url}
                  size={'contain'}
                  backgroundColor={content.primary.background_color}
                />
              }
            </Style.Item>
          )
        } else {
          return `Content type "${type}" not found.`
        }
      })

      return contentItems
    }

    return 'No contents found.'
  }

  render() {
    const Items = this.renderItems()

    return (
      <Style.Wrapper>
        <ReactCursorPosition 
          shouldStopTouchMovePropagation={true}
          activationInteractionMouse={INTERACTIONS.HOVER}>
          <CarouselWrapper>
            {Items}
          </CarouselWrapper>
        </ReactCursorPosition>
      </Style.Wrapper>
    )
  }
}
