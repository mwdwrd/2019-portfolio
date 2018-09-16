import React from 'react'
import * as Style from './style.js'

class Section extends React.Component {
  render() {
    const { data } = this.props

    const content = data.content
    const title = content.title
    const body = content.body

    return (
      <Style.Wrapper>

        <Style.Header>
          <Style.Title>
            {title}
          </Style.Title>
        </Style.Header>

        {body &&
          <Style.Body>
            {body}
          </Style.Body>
        }

      </Style.Wrapper>
    )
  }
}

export default Section
