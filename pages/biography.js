import React from 'react'
import * as Style from './biography.style.js'
import Layout from '../components/layout/index'
import WYSIWYG from '../components/wysiwyg/index'
import ResumeItem from '../components/resumeItem/index'
import { Container, Row, Col } from 'react-grid-system'

export default class Biography extends React.Component {
  render() {
    const meta = {
      title: `Biography`,
      description: ``,
      keywords: ``
    }

    return (
      <Layout meta={meta}>

        <Style.Wrapper>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <WYSIWYG data-aos="fade-right">
                  <p>I'm Matthew Woodward — a Creative Director, Designer and Developer based in New York City. I spend my time as the Design Director for Ace Content, and am constantly pursuing projects in the hard-to-explain yet harder-to-understand space between design, storytelling and new technologies.</p>
                  <p>I cut my teeth working as a web developer and graphic designer for the Australian Skateboard and Lifestyle magazine, <a href="https://monsterchildren.com/">Monster Children</a>. The job requirements were simple: The successful applicant must design and code the Mooks Artspace competition website, solve a Rubix cube in under a minute, and smoke a bong (Note: I'm Australian...) — all in the first day. After 18 months working with MC, I never once nailed the Rubix cube but definitely knew my way around inDesign and TextEdit.</p>
                  <p>Having fulfilled my duties as part-time skateboarder that lived full-time in a computer, I <i>literally</i> rolled my chair down the hallway to <a href="https://deuscustoms.com/">Deus Ex Machina</a>. At the time, Deus was a humble design team of 3 (two of which were Dare Jennings and Carby Tuckwell – down-under design and subculture royalty) and a wondrous workshop of misfit motorcycle mechanics — building some of the most insane machines I’d ever seen. I spent 6 formative years with the cult lifestyle outfit, working on everything from designing tee graphics, photographing seasonal campaigns and cultural events, building the online platform at deuscustoms.com, and crafting retail experiences such as Los Angeles’ Emporium of Postmodern Activities and Camperdown’s House of Simple Pleasures. 6 global locations and a family of over 100 later, I left as Art Director to scratch an entrepreneurial itch that was seeping into my daily rituals.</p>
                </WYSIWYG>
              </Col>
              <Col xs={12} md={4} lg={3} offset={{ lg: 1 }}>
                <Style.Resume>
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '17 — Current',
                    company: 'Ace / Anomaly',
                    position: 'Design Director',
                    desc: 'Head of Design for various advertising campaigns and original content series for Budweiser, The North Face, Dean & DeLuca, New Balance, Marriott, Master & Dynamic, Perrier, San Pellegrino and Panera.'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '16 — 17',
                    company: 'Roam Coliving',
                    position: 'Creative Director',
                    desc: 'Creative Director and lead front-end developer for the global community of boutique coliving and coworking spaces, funded by Y-combinator.'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '14 — 15',
                    company: 'TBWA',
                    position: 'Art Director',
                    desc: 'Rebrand and Campaign work for David Jones'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '09 — 14',
                    company: 'Deus Ex Machina',
                    position: 'Art Director',
                    desc: 'Art Director and head of digital for the cult Australian motorcycle, surf and lifestyle brand.'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '07 — 10',
                    company: 'Monster Children',
                    position: 'Graphic Designer',
                    desc: 'Quarterly lifestyle magazine - surf, skateboarding, music, travel, art, design, photography.'
                  }} />
                </Style.Resume>
              </Col>
            </Row>
          </Container>
        </Style.Wrapper>

        <Style.ProfileImage image={'/static/images/portrait.jpg'}/>
        
      </Layout>
    )
  }
}
