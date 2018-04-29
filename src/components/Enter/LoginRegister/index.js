import React from 'react';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import LoginTab from '../../../containers/Enter/LoginTab';
import RegisterTab from '../../../containers/Enter/RegisterTab';

// ========== Styles ==========
const paperStyle = {
  width: '50%',
  margin: '0 auto',
};

// ========== Component ==========
export default () => (
  <Paper zDepth={4} style={paperStyle}>
    <Tabs
      tabItemContainerStyle={{ backgroundColor: "#6D8EAD" }}
      inkBarStyle={{ backgroundColor: "#FF6517" }}
    >
      <Tab label="Login" >
        <LoginTab />
      </Tab>
      <Tab label="Register" >
        <RegisterTab />
      </Tab>
    </Tabs>
  </Paper>
);
