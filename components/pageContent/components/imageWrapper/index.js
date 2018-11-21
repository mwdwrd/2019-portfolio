import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'
import Image from '../../../image/index'
import { getImageRatio } from '../../../../util/helper'
import Caption from '../../../caption/index'

export default class ImageWrapper extends React.Component {
  render() {
    const { data } = this.props
    const width = data.primary.width
    const offset = data.primary.offset
    
    return (
      <Row>
        <Col xs={12} md={width} offset={{ md: offset }}>
          <Style.Wrapper>
            <Image
              alt={''}
              srcPreload={data.primary.image.thumbnail.url}
              srcLoaded={data.primary.image.large.url}
              ratio={getImageRatio(data.primary.image.dimensions.width, data.primary.image.dimensions.height)}
            />
            {/* {data.primary.caption &&
              <Caption caption={data.primary.caption} />
            } */}
          </Style.Wrapper>
        </Col>
      </Row>
    )
  }
}
