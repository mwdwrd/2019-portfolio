import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'
import Audio from '../../../audio/index'
import Caption from '../../../caption/index'

export default class AudioWrapper extends React.Component {
  render() {
    const { data } = this.props
    const width = data.primary.width
    const offset = data.primary.offset
    
    return (
      <Row>
        <Col xs={12} md={width} offset={{ md: offset }}>
          <Style.Wrapper>
            <Audio
              file={data.primary.file.url}
              artist={data.primary.track_artist}
              title={data.primary.track_title}
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
