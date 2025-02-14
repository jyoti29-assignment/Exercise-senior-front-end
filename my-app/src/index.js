import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker';

import reducer from './reducers'
import assetsMiddleWare from './Middleware/middleware'

const middleware = applyMiddleware(assetsMiddleWare)

const store = createStore(
    reducer,
    composeWithDevTools(middleware),
)

ReactDOM.render(<Provider store={store}>
        <App/>
      </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
