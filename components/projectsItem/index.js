import React from 'react'
import * as Style from './style.js'
import Image from './image/index.js'

class ProjectsItem extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Style.Wrapper>
        <Style.RouterLink href={data.uid}>
          <Style.HyperLink>
            <Style.Thumbnail>
              <Image source={data.thumbnail} />
            </Style.Thumbnail>
            <Style.Caption>
              {data.title}
            </Style.Caption>
          </Style.HyperLink>
        </Style.RouterLink>
      </Style.Wrapper>
    )
  }
}

export default ProjectsItem
