import React from 'react'
import ProjectsItem from '../projectsItem/index.js'
import * as Style from './style.js'

class Projects extends React.Component {

  renderProjects() {
    let projectItems
    const { projects } = this.props

    if (projects) {
      projectItems = projects.map((project, index) => {
        return (
          <Style.ProjectWrapper data-aos="fade-up" data-aos-delay={index * 100} key={index}>
            <ProjectsItem data={project} />
          </Style.ProjectWrapper>
        )
      })
    }

    return projectItems
  }

  render() {
    const ProjectItems = this.renderProjects()

    return (
      <Style.Wrapper>
        <Style.Projects>
          {ProjectItems}
        </Style.Projects>
      </Style.Wrapper>
    )
  }
}

export default Projects
