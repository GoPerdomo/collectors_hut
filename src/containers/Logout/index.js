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
    return (
      <div style={{ margin: "auto 0" }} >
        <RaisedButton label="Logout" onClick={this.handleClick} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(null, mapDispatchToProps)(Logout));
