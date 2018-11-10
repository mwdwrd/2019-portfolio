import React from 'react'
import * as Style from './other.style.js'
import Layout from '../components/layout/index'
import { getWorkAPI, getOtherAPI } from '../util/api'
import WorkContent from '../components/workContent/index'
import GridWrapper from '../components/gridWrapper/index'
import PageHeader from '../components/pageHeader/index'
// import InfiniteScroll from 'react-infinite-scroller'

export default class Other extends React.Component {

  static async getInitialProps({ query }) {
    const page = (query.page) ? query.page : 1
    const pageResults = await getOtherAPI()
    const workResults = await getWorkAPI({
      orderings: '[document.first_publication_date desc]' ,
      page
    })

    return {
      workData: workResults.results,
      pageData: pageResults.results[0],
      currentPage: page
    }
  }

  render() {
    const {
      workData = [],
      pageData = [],
      meta = {
        title: `Other`,
        description: ``,
        keywords: ``
      }
    } = this.props

    return (
      <Layout meta={meta}>
        <Style.Wrapper>
          <PageHeader content={pageData.data.body} />
          {workData.map((post, index) => (
            <GridWrapper
              key={index}
              columnSpan={parseInt(post.data.columnspan)}
              columnOffset={parseInt(post.data.columnoffset)}>
              <WorkContent data={post.data.body} />
            </GridWrapper>
            ))}
        </Style.Wrapper>
      </Layout>
    )
  }
}
