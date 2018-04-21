import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';

import './style.css';

export default ({ user, userId }) => (
  <div className="profile-photo">
    <Link to={`/users/${userId}`}>
      <Avatar
        backgroundColor="#FFFFFF"
        style={{ width: "100%", height: "100%" }}
        src={user.photo}
        alt=""
      />
    </Link>
  </div>
);
