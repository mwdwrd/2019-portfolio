import React from 'react'
import * as Style from './style.js'
import Image from '../image/index'
import Vimeo from '../vimeo/index'
import Video from '../video/index'
import Caption from '../caption/index'
import { getImageRatio } from '../../util/helper'

export default class WorkContent extends React.Component {
  renderProjectContents() {
    const { data } = this.props

    if (data) {
      const contentItems = data.map((content, index) => {
        const type = content.slice_type

        // console.log(content)
        if(type == 'image' || type == 'vimeo' || type == 'hosted_video') {
          return (
            <Style.ContentItem key={index} data-aos="fade-up">

              {type === 'image' &&
                <div>
                  <Image
                    alt={''}
                    srcPreload={content.primary.singleimage.thumbnail.url}
                    srcLoaded={content.primary.singleimage.large.url}
                    ratio={getImageRatio(content.primary.singleimage.dimensions.width, content.primary.singleimage.dimensions.height)}
                  />
                  {content.primary.caption &&
                    <Caption caption={content.primary.caption} />
                  }
                </div>
              }

              {type === 'vimeo' &&
                <div>
                  <Vimeo
                    id={content.primary.video_id}
                    ratio={content.primary.ratio}
                  />
                  {content.primary.caption &&
                    <Caption caption={content.primary.caption} />
                  }
                </div>
              }

              {type === 'hosted_video' &&
                <div>
                  <Video
                    src={content.primary.video_file.url}
                    ratio={content.primary.ratio}
                  />
                  {content.primary.caption &&
                    <Caption caption={content.primary.caption} />
                  }
                </div>
              }

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
    const ProjectContents = this.renderProjectContents()
    
    return (
      <Style.Wrapper>
        {ProjectContents}
      </Style.Wrapper>
    )
  }
}
