import React from 'react'
import * as Style from './style.js'

export default class ExpanderList extends React.Component {
  render() {
    const { children, label } = this.props

    return (
      <Style.Wrapper data-aos="fade-up">
        {label && <Style.Label>{label}</Style.Label>}
        {children &&
          <Style.List>
            {children}
          </Style.List>
        }
      </Style.Wrapper>
    )
  }
}
