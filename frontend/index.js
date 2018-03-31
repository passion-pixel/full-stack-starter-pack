import React from 'react'
import { render } from 'react-dom'
import {
    createStore,
    compose,
    combineReducers,
    applyMiddleware,
    bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer,
         routerMiddleware } from 'react-router-redux'
import { Router,
         Route } from 'react-router'

import root from './reducers'
import DevTools from './containers/DevTools'
import AppContainer from './containers/AppContainer'
import './assets/stylesheets/base.scss'

const history = createHistory()

const store = createStore(
  combineReducers({
    root,
    router: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(history)),
    DevTools.instrument()
  )
)

export function combine(...args) {
  return state => Object.assign(...args.map(f => f(state)))
}

export function bindState(...args) {
  return (state) => {
    return Object.assign({}, ...args.map(key => ({[key]: state[key]})))
  }
}

export function bindActions(actionCreators) {
  return dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
}


render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={AppContainer} />
        <Route path="/devtools" component={DevTools} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
