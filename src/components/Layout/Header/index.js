import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';
import LoginLogout from '../../../containers/Enter/LoginLogout';

import './style.css';

export default () => (
  <header>
    <div>
      <NavLink
        to="/"
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <img
          className="header-logo"
          src="/img/logo-horizontal-reverse.png" alt=""
        />
      </NavLink>

      <SearchBar />
      <LoginLogout />
    </div>
  </header>
);
