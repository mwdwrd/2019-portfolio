import React from 'react'

// Data & Styling
import * as Style from './style.js'

// Required Components
import Image from './components/Image/index'
import Video from './components/Video/index'
import Audio from './components/Audio/index'
import Grid from './components/Grid/index'
import Section from './components/Section/index'

// Component
class ProjectContent extends React.Component {
  componentWillReceiveProps() { 
    AOS.refresh(); 
  } 

  renderProjectContents() {
    let contentItems
    const { data } = this.props

    if (data) {
      return contentItems = data.sort((a, b) => a.position > b.position).map((content, index) => {
        const type = content.type

        if(type == 'image' || type == 'video' || type == 'audio' || type == 'grid' || type == 'section') {
          return (
            <Style.ContentItem key={index} data-aos="fade-up">
              {type === 'image' && <Image data={content} />}
              {type === 'video' && <Video data={content} />}
              {type === 'grid' && <Grid data={content.content} />}
              {type === 'audio' && <Audio data={content} />}
              {type === 'section' && <Section data={content} />}
            </Style.ContentItem>
          )
        } else {
          return `Content type "${type}" not found.`
        }
      })
    }

    return 'No contents found.'
  }

  render() {
    const ProjectContents = this.renderProjectContents()
    
    return (
      <Style.Wrapper>
        {ProjectContents}
      </Style.Wrapper>
    )
  }
}

export default ProjectContent
