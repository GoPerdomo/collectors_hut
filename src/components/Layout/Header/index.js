import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from '../../../containers/Layout/SearchBar';
import LoginLogoutButton from '../../../containers/Enter/LoginLogoutButton';

import './style.css';

export default () => (
  <header>
    <div>
      <NavLink
        to="/"
        style={{ textDecoration: "none", color: "#fff", margin: "auto 0" }}
      >
        <img
          className="header-logo"
          src="/img/logo-horizontal-reverse.png" alt=""
        />
      </NavLink>

      <SearchBar />
      <LoginLogoutButton />
    </div>
  </header>
);
