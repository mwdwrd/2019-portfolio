import React from 'react'
import * as Style from './style.js'

export default class Vimeo extends React.Component {
  render() {
    const { id, ratio } = this.props
    
    return (
      <Style.Wrapper>
        <Style.VideoEmbed ratio={ratio}>
            <iframe
              src={`https://player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`}
              width="100%"
              height="400"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen>
            </iframe>
        </Style.VideoEmbed>
      </Style.Wrapper>
    )
  }
}
