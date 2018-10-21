import React from 'react'
import * as Style from './style.js'

export default class WYSIWYG extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Style.Wrapper>
        {children}
      </Style.Wrapper>
    )
  }
}
