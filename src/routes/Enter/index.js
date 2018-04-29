import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginRegister from '../../components/Enter/LoginRegister';

import './style.css';

class Enter extends Component {

  componentDidMount() {
    const { loggedUser, history } = this.props;
    
    window.scrollTo(0, 0);
    if (loggedUser) history.push(`/users/${loggedUser}`);
  }

  componentDidUpdate(prevProps, prevState) {
    const { loggedUser, history } = this.props;
    if (loggedUser) history.push(`/users/${loggedUser}`);
  }

  render() {
    return (
      <main className="enter">
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
