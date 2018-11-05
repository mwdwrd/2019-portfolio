import React from 'react'
import { Image, Video, Audio, Text, Grid, Section } from './components'
import * as Style from './style.js'

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

        if(type == 'image' || type == 'video' || type == 'text' || type == 'audio' || type == 'grid' || type == 'section' || type == 'spacer') {
          return (
            <Style.ContentItem key={index} data-aos="fade-up">
              {type === 'image' && <Image data={content} />}
              {type === 'video' && <Video data={content} />}
              {type === 'text' && <Text data={content} />}
              {type === 'grid' && <Grid data={content.content} />}
              {type === 'audio' && <Audio data={content} />}
              {type === 'section' && <Section data={content} />}
              {type === 'spacer' && <Style.Spacer />}
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
