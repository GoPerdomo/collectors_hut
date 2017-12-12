import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from '../../containers/SignIn';

import './style.css';

class Home extends Component {

  render() {
    return (
      <main className="home">
      <h1>Welcome to the Collectors Hut!</h1>
        <SignIn />

      </main>
    )
  }
}

export default connect()(Home);
