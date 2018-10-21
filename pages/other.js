import React from 'react'
import * as Style from './other.style.js'
import Layout from '../components/layout/index'
import Image from '../components/image/index'
import Video from '../components/video/index'
import { Container, Row, Col } from 'react-grid-system'

export default class Other extends React.Component {
  render() {
    const meta = {
      title: `Other`,
      description: ``,
      keywords: ``
    }

    return (
      <Layout meta={meta}>
        <Style.Wrapper>

          <Style.Post data-aos="fade-up">
            <Container>
              <Row>
                <Col md={9}>
                  <Image data={{
                    src: 'roula1.png',
                    cap: 'An exploration for the Roula Cycling rebrand — inspired by forward-motion and a continious wave.',
                    capAlign: 'right'
                  }} />
                </Col>
              </Row>
            </Container>
          </Style.Post>

          <Style.Post data-aos="fade-up">
            <Container>
              <Row>
                <Col md={6} offset={{ md: 5 }}>
                  <Video data={{
                    src: 'md_film_SQ_02.mp4',
                    type: 'hosted',
                    ratio: '1:1',
                    cap: 'Materiality experiments from the Research and Development phase of Master & Dynamics MW07 True Wireless Campaign.',
                    capAlign: 'left'
                  }} />
                </Col>
              </Row>
            </Container>
          </Style.Post>

          <Style.Post data-aos="fade-up">
            <Container>
              <Row>
                <Col>
                  <Video data={{
                    id: '290824916',
                    type: 'vimeo',
                    ratio: '2.35:1',
                    cap: 'Dean & DeLuca: Performance titled "From Great to Greatness" — Directed by Lincoln Caplice.',
                    capAlign: 'left'
                  }} />
                </Col>
              </Row>
            </Container>
          </Style.Post>

          <Style.Post data-aos="fade-up">
            <Container>
              <Row>
                <Col md={8} offset={{ md: 3 }}>
                  <Image data={{
                    src: 'CURA.png',
                    cap: 'ILA CURA Type Treatment — 07/18',
                    capAlign: 'center'
                  }} />
                </Col>
              </Row>
            </Container>
          </Style.Post>

          <Style.Post data-aos="fade-up">
            <Container>
              <Row>
                <Col md={6} offset={{ md: 1 }}>
                  <Video data={{
                    src: 'md_film_SQ_01.mp4',
                    type: 'hosted',
                    ratio: '1:1',
                    cap: 'Materiality experiments from the Research and Development phase of Master & Dynamics MW07 True Wireless Campaign.',
                    capAlign: 'left'
                  }} />
                </Col>
              </Row>
            </Container>
          </Style.Post>

        </Style.Wrapper>
      </Layout>
    )
  }
}
