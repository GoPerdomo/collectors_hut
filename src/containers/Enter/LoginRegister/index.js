import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import LoginForm from '../../../components/Forms/EnterForms/LoginForm';
import RegisterForm from '../../../components/Forms/EnterForms/RegisterForm';

import { login, register } from '../../../store/actions';
import './style.css';


const LoginRegister = ({ login, register }) => {

  const handleLoginSubmit = (event, loginInfo) => {
    const { email, password } = loginInfo;

    event.preventDefault();

    if (email && password) {
      login({ email, password });
    }
  }

  const handleRegisterSubmit = (event, registerInfo) => {
    const { firstName, lastName, email, password, confirmPassword } = registerInfo;

    event.preventDefault();
    if (firstName && lastName && email && (password === confirmPassword)) {
      register({ firstName, lastName, email, password });
    }
  }

  return (
    <section className="login-register">
      <h1>Login to your account or register</h1>
      <Paper>
        <Tabs
          tabItemContainerStyle={{ backgroundColor: "#6D8EAD" }}
          inkBarStyle={{ backgroundColor: "#FF6517" }}
        >
          <Tab label="Login" >
            <LoginForm handleSubmit={handleLoginSubmit} />
          </Tab>
          <Tab label="Register" >
            <RegisterForm handleSubmit={handleRegisterSubmit} />
          </Tab>
        </Tabs>
      </Paper>
    </section>
  )
};

const mapDispatchToProps = (dispatch) => ({
  register: (newUserInfo) => dispatch(register(newUserInfo)),
  login: (loginInfo) => dispatch(login(loginInfo)),
});

export default withRouter(connect(null, mapDispatchToProps)(LoginRegister));
