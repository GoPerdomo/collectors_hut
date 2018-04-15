import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';

import './style.css';

export default ({ user, userId }) => (
  <div className="profile-photo">
    <Link to={`/users/${userId}`}>
      <Avatar
        backgroundColor="#FFFFFF"
        size={140}
        src={user.photo}
        alt=""
      />
    </Link>
  </div>
);
