import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'

export default class SpacerWrapper extends React.Component {
  render() {
    const { data } = this.props
    
    return (
      <Row>
        <Col xs={12}>
          <Style.Wrapper size={data.primary.size}/>
        </Col>
      </Row>
    )
  }
}
