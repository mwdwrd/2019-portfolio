import React from 'react'
import { connect } from 'react-redux'

import * as Style from './index.style.js';
import Layout from '../components/layout/index';
import Projects from '../components/projects/index';
import data from '../data/projects.json';

class Index extends React.Component {

  render() {
    const { meta } = this.props;

    return (
      <Layout meta={meta}>
        <Style.Wrapper>
          <Style.ProjectsWrapper>
            <Projects projects={data.projects} />
          </Style.ProjectsWrapper>
        </Style.Wrapper>
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
