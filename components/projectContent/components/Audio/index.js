import React from 'react'

// Data & Styling
import * as Style from './style.js'

// Required Components
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...this.props} />
      <h2>{trackTitle}</h2>
      <Timer {...this.props} />
    </div>
  );
});

class Audio extends React.Component {
  render() {
    const { data } = this.props
    const content = data.content
    const location = content.location
    const source = content.src
    const title = content.title
    const url = (location === 'local') ? `static/audio/${source}` : source

    return (
      <Style.Wrapper>
        <AWSSoundPlayer
          streamUrl={url}
          trackTitle={title}
          preloadType="auto"
          onReady={() => console.log('track is loaded!')}
        />
      </Style.Wrapper>
    )
  }
}

export default Audio
