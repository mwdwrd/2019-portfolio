import React from 'react'
import * as Style from './style.js'
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position'
import HoverGalleryWrapper from './components/hoverGalleryWrapper/index'

export default class HoverGallery extends React.Component {
  render() {
    return (
      <Style.Wrapper>
        <ReactCursorPosition activationInteractionMouse={INTERACTIONS.HOVER}>
          <HoverGalleryWrapper>
            <Style.Item
              className='item'
              source={'/static/images/fullsize/MD_Ear_MatteBlack.jpg'}
              size={'50%'}
              backgroundColor={'#f2f2f2'}
            />
            <Style.Item
              className='item'
              source={'/static/images/fullsize/MD_TortoiseShell_002.jpg'}
              size={'cover'}
              backgroundColor={'#f2f2f2'}
            />
            <Style.Item
              className='item'
              source={'/static/images/fullsize/kob_thumbnail.png'}
              size={'50%'}
              backgroundColor={'#ffffff'}
            />
            <Style.Item
              className='item'
              source={'/static/images/fullsize/roula_thumbnail.png'}
              size={'50%'}
              backgroundColor={'#ed3a25'}
            />
            <Style.Item
              className='item'
              source={'/static/images/fullsize/HC_001.png'}
              size={'cover'}
              backgroundColor={'#14259b'}
            />
            <Style.Item
              className='item'
              source={'/static/images/fullsize/GBC_004.png'}
              size={'50%'}
              backgroundColor={'#f19a17'}
            />
            <Style.Item
              className='item'
              source={'/static/images/fullsize/GBC_005.png'}
              size={'cover'}
              backgroundColor={'#ffffff'}
            />
            <Style.Item
              className='item'
              source={'/static/images/fullsize/VV_002.png'}
              size={'80%'}
              backgroundColor={'#ffffff'}
            />
          </HoverGalleryWrapper>
        </ReactCursorPosition>
      </Style.Wrapper>
    )
  }
}
