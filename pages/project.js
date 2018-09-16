import React from 'react'

// Data & Styling
import data from '../data/projects.json'
import * as Style from './project.style.js'

// Required Components
import Layout from '../components/layout/index'
import ProjectContent from '../components/projectContent/index'

// Component
export default class Project extends React.Component {
  static async getInitialProps ({ query }) {
    if (data.projects && query && query.uid) {
      const project = data.projects.find(item => item.uid === query.uid)
      const title = project.title
      const description = project.description
      const meta = {
        title: `${title}`,
        description: `${description}`,
        keywords: `${title}`
      }

      const theme = project.theme
      const backgroundColor = theme.background_color
      const textColor = theme.text_color
      const pageTheme = {
        backgroundColor: `${backgroundColor}`,
        textColor: `${textColor}`
      }

      return { meta, project, pageTheme }
    }
  }

  render() {
    const { meta, project, pageTheme } = this.props

    return (
      <Layout meta={meta} theme={pageTheme}>
        <Style.Wrapper>

          <Style.ProjectHeader>
            <Style.Title data-aos="fade-up">{project.title}</Style.Title>
            <Style.Description data-aos="fade-up" data-aos-delay={200} dangerouslySetInnerHTML={{ __html: project.description }} />
          </Style.ProjectHeader>

          <Style.ProjectContent>
            <ProjectContent data={project.content} />
          </Style.ProjectContent>
        </Style.Wrapper>
      </Layout>
    )
  }
}
