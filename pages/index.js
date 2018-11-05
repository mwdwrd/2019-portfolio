import React from 'react'
import { connect } from 'react-redux'
import * as Style from './index.style.js'
import Layout from '../components/layout/index'
import HoverGallery from '../components/hoverGallery/index'

class Index extends React.Component {

  render() {
    const meta = {
      title: ``,
      description: ``,
      keywords: ``
    }

    return (
      <Layout meta={meta}>
        <HoverGallery />
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
