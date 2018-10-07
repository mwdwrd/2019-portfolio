import React from 'react'
import * as Style from './style.js'
import Image from './image/index.js'

class ProjectsItem extends React.Component {
  render() {
    const { data } = this.props
    const ratio = (data.thumbnail.ratio) ? data.thumbnail.ratio : '6:4'

    return (
      <Style.Wrapper href={data.uid}>
        <Style.HyperLink>

          <Style.Header>
            <Style.FlexWrapper>
              <Style.Date>{data.date}</Style.Date>
              <Style.Title>
                {data.client &&
                  <span>{data.client} —</span>
                }{data.title}
              </Style.Title>
            </Style.FlexWrapper>
          </Style.Header>

          <Style.Body>
            <Style.Thumbnail ratio={ratio}>
              <Image source={data.thumbnail.src} />
            </Style.Thumbnail>
          </Style.Body>

        </Style.HyperLink>
      </Style.Wrapper>
    )
  }
}

export default ProjectsItem
