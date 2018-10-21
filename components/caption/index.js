import React from 'react'
import * as Style from './style.js'

export default class Caption extends React.Component {
  render() {
    const { data } = this.props

    const caption = data.caption
    const align = (data.align) ? data.align : 'left'

    return (
      <Style.Wrapper align={align} data-aos="fade-in">
        <Style.Text>{caption}</Style.Text>
      </Style.Wrapper>
    )
  }
}
