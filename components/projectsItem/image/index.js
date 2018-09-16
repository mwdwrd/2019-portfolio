import React from 'react';
import * as Style from './style.js';

class Image extends React.Component {
  render() {
    const { source } = this.props

    return (
      <Style.Wrapper source={'/static/images/' + source} />
    );
  }
}

export default Image
