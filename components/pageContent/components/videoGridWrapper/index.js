import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'
import Video from '../../../video/index'

export default class VideoGridWrapper extends React.Component {
  renderGrid() {
    const { data } = this.props
    const items = data.items

    const gridItems = items.map((item, index) => {
      return (
        <Style.GridItem key={index}>
          <Video
            src={item.video_file.url}
            ratio={item.video_ratio}
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
