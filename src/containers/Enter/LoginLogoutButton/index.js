import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import { logout } from '../../../store/actions';

class LoginLogoutButton extends Component {

  handleLogoutClick = () => {
    const { logout, history } = this.props;
    logout();
    history.push('/');
  }

  handleLoginClick = () => {
    const { history } = this.props;
    history.push('/enter');
  }

  render() {
    const { loggedUser } = this.props;

    if (loggedUser) {
      return (
        <div style={{ margin: "auto 0" }} >
          <RaisedButton
            labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
            backgroundColor="#FF6517"
            label="Logout"
            onClick={this.handleLogoutClick}
          />
        </div>
      )
    } else {
      return (
        <div style={{ margin: "auto 0" }} >
          <RaisedButton
            labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
            backgroundColor="#FF6517"
            label="Login"
            onClick={this.handleLoginClick}
          />
        </div>
      )
    }
  }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginLogoutButton));
