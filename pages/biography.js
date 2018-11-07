import React from 'react'
import * as Style from './biography.style.js'
import Layout from '../components/layout/index'
import Image from '../components/image/index'
import WYSIWYG from '../components/wysiwyg/index'
import ResumeItem from '../components/resumeItem/index'
import { Container, Row, Col } from 'react-grid-system'
import { Hidden } from 'react-grid-system'
import { getBioAPI } from '../util/api'
import { RichText } from 'prismic-reactjs'
import { getImageRatio, linkResolver } from '../util/helper'

export default class Biography extends React.Component {

  static async getInitialProps() {
    const response = await getBioAPI()

    return {
      pageData: response.results[0]
    }
  }

  render() {
    const { pageData } = this.props
    const body = pageData.data.body
    const resume = pageData.data.resumeitem
    const links = pageData.data.links
    const portrait = pageData.data.portrait
    const name = pageData.data.name
    const meta = {
      title: pageData.data.metatitle,
      description: pageData.data.metadescription,
      keywords: pageData.data.metakeywords
    }

    return (
      <Layout meta={meta}>

        <Style.Wrapper>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Style.Bio>
                  <WYSIWYG data-aos="fade-right">
                    { RichText.render(body, linkResolver) }
                  </WYSIWYG>
                </Style.Bio>
              </Col>
              <Col xs={12} md={4} lg={3} offset={{ lg: 1 }}>

                <Hidden xs>
                  <Style.ProfileCard>

                    {portrait &&
                      <Style.ProfileImage>
                        <Image
                          alt={portrait.alt}
                          srcPreload={portrait.thumbnail.url}
                          srcLoaded={portrait.url}
                          ratio={getImageRatio(portrait.dimensions.width, portrait.dimensions.height)}
                        />
                      </Style.ProfileImage>
                    }

                    {name &&
                      <Style.ProfileName>
                        {name[0].text}
                      </Style.ProfileName>
                    }

                    {links &&
                      <Style.ProfileDetails>
                        {links.map((link, index) => (
                          <Style.ProfileLink key={index}>
                            <a target={(link.linkurl.target) ? link.linkurl.target : '_self'} href={link.linkurl.url}>
                              {link.linktitle}
                            </a>
                          </Style.ProfileLink>
                        ))}
                      </Style.ProfileDetails>
                    }

                  </Style.ProfileCard>
                </Hidden>

                {resume &&
                  <Style.Resume>
                    {resume.map((resumeItem, index) => (
                      <ResumeItem
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={200*index}
                        data={{
                          year: resumeItem.year,
                          company: resumeItem.company[0].text,
                          position: resumeItem.position,
                          desc: RichText.asText(resumeItem.description)
                        }} />
                    ))}
                  </Style.Resume>
                }

              </Col>
            </Row>
          </Container>
        </Style.Wrapper>
        
      </Layout>
    )
  }
}
