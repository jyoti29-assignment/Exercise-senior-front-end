import React from 'react'
import { ReactDOM } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { composeWithDevTools } from 'redux-devtools-extension'

import './assets/style/index.css'

import reducer from './reducers'
import assetsMiddleWare from './middleware'
import App from './App'

const middleware = applyMiddleware(assetsMiddleWare)

const store = createStore(
    reducer,
    composeWithDevTools(middleware),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
