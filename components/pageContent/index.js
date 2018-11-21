import React from 'react'
import * as Style from './style.js'
import { Container } from 'react-grid-system'
import {
  ImageGridWrapper,
  ImageWrapper,
  VideoGridWrapper,
  VideoWrapper,
  VimeoWrapper,
  TextWrapper,
  SpacerWrapper,
  AudioWrapper
} from './components'

export default class PageContent extends React.Component {

  renderContent() {
    const { data } = this.props

    if (data) {
      const contentItems = data.map((content, index) => {
        const type = content.slice_type

        if(['image', 'vimeo', 'hosted_video', 'image_grid', 'text', 'spacer', 'audio', 'video_grid'].indexOf(type) >= 0) {
          return (
            <Style.ContentItem key={index} data-aos="fade-up">
              {type === 'image_grid' && <ImageGridWrapper data={content} /> }
              {type === 'image' && <ImageWrapper data={content} /> }
              {type === 'vimeo' && <VimeoWrapper data={content} /> }
              {type === 'hosted_video' && <VideoWrapper data={content} /> }
              {type === 'text' && <TextWrapper data={content} /> }
              {type === 'spacer' && <SpacerWrapper data={content} /> }
              {type === 'audio' && <AudioWrapper data={content} /> }
              {type === 'video_grid' && <VideoGridWrapper data={content} /> }
            </Style.ContentItem>
          )
        } else {
          return `Content type "${type}" not found.`
        }
      })

      return contentItems
    }

    return 'No contents found.'
  }

  render() {
    const ProjectContents = this.renderContent()
    
    return (
      <Style.Wrapper>
        <Container>
          {ProjectContents}
        </Container>
      </Style.Wrapper>
    )
  }
}
