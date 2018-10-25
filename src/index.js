/**
 * Exercise 3: use connect!
 *   Bind the store and actions to src/mario/containers/App using connect.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './mario/reducers';
import App from './mario';

// redux store setup
export const store = createStore(reducer);

// render the app
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
render();

store.subscribe(render);
