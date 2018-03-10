import React from 'react';
import { render } from 'react-dom';
import {
  createStore,
  compose,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import DevTools from './containers/DevTools';
import AppContainer from './containers/AppContainer';
import './assets/stylesheets/base.scss';

console.log(history);

const store = createStore(
  rootReducer,
  compose(DevTools.instrument())
);


render(
  <Provider store={store}>
    <div>
      <AppContainer />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
