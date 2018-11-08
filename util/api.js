import Prismic from 'prismic-javascript'
import { PRISMIC_API_URL, PRISMIC_PAGE_COUNT } from './config'

const getWorkAPI = async params => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL)
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'work'),
      {
        orderings: '[my.work.date desc]',
        pageSize: PRISMIC_PAGE_COUNT,
        ...params
      }
    )

    return response
  } catch (error) {
    return error
  }
}

const getBioAPI = async params => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL)
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'biography'),
      { ...params }
    )

    return response
  } catch (error) {
    return error
  }
}

const getOtherAPI = async params => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL)
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'other'),
      { ...params }
    )

    return response
  } catch (error) {
    return error
  }
}

const getHomeAPI = async params => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL)
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'home'),
      { ...params }
    )

    return response
  } catch (error) {
    return error
  }
}

export {
  getWorkAPI,
  getBioAPI,
  getOtherAPI,
  getHomeAPI
}
