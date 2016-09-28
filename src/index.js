import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
// import { createStore } from 'redux'
// import store, { history } from './stores/index';
import routes from './routes';

// Render the main component into the dom
ReactDOM.render((
    <Provider>
      <Router history = {hashHistory}>
        {routes}
      </Router>
    </Provider>
  ), document.getElementById('app'));
