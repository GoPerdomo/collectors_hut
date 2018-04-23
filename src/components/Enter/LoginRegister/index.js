import React from 'react';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import LoginTab from '../../../containers/Enter/LoginTab';
import RegisterTab from '../../../containers/Enter/RegisterTab';

import './style.css';


const LoginRegister = () => {

  return (
    <section className="login-register">
      <h1>Login to your account or register</h1>
      <Paper>
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
    </section>
  )
};


export default LoginRegister;
