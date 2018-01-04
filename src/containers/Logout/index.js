import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import { logout } from '../../store/actions';

class Logout extends Component {

  handleClick = () => {
    const { logout, history } = this.props;
    logout();
    history.push('/');
  }

  render() {
    const { loggedUser } = this.props;

    return (
      <div style={{ margin: "auto 0" }} >
        {
          loggedUser ? <RaisedButton label="Logout" onClick={this.handleClick} /> : null
        }
      </div>
    )
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
