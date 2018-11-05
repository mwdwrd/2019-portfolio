import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Typekit from 'react-typekit'

export default class AircatchDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="author" content="Matthew Woodward" />
          <meta name="revisit-after" content="5" />
          <meta name="language" content="EN" />
          <meta name="copyright" content="© 2018 Matthew Woodward" />
          <meta name="robots" content="All" />
          <link rel="shortcut icon" href="/static/icons/favicon.ico" id="favicon-ico" />
          <Typekit kitId="vmx1okz" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
