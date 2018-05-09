import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
