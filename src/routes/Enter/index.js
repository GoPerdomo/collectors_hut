import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginRegister from '../../containers/LoginRegister';

import './style.css';

class Enter extends Component {

  componentWillMount() {
    const { loggedUser, history } = this.props;

    if (loggedUser) history.push(`/users/${loggedUser}`);
  }

  componentWillReceiveProps(props) {
    const { loggedUser, history } = props;

    if (loggedUser) history.push(`/users/${loggedUser}`);
  }

  render() {
    return (
      <main className="enter">
        <h1>Login to your account or register</h1>
        <LoginRegister />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedUser } = state;

  return {
    loggedUser,
  }
};

export default connect(mapStateToProps)(Enter);
