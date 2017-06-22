import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './components/App'
import reducer from './reducers'
import { fetchGradebook } from './actions'
import registerServiceWorker from './registerServiceWorker';
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// on page load, request the gradebook
store.dispatch(fetchGradebook());
