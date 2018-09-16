import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  items: [],
  active: '',
  meta: {},
  sort: {
    type: 'publishDate',
    value: 'ASC'
  },
  siteData: {}
}

export const actionTypes = {
  SET_AIRDROPS: 'SET_AIRDROPS',
  SET_ACTIVE_AIRDROP: 'SET_ACTIVE_AIRDROP',
  SET_META: 'SET_META',
  SET_SORT: 'SET_SORT',
  SET_SITE_DATA: 'SET_SITE_DATA'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {

    case actionTypes.SET_AIRDROPS:
      return Object.assign({}, state, {
        items: action.airdrops
      })

    case actionTypes.SET_ACTIVE_AIRDROP:
      return Object.assign({}, state, {
        active: action.airdrop,
        meta: action.meta
      })

    case actionTypes.SET_META:
      return Object.assign({}, state, {
        meta: action.meta
      })

    case actionTypes.SET_SORT:
      return Object.assign({}, state, {
        sort: action.sort
      })

    case actionTypes.SET_SITE_DATA:
      return Object.assign({}, state, {
        siteData: action.siteData
      })

    default: return state
  }
}

// ACTIONS
export const setAirdrops = (airdrops) => dispatch => {
  return dispatch({
    type: actionTypes.SET_AIRDROPS,
    airdrops: airdrops
  })
}

export const setActiveAirdrop = (airdrop, meta) => dispatch => {
  return dispatch({
    type: actionTypes.SET_ACTIVE_AIRDROP,
    airdrop: airdrop,
    meta: meta
  })
}

export const setMeta = (meta) => dispatch => {
  return dispatch({
    type: actionTypes.SET_META,
    meta: meta
  })
}

export const setSort = (sort) => dispatch => {
  return dispatch({
    type: actionTypes.SET_SORT,
    sort: sort
  })
}

export const setSiteData = (siteData) => dispatch => {
  return dispatch({
    type: actionTypes.SET_SITE_DATA,
    siteDate: siteDate
  })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
