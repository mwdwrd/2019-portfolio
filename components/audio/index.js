import React from 'react'
import * as Style from './style.js'
import { PlayButton, Timer, Progress, Cover } from 'react-soundplayer/components'
import { withCustomAudio } from 'react-soundplayer/addons'

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle, artistTitle } = props

  return (
    <div>
      <PlayButton {...props} />
      <h2>{`${artistTitle} – ${trackTitle}`}</h2>
      <Timer {...props} />
      <Progress {...props} />
    </div>
  )
})

export default class Audio extends React.Component {
  render() {
    const { file, artist, title } = this.props

    return (
      <Style.Wrapper>
        <AWSSoundPlayer
          streamUrl={file}
          trackTitle={title}
          artistTitle={artist}
          preloadType="auto"
          onReady={() => console.log('track is loaded!')}
        />
      </Style.Wrapper>
    )
  }
}


