import React from 'react'
import { Player, ControlBar } from 'video-react'
import Caption from '../caption/index'
import * as Style from './style.js'

export default class Video extends React.Component {
  render() {
    const { data } = this.props

    const type = data.type
    const ID = data.id
    const ratio = data.ratio
    const src = `/static/video/${data.src}`
    const caption = data.cap
    const align = (data.capAlign) ? data.capAlign : 'left'
    
    return (
      <Style.Wrapper>
        <Style.VideoEmbed ratio={ratio}>
          {type === 'vimeo' &&
            <iframe
              src={`https://player.vimeo.com/video/${ID}?color=ffffff&title=0&byline=0&portrait=0`}
              width="100%"
              height="400"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen>
            </iframe>
          }
          {type === 'hosted' &&
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
          }
        </Style.VideoEmbed>
        {caption && <Caption data={{ caption, align }} /> }
      </Style.Wrapper>
    )
  }
}
