import React from 'react'
import * as Style from './style.js'

class Text extends React.Component {
  render() {
    const { data } = this.props

    const content = data.content
    const body = content[0].body
    const title = content[0].title

    return (
      <Style.Wrapper>
        {title &&
          <Style.Title dangerouslySetInnerHTML={{ __html: title }} />
        }
        <Style.Content dangerouslySetInnerHTML={{ __html: body }} />
      </Style.Wrapper>
    )
  }
}

export default Text
