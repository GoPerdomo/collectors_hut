import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../../components/Forms/EnterForms/LoginForm';

import { login } from '../../../store/actions';

const LoginTab = ({ login, isFailedLogin }) => {

  const handleLoginSubmit = (event, loginInfo) => {
    const { email, password } = loginInfo;

    event.preventDefault();

    if (email && password) {
      login({ email, password });
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <LoginForm handleSubmit={handleLoginSubmit} />
      <span style={isFailedLogin ? { display: "block", position: "absolute", left: "0", right: "0", marginTop: "0.5em", color: "red", fontSize: "1.2em", textAlign: "center" } : { display: "none" }}>
        Wrong email or password
      </span>
    </div>
  )
};

const mapStateToProps = state => {
  const { isFailedLogin } = state;

  return {
    isFailedLogin,
  }
};

const mapDispatchToProps = dispatch => ({
  login: loginInfo => dispatch(login(loginInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginTab);
