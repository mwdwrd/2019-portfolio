import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'
import Vimeo from '../../../vimeo/index'
import Caption from '../../../caption/index'

export default class VimeoWrapper extends React.Component {
  render() {
    const { data } = this.props
    const width = data.primary.width
    const offset = data.primary.offset
    
    return (
      <Row>
        <Col xs={12} md={width} offset={{ md: offset }}>
          <Style.Wrapper>
            <Vimeo
              id={data.primary.video_id}
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
