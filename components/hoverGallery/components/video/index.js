import React from 'react'
import { Player, ControlBar } from 'video-react'
import * as Style from './style.js'

export default class Video extends React.Component {
  render() {
    const { src, ratio } = this.props

    return (
      <Style.VideoEmbed ratio={ratio}>
        <Player
          playsInline
          src={src}
          autoPlay={true}
          loop={true}
          width={'500px'}
          height={'500px'}
        >
          <ControlBar
            autoHide={false}
            disableCompletely={true}
          />
        </Player>
      </Style.VideoEmbed>
    )
  }
}
