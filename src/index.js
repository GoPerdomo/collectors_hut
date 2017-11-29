import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store/reducer';
import Profile from './routes/Profile';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/users/:id" component={ Profile } />
        {/* <Route exact path="/users/:id/collections/:id" component={ Collection } /> */}
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
