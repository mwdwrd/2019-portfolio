import React from 'react';
import Layout from '../components/layout/index';
import * as Style from './about.style.js';

export default class About extends React.Component {
  render() {
    const meta = {
      title: 'About'
    }

    return (
      <Layout meta={meta}>
        <Style.Title>About</Style.Title>
      </Layout>
    )
  }
}
