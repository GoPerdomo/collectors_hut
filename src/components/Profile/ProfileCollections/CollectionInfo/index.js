import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default ({ userId, collection }) => (
  <div className="profile-collection-info">
    <Link
      to={`/users/${userId}/collections/${collection._id}`}
      className="profile-collection-info-title-wrapper"
    >
      <h2 className="profile-collection-info-title">{collection.name}</h2>
    </Link>
    <div className="profile-collection-description">
      <p>{collection.info}</p>
    </div>
  </div>
);
