import React from 'react'
import { connect } from 'react-redux'
import { getHomeAPI } from '../util/api'
import Layout from '../components/layout/index'
import HoverGallery from '../components/hoverGallery/index'

class Index extends React.Component {
  static async getInitialProps() {
    const response = await getHomeAPI()

    return {
      pageData: response.results[0]
    }
  }

  render() {
    const {
      pageData = [],
      meta = {
        title: ``,
        description: ``,
        keywords: ``
      }
    } = this.props

    return (
      <Layout meta={meta}>
        <HoverGallery assets={pageData.data.body} />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    meta: state.meta
  };
};

export default connect(mapStateToProps)(Index)
