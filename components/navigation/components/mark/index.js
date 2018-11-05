import React from 'react';
import * as Style from './style.js';
import { MarkIcon } from '../../../icons/index'

export default class Mark extends React.Component {
  render() {
    const { active } = this.props
    const color = (active) ? 'white' : 'black'

    return ( 
      <Style.Wrapper color={color}>
        <MarkIcon />
      </Style.Wrapper>
    )
  }
}
