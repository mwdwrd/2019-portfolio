import React from 'react'
import { connect } from 'react-redux'
import * as Style from './index.style.js';
import Layout from '../components/layout/index';

class Index extends React.Component {

  render() {
    const meta = {
      title: ``,
      description: ``,
      keywords: ``
    }

    return (
      <Layout meta={meta}>
        <Style.CoverImage image={'/static/images/work.gif'}/>
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
