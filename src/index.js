import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './containers/Layout';
import Profile from './routes/Profile';
import Collection from './routes/Collection';
import Item from './routes/Item';

import store from './store/reducer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/users/:userId" component={ Profile } />
          <Route exact path="/users/:userId/collections/:collectionId" component={ Collection } />
          <Route exact path="/users/:userId/collections/:collectionId/items/:itemId" component={ Item } />
        </Layout>
      </Switch>
    </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
