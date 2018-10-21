import React from 'react'
import * as Style from './prints.style.js'
import Layout from '../components/layout/index'

export default class Prints extends React.Component {
  render() {
    const meta = {
      title: `Prints`,
      description: ``,
      keywords: ``
    }

    return (
      <Layout meta={meta}>
        <Style.Wrapper>
          Prints
        </Style.Wrapper>
      </Layout>
    )
  }
}
