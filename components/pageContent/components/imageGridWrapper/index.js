import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'
import Image from '../../../image/index'
import { getImageRatio } from '../../../../util/helper'
import Caption from '../../../caption/index'

export default class ImageGridWrapper extends React.Component {
  renderGrid() {
    const { data } = this.props
    const columns = data.primary.columns
    const items = data.items

    const gridItems = items.map((item, index) => {
      return (
        <Style.GridItem key={index}>
          <Image
            alt={''}
            srcPreload={item.image.thumbnail.url}
            srcLoaded={item.image.large.url}
            ratio={getImageRatio(item.image.dimensions.width, item.image.dimensions.height)}
          />
        </Style.GridItem>
      )
    })

    return gridItems
  }

  render() {    
    const { data } = this.props
    const columns = data.primary.columns
    const width = data.primary.width
    const offset = data.primary.offset
    const GridContents = this.renderGrid()
    
    return (
      <Row>
        <Col xs={12} md={width} offset={{ md: offset }}>
          <Style.Grid columns={columns}>
            {GridContents}
          </Style.Grid>
        </Col>
      </Row>
    )
  }
}
