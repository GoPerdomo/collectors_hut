import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Layout from './containers/Layout';
import Profile from './routes/Profile';

import store from './store/reducer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/users/:id" component={ Profile } />
          {/* <Route exact path="/users/:id/collections/:id" component={ Collection } /> */}
        </Layout>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
