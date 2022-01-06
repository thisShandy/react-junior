import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
