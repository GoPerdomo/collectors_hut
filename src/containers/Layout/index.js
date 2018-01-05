import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar';
import Logout from '../Logout';

import './style.css';

class Layout extends Component {

  render() {
    const { loggedUser } = this.props;

    return (
      <div className="layout">
        <header className="header">
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <h1>Collectors Hut</h1>
          </NavLink>
          {
            loggedUser &&
            <SearchBar />
          }
          {
            loggedUser &&
            <Logout />
          }

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

const mapStateToProps = (state) => {
  const { loggedUser } = state;

  return (
    {
      loggedUser,
    }
  )
};

export default connect(mapStateToProps)(Layout);
