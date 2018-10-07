import React from 'react'
import * as Style from './case-study.style.js'
import { Container, Row, Col } from 'react-grid-system'

export default class CaseStudy extends React.Component {
  render() {
    return (
      <div>

        <Style.Block>
          <Style.Content>

            <Container>
              <Row>
                <Col sm={6} offset={{ sm: 3 }}>
                  <Style.Heading2>Storyboarding</Style.Heading2>
                </Col>
              </Row>
              <Row>
                <Col sm={6} offset={{ sm: 3 }}>
                  <Style.Text>
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

      </div>
    )
  }
}
