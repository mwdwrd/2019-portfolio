import React from 'react'
import * as Style from './case-study.style.js'
import { getCaseStudyAPI } from '../util/api'
import Layout from '../components/layout/index'

import { Container, Row, Col } from 'react-grid-system'
import WYSIWYG from '../components/wysiwyg/index'
import ExpanderList from '../components/expanderList/index'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../util/helper'

export default class CaseStudy extends React.Component {

  static async getInitialProps(context) {
    const { slug } = context.query
    const response = await getCaseStudyAPI(slug)
    const pageData = response.results[0].data

    const title = pageData.title[0].text

    return {
      pageData,
      meta: {
        title: `Case Study | ${title}`,
        description: ``,
        keywords: ``
      }
    }
  }

  render() {
    const {
      pageData,
      meta
    } = this.props

    const title = pageData.title[0].text
    const introduction = pageData.introduction
    const year = pageData.year
    const agency = pageData.agency
    const roles = pageData.roles.map((role, index) => {
      return (
        <Style.ListItem key={index}>
          {role.key_roles.data.title[0].text}
        </Style.ListItem>
      )
    })
    const collaborators = pageData.collaborators.map((collaborator, index) => {
      return (
        <Style.ListItem key={index}>
          {collaborator.key_collaborators.data.full_name[0].text}
        </Style.ListItem>
      )
    })

    return (
      <Layout meta={meta}>
        <Style.Wrapper>
          <Container>

            <Row>
              <Col xs={12} md={6} offset={{ md: 3 }}>
                <Style.Heading data-aos="fade-up">
                  <WYSIWYG>
                    <h4>Master & Dynamic</h4>
                    <h2>{title}</h2>
                  </WYSIWYG>
                </Style.Heading>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={3}>
                {year && 
                  <ExpanderList label='Year'>
                    <Style.ListItem>{year}</Style.ListItem>
                  </ExpanderList>
                }
                {agency && 
                  <ExpanderList label='Agency'>
                    <Style.ListItem>{agency}</Style.ListItem>
                  </ExpanderList>
                }
                {roles &&
                  <ExpanderList label='Roles'>
                    {roles}
                  </ExpanderList>
                }
                {collaborators &&
                  <ExpanderList label='Collaborators'>
                    {collaborators}
                  </ExpanderList>
                }
              </Col>
              <Col xs={12} md={6}>
                <Style.Introduction data-aos="fade-up">
                  <WYSIWYG>
                    { RichText.render(introduction, linkResolver) }
                  </WYSIWYG>
                </Style.Introduction>
              </Col>
            </Row>

          </Container>
        </Style.Wrapper>
      </Layout>
    )
  }
}
