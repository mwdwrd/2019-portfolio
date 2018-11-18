import React from 'react'
import { Player, ControlBar } from 'video-react'
import * as Style from './style.js'

export default class Video extends React.Component {
  render() {
    const { src, ratio } = this.props

    return (
      <Style.Wrapper>
        <Style.VideoEmbed ratio={ratio}>
          <Player
            playsInline
            src={src}
            autoPlay={true}
            loop={true}
            aspectRatio={ratio}
          >
            <ControlBar
              autoHide={false}
              disableCompletely={true}
            />
          </Player>
        </Style.VideoEmbed>
      </Style.Wrapper>
    )
  }
}
