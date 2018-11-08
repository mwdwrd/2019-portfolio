import React from 'react'
import * as Style from './style.js'
import WYSIWYG from '../wysiwyg/index'
import GridWrapper from '../gridWrapper/index'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../util/helper'

export default class pageHeader extends React.Component {
  render() {
    const { content } = this.props

    return (
      <Style.Wrapper>
        <GridWrapper columnSpan={6} columnOffset={0}>
          <WYSIWYG data-aos="fade-right">
            { RichText.render(content, linkResolver) }
          </WYSIWYG>
        </GridWrapper>
      </Style.Wrapper>
    )
  }
}
