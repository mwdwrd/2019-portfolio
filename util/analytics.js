import ReactGA from 'react-ga'
import { GA_ID } from './config'

export const initGA = () => {
  if(process.env.NODE_ENV === 'development') {
    console.log('GA init')
  }
  ReactGA.initialize(GA_ID, {
    debug: (process.env.NODE_ENV === 'development') ? true : false
  })
}

export const logPageView = () => {
  if(process.env.NODE_ENV === 'development') {
    console.log(`Logging pageview for ${window.location.pathname}`)
  }
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
