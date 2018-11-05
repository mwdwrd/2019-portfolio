import React from 'react'
import * as Style from './biography.style.js'
import Layout from '../components/layout/index'
import Image from '../components/image/index'
import WYSIWYG from '../components/wysiwyg/index'
import ResumeItem from '../components/resumeItem/index'
import { Container, Row, Col } from 'react-grid-system'
import { Hidden } from 'react-grid-system'

import roula_1_fullsize from '../static/images/fullsize/portrait.jpg'
import roula_1_thumbnail from '../static/images/small/portrait.jpg'

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
                <Style.Bio>
                  <WYSIWYG data-aos="fade-right">
                  <p>
                    I'm a Creative Director, Designer and Developer based in New York City. I spend my time as the Design Director for Ace Content, and am constantly pursuing projects in the hard-to-explain yet harder-to-understand space between design, storytelling and new technologies.
                  </p>
                  <p>
                    I cut my teeth working as a web developer and graphic designer for the Australian Skateboard and Lifestyle magazine, <a target="_blank" href="https://monsterchildren.com/">Monster Children</a>. The job requirements were simple: The successful applicant must design and code the Mooks Artspace competition website, solve a Rubix cube in under a minute, and smoke a bong — all in the first day. After 18 months working with Monster Children, I never once nailed the Rubix cube but definitely knew my way around inDesign.
                  </p>
                  <p>
                    Having fulfilled my duties as a part-time skateboarder that lived full-time in a computer, I literally rolled my chair down the hallway to <a target="_blank" href="http://deuscustoms.com/">Deus Ex Machina</a>. At the time, Deus was a humble design team of 3 (two of which were Dare Jennings and Carby Tuckwell – down-under design and subculture royalty) and a wondrous workshop of misfit motorcycle mechanics — building some of the most insane machines I’d ever seen. I spent 6 formative years with the cult lifestyle outfit, working on everything from designing tee graphics, photographing seasonal campaigns and cultural events to building their online platform and crafting retail experiences such as Los Angeles’ Emporium of Postmodern Activities and Camperdown’s House of Simple Pleasures. 6 global locations and a family of over 100 later, I left as Art Director to scratch an entrepreneurial itch that was seeping into my daily rituals.
                  </p>
                  <p>
                    Putting my product design degree to good use, I made the early move into the Mens skincare market — with a brand and product vision that focused on 100% natural, native Australian ingredients with the aesthetics of a Swedish design house. The timing was right, and <a target="_blank" href="https://gentlemansbrand.co/">Gentleman's Brand Co</a> expanded quickly to a range of products and a global distribution network of 60+ top retailers — including the late Colette Paris (our very first retail partner) and Barney’s New York. I spent my days with Gentleman’s Brand Co as Creative Director and drove the product vision for the brand. My sister Sally Woodward-Hawes - my business partner and fragrance guru - and I sold the business 3 years later.
                  </p>
                  <p>
                    Between stints in Advertising with <a target="_blank" href="https://www.tbwa.com.au/">TBWA Sydney</a> and creative consultation and development for a range of tech startups I became further enthralled in the intersection between new technologies, design systems and communication. I consulted with companies such as <a target="_blank" href="https://identitii.com/">Identitii</a>, heading up the design and communications strategy for the Anti-Money-Laundering blockchain company based on the Ripple protocol; <a target="_blank" href="http://visionofhumanity.org/">Vision of Humanity</a>, building data visualization tools that expressed the world’s peace and terror indexes for the United Nations; and Nestle, R&D and development for a food-wastefulness app that aimed to empowering co-workers to on-sell their left-over meals from the night before.
                  </p>
                  <p>
                    This motivation in my professional pursuit to work in bleeding-edge industries lead me to <a target="_blank" href="https://roam.co/">Roam CoLiving</a> - a sprawled team of Y-Combinator backed entrepreneurs with a singular focus to shift the world to live nomadically - “Sign a single lease and live around the world, for a week or a lifetime”. I headed up creative direction, design and product development for the company as we expanded from our proof-of-concept compound in Bali to 8 fully-occupied, boutique locations strung out across the globe.
                  </p>
                  <p>
                    My new-found inspiration for combining travel and work pushed to leave the Australian summers (for now) and into the hustle-and-bustle of New York’s Chinatown, where I worked as a freelance Creative Director and Developer for consumer product and lifestyle brands and on collaborative projects with the misfit bunch at <a target="_blank" href="https://studioparadise.com/">Studio Paradise</a>.
                  </p>
                  </WYSIWYG>
                </Style.Bio>
              </Col>
              <Col xs={12} md={4} lg={3} offset={{ lg: 1 }}>

                <Hidden xs>
                  <Style.ProfileCard>
                    <Style.ProfileImage>
                      <Image
                        srcPreload={roula_1_thumbnail}
                        srcLoaded={roula_1_fullsize}
                        ratio={'1:1'}
                      />
                    </Style.ProfileImage>
                    <Style.ProfileName>
                      Matthew Woodward
                    </Style.ProfileName>
                    <Style.ProfileDetails>
                      <a href="mailto:mwdwrd@gmail.com">mwdwrd@gmail.com</a><br />
                      <a href="tel:+16465719510">+1 (646) 571-9510</a><br />
                      <a href="https://instagram.com/mwdwrd/">Instagram</a><br />
                      <a href="https://github.com/mwdwrd/">Github</a><br />
                      <a href="https://www.linkedin.com/in/mwdwrd/">LinkedIn</a>
                    </Style.ProfileDetails>
                  </Style.ProfileCard>
                </Hidden>

                <Style.Resume>
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '2017 — Current',
                    company: 'Ace / Anomaly',
                    position: 'Design Director',
                    desc: 'Head of Design for various advertising campaigns and original content series for Budweiser, The North Face, Dean & DeLuca, New Balance, Marriott, Master & Dynamic, Perrier, San Pellegrino and Panera.'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '2016 — 17',
                    company: 'Roam Coliving',
                    position: 'Creative Director',
                    desc: 'Creative Director and lead front-end developer for the global community of boutique coliving and coworking spaces, funded by Y-combinator.'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '2014 — 15',
                    company: 'TBWA',
                    position: 'Art Director',
                    desc: 'Rebrand and Campaign work for David Jones'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '2009 — 14',
                    company: 'Deus Ex Machina',
                    position: 'Art Director',
                    desc: 'Art Director and head of digital for the cult Australian motorcycle, surf and lifestyle brand.'
                  }} />
                  <ResumeItem
                    data-aos="fade-right"
                    data-aos-delay={200}
                    data={{
                    year: '2007 — 10',
                    company: 'Monster Children',
                    position: 'Graphic Designer',
                    desc: 'Quarterly lifestyle magazine - surf, skateboarding, music, travel, art, design, photography.'
                  }} />
                </Style.Resume>
              </Col>
            </Row>
          </Container>
        </Style.Wrapper>
        
      </Layout>
    )
  }
}
