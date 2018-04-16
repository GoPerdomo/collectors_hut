import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginButton from '../../../components/Buttons/LoginLogoutButtons/LoginButton';
import LogoutButton from '../../../components/Buttons/LoginLogoutButtons/LogoutButton';

import { logout } from '../../../store/actions';


const LoginLogout = ({ loggedUser, logout, history }) => {

  const handleLogoutClick = () => {
    logout();
    history.push('/');
  }

  const handleLoginClick = () => {
    history.push('/enter');
  }

  return loggedUser
    ? <LogoutButton handleClick={handleLogoutClick} />
    : <LoginButton handleClick={handleLoginClick} />
}

const mapStateToProps = (state) => {
  const { loggedUser } = state;

  return (
    {
      loggedUser,
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginLogout));
