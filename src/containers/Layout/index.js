import React, { Component } from 'react';

class Layout extends Component {

  render() {
    return (
      <div>
        <header className="Header">
          <h1>Collectors Hut Header</h1>
        </header>
        { this.props.children }
        <footer className="Footer">
          <h2>Collectors Hut Footer</h2>
        </footer>
      </div>
    )
  }
}

export default Layout;
