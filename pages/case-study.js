import React from 'react'
import * as Style from './case-study.style.js'
import { Container, Row, Col } from 'react-grid-system'
import Layout from '../components/layout/index'

export default class CaseStudy extends React.Component {


  render() {
    const meta = {
      title: `Case Study`,
      description: ``,
      keywords: ``
    }

    return (
      <Layout meta={meta}>

        <Style.Block>
          <Style.TopBlock>
            <Style.TopImageCover src={'/static/images/MD_SteelBlue_04-Background.png'} />
            <Style.TopImageBase data-aos="zoom-out" data-aos-delay={200} src={'/static/images/MD_SteelBlue_03-Rocks.png'} />
            <Style.TopImageContain data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay={600} src={'/static/images/MD_SteelBlue_02-Earphone.png'} />
            <Style.TopImageRocks data-aos="zoom-out" data-aos-delay={100} data-aos-easing="ease-out-cubic" src={'/static/images/MD_SteelBlue_01-TopRock.png'} />
          </Style.TopBlock>
        </Style.Block>

        <Style.Block>
          <Style.Intro>

            <Style.IntroContentContainer>
                <Container>
                  <Row>
                    <Col sm={3}>
                      <Style.Specs>
                        <Style.Spec data-aos="fade-right" data-aos-delay={200}>
                          <Style.SpecKey>Client</Style.SpecKey>
                          <Style.SpecValue><a href="https://masterdynamic.com/">{'Master & Dynamic'}</a></Style.SpecValue>
                        </Style.Spec>
                        <Style.Spec data-aos="fade-right" data-aos-delay={400}>
                          <Style.SpecKey>Agency</Style.SpecKey>
                          <Style.SpecValue><a href="https://acecontent.com/">{'ACE / Anomaly New York'}</a></Style.SpecValue>
                        </Style.Spec>
                        <Style.Spec data-aos="fade-right" data-aos-delay={600}>
                          <Style.SpecKey>Role</Style.SpecKey>
                          <Style.SpecValue>Creative Director</Style.SpecValue>
                        </Style.Spec>
                        <Style.Spec data-aos="fade-right" data-aos-delay={800}>
                          <Style.SpecKey>Published</Style.SpecKey>
                          <Style.SpecValue>10 / 2018</Style.SpecValue>
                        </Style.Spec>
                      </Style.Specs>
                    </Col>
                    <Col sm={8}>
                      <Style.Heading1 data-aos="fade-up"><b>MW07</b> —<br />True Wireless Campaign</Style.Heading1>
                      <Style.Text data-aos="fade-up" data-aos-delay={200}>
                        <large>
                          <p>Budweiser builds beautifully designed, technically sophisticated premium audio tools for creative minds. Explore our headphones, earphones & more. We believe mastery is a never-ending exploration requiring a dynamic approach.</p>
                        </large>
                      </Style.Text>
                    </Col>
                  </Row>
                </Container>
            </Style.IntroContentContainer>

            <Style.CoverBlock>
              <Style.CoverImage data-aos="fade-right" data-aos-duration="500" data-aos-delay={200} src={'/static/images/tortoise-back.png'} />
              <Style.CoverImage data-aos="fade-right" data-aos-duration="400" src={'/static/images/tortoise-front.png'} />
            </Style.CoverBlock>

          </Style.Intro>
        </Style.Block>

        <Style.Block>
          <Style.Content>

            <Container>
              <Row>
                <Col sm={6} offset={{ sm: 3 }}>
                  <Style.Heading2 data-aos="fade-up">Storyboarding</Style.Heading2>
                </Col>
              </Row>
              <Row>
                <Col sm={6} offset={{ sm: 3 }}>
                  <Style.Text data-aos="fade-up" data-aos-delay={200}>
                    <p>Our composition system is elegant in its sheer simplicity of use — plus, it creates a subtle "U" wherever it appears. By defining the grid based on the logo the system stays flexible and beyond easy.</p>
                  </Style.Text>
                </Col>
              </Row>
            </Container>

          </Style.Content>
        </Style.Block>

        <Style.Block>
          <Style.Content>

            <Container>
              <Row>
                <Col sm={3}>
                  <Style.Heading2>Composition</Style.Heading2>
                </Col>
                <Col sm={6}>
                  <Style.Text>
                    <p>Our composition system is elegant in its sheer simplicity of use — plus, it creates a subtle "U" wherever it appears. By defining the grid based on the logo the system stays flexible and beyond easy.</p>
                  </Style.Text>
                </Col>
              </Row>
            </Container>

          </Style.Content>
        </Style.Block>

        <Style.Block backgroundColor={'#000000'} textColor={'#ffffff'}>
          <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
            <iframe
              src="https://player.vimeo.com/video/290822041?color=ff3200&title=0&byline=0&portrait=0"
              style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
              frameBorder="0">
            </iframe>
          </div>
        </Style.Block>

        <Style.Block backgroundColor={'#000000'} textColor={'#ffffff'}>
          <Style.Content>

            <Container>
              <Row>
                <Col sm={6}>
                  <Style.Heading2>A Study in Design</Style.Heading2>
                  <Style.Text>
                    <p>Master & Dynamic builds beautifully designed, technically sophisticated premium audio tools for creative minds. Explore our headphones, earphones & more. We believe mastery is a never-ending exploration requiring a dynamic approach. Sound is a catalyst and a powerful creative element, helping to focus, inspire, and transport your mind. We build sound tools for creative minds.</p>
                  </Style.Text>
                </Col>
              </Row>
            </Container>

          </Style.Content>
        </Style.Block>

        <Style.Block backgroundColor={'#151515'} textColor={'#ffffff'}>
          <Style.Content>

            <Container>
              <Row>
                <Col sm={6} offset={{ sm: 6 }}>
                  <Style.Heading2>Strategy</Style.Heading2>
                  <Style.Text>
                    <p>Master & Dynamic builds beautifully designed, technically sophisticated premium audio tools for creative minds. Explore our headphones, earphones & more. We believe mastery is a never-ending exploration requiring a dynamic approach. Sound is a catalyst and a powerful creative element, helping to focus, inspire, and transport your mind. We build sound tools for creative minds.</p>
                  </Style.Text>
                </Col>
              </Row>
            </Container>

          </Style.Content>
        </Style.Block>

      </Layout>
    )
  }
}
