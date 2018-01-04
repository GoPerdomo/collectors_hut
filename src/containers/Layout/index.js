import React, { Component } from 'react';

import SearchBar from '../SearchBar';
import Logout from '../Logout';

import './style.css';

class Layout extends Component {

  render() {
    return (
      <div>
        <header className="header">
          <h1>Collectors Hut</h1>
          <SearchBar />
          <Logout />
        </header>
        {
          this.props.children
        }
        <footer className="footer">
          <h2>Collectors Hut</h2>
        </footer>
      </div>
    )
  }
}

export default Layout;
