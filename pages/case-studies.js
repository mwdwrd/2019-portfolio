import React from 'react'
import * as Style from './case-studies.style'
import Projects from '../components/projects/index'
import data from '../data/projects.json'
import Layout from '../components/layout/index'

export default class CaseStudies extends React.Component {
  render() {
    const meta = {
      title: `Case Studies`,
      description: ``,
      keywords: ``
    }

    return (
      <Layout meta={meta}>
        <Style.Wrapper>
          <Style.ProjectsWrapper>
            <Projects projects={data.projects} />
          </Style.ProjectsWrapper>
        </Style.Wrapper>
      </Layout>
    )
  }
}