import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import AOS from 'aos'
import "../styles/styles.scss"

export default withRedux(initStore)(class Aircatch extends App {
  static async getInitialProps ({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  componentDidMount(){
    AOS.init({
      duration: 600,
      once: true,
      offset: 120,
      easing: 'ease-out-cubic'
    })
  }

  render () {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
})
