import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export function configureStore() {
  return createStore(
    rootReducer,
    compose(
      DevTools.instrument()
    )
  );
}
