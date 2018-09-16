import React from 'react'
import { Player, ControlBar } from 'video-react'
import * as Style from './style.js'

class Video extends React.Component {
  render() {
    const { data } = this.props

    const content = data.content
    const type = content.type
    const ID = content.id
    const ratio = content.ratio
    const src = `/static/video/${content.src}`
    
    return (
      <Style.Wrapper ratio={ratio}>
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
        {type === 'youtube' && <div>Youtube</div>}
        {type === 'hosted' &&
          <Player
            playsInline
            src={src}
            autoPlay='true'
            loop='true'
            aspectRatio={ratio}
          >
            <ControlBar
              autoHide={false}
              disableCompletely={true}
            />
          </Player>
        }
      </Style.Wrapper>
    )
  }
}

export default Video
