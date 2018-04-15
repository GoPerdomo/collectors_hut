import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default ({ user, userId, children }) => (
  <div>
    <Link to={`/users/${userId}`}>
      <h1 className="profile-name">
        {user.firstName} {user.lastName}
      </h1>
    </Link>
    {children}
  </div>
);
