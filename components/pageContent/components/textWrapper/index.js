import React from 'react'
import * as Style from './style.js'
import { Row, Col } from 'react-grid-system'
import { RichText } from 'prismic-reactjs'
import WYSIWYG from '../../../wysiwyg/index'
import { linkResolver } from '../../../../util/helper'

export default class TextWrapper extends React.Component {
  render() {
    const { data } = this.props
    const width = data.primary.width
    const offset = data.primary.offset
    
    return (
      <Row>
        <Col xs={12} md={width} offset={{ md: offset }}>
          <Style.Wrapper>
            <WYSIWYG>
              { RichText.render(data.primary.text, linkResolver) }
            </WYSIWYG>
          </Style.Wrapper>
        </Col>
      </Row>
    )
  }
}
