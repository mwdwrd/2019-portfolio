import React from 'react'
import * as Style from './style.js'

export default class ResumeItem extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Style.Wrapper>
        {data.year && <Style.Year>{data.year}</Style.Year>}
        {data.company && <Style.Company>{data.company}</Style.Company>}
        {data.position && <Style.Position>{data.position}</Style.Position>}
        {data.desc && <Style.Desc>{data.desc}</Style.Desc>}
      </Style.Wrapper>
    )
  }
}
