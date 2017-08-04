import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';

/* Index Config Redux, Middleware and Render the Application */
// Create redux store and apply middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Render the App to DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.git-main'));
