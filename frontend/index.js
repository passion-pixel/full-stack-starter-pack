import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route } from 'react-router';

import rootReducer from './reducers';
import DevTools from './containers/DevTools';
import AppContainer from './containers/AppContainer';
import './assets/stylesheets/base.scss';

const history = createHistory();

const store = createStore(
  combineReducers({
    rootReducer,
    router: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(history)),
    DevTools.instrument()
  )
);

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
);
