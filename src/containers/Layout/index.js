import React, { Component } from 'react';

import './style.css';

class Layout extends Component {

  render() {
    return (
      <div>
        <header className="header">
          <h1>Collectors Hut Header</h1>
        </header>
        { this.props.children }
        <footer className="footer">
          <h2>Collectors Hut Footer</h2>
        </footer>
      </div>
    )
  }
}

export default Layout;
