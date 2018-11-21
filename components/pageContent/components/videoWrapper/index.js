import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'
import Video from '../../../video/index'
import Caption from '../../../caption/index'

export default class VideoWrapper extends React.Component {
  render() {
    const { data } = this.props
    const width = data.primary.width
    const offset = data.primary.offset
    
    return (
      <Row>
        <Col xs={12} md={width} offset={{ md: offset }}>
          <Style.Wrapper>
            <Video
              src={data.primary.video_file.url}
              ratio={data.primary.ratio}
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
