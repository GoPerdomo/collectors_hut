import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default ({ userId, collection }) => {

  return (
    <Link to={`/users/${userId}/collections/${collection._id}`} className="collection-name">
      <h1>
        {collection.name}
      </h1>
    </Link>
  )
};
