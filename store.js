import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { isMobile } from "react-device-detect"

const initState = {
  navOpen: false,
  device: (isMobile) ? 'mobile' : 'browser'
}

export const actionTypes = {
  TOGGLE_NAV: 'TOGGLE_NAV',
  CLOSE_NAV: 'CLOSE_NAV'
}

// REDUCERS
export const reducer = (state = initState, action) => {
  switch (action.type) {

    case actionTypes.TOGGLE_NAV:
      return Object.assign({}, state, {
        navOpen: !state.navOpen
      })
    
    case actionTypes.CLOSE_NAV:
      return Object.assign({}, state, {
        navOpen: false
      })

    default: return state
  }
}

// ACTIONS
export const toggleNav = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_NAV })
}
export const closeNav = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSE_NAV })
}

export const initStore = (initialState = initState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
