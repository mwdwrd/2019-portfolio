import React from 'react';
import * as Style from './style.js';
import { MarkIcon } from '../icons/index'

export default class Mark extends React.Component {
  render() {
    return ( 
      <Style.Wrapper>
        <MarkIcon />
      </Style.Wrapper>
    )
  }
}
