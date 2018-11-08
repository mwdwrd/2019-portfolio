import React from 'react'
import * as Style from './style.js'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../util/helper'

export default class Caption extends React.Component {
  render() {
    const { caption } = this.props

    return (
      <Style.Wrapper align={'left'} data-aos="fade-in">
        <Style.Text>
          { RichText.render(caption, linkResolver) }
        </Style.Text>
      </Style.Wrapper>
    )
  }
}
