import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './components/Layout';
import Home from './routes/Home';
import Enter from './routes/Enter';
import Profile from './routes/Profile';
import Collection from './routes/Collection';
import Item from './routes/Item';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

import store from './store/reducer';
import { fetchLocalUser } from './store/actions';
import './App.css';

store.dispatch(fetchLocalUser());

export default () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/enter" component={Enter} />
            <Route exact path="/users/:userId" component={Profile} />
            <Route exact path="/users/:userId/collections/:collectionId" component={Collection} />
            <Route exact path="/users/:userId/collections/:collectionId/items/:itemId" component={Item} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);
