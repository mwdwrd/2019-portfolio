import React from 'react'

// Data & Styling
import * as Style from './style.js'

// Required Components
import Image from '../Image/index'
import Video from '../Video/index'
import Audio from '../Audio/index'

class Grid extends React.Component {
  renderGridContents() {
    let contentItems
    const { data } = this.props

    if (data) {
      return contentItems = data.sort((a, b) => a.position > b.position).map((content, index) => {
        const type = content.type

        if(type == 'image' || type == 'video' || type == 'audio') {
          return (
            <Style.ContentItem key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {type === 'image' && <Image data={content} />}
              {type === 'video' && <Video data={content} />}
              {type === 'audio' && <Audio data={content} />}
            </Style.ContentItem>
          )
        } else {
          return `Grid: Content type "${type}" not found.`
        }
      })
    }

    return 'No contents found.'
  }

  render() {
    const GridContents = this.renderGridContents()
    const { data } = this.props
    const length = data.length

    return (
      <Style.Wrapper columns={length}>
        {GridContents}
      </Style.Wrapper>
    )
  }
}

export default Grid
