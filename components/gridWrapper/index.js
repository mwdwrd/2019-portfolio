import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

export default class GridWrapper extends React.Component {
  render() {
    const {
      children,
      columnSpan,
      columnOffset
    } = this.props

    return (
      <Container>
        <Row>
          <Col xs={12} md={columnSpan} offset={{ md: columnOffset }}>
            {children}
          </Col>
        </Row>
      </Container>
    )
  }
}
