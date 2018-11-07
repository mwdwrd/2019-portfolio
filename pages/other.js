import React from 'react'
import * as Style from './other.style.js'
import Layout from '../components/layout/index'
import { getWorkAPI } from '../util/api'
import { linkResolver } from '../util/helper'
import Link from 'next/link'
import WYSIWYG from '../components/wysiwyg/index'
import { Container, Row, Col } from 'react-grid-system'

const Other = (
  {
    posts = [],
    meta = {
      title: `Other`,
      description: ``,
      keywords: ``
    }
  }) => (
    <Layout meta={meta}>
      <Style.Wrapper>

        <Style.Post data-aos="fade-up">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <WYSIWYG data-aos="fade-right">
                  <p><b>"Other"</b> – A dedication to the things I'm working on, have thought about or never ended up finishing.</p>
                </WYSIWYG>
              </Col>
            </Row>
          </Container>
        </Style.Post>

        {posts.map((post, index) => (
          <Style.Post key={index} data-aos="fade-up">
            <Container>
              <Row>

                <Col md={12}>
                  <Link as={linkResolver(post)} href={`/work?slug=${post.uid}`} passHref>
                    {post.data.caption[0].text}
                  </Link>
                </Col>

              </Row>
            </Container>
          </Style.Post>
        ))}
    
      </Style.Wrapper>
    </Layout>
);

Other.getInitialProps = async ({ query }) => {
  const page = (query.page) ? query.page : 1
  const response = await getWorkAPI({
    page
  })

  return {
    posts: response.results,
    currentPage: page
  }
}

export default Other
