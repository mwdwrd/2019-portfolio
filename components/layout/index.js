import Head from 'next/head'
import { locale } from '../../util/locale'
import Header from '../header/index.js'
import * as Style from './style.js'

export default ({ children, meta, theme, query }) => (
  <Style.Wrapper theme={theme}>

  	<Head>
      <title>{(meta.title) ? meta.title : locale.en.meta.title}</title>
      <meta name="abstract" content={(meta.title) ? meta.title : locale.en.meta.title} />
      <meta name="abstract" content={(meta.description) ? meta.description : locale.en.meta.description} />
      <meta name="description" content={(meta.description) ? meta.description : locale.en.meta.description} />
      <meta name="keywords" content={(meta.keywords) ? meta.keywords : locale.en.meta.keywords} />
    </Head>

    <Style.Header>
      <Header />
    </Style.Header>

    <Style.Body>
    	{ children }
    </Style.Body>

  </Style.Wrapper>
)
