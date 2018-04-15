import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default ({ userId, collectionId, item }) => (
  <Link to={`/users/${userId}/collections/${collectionId}/items/${item._id}`}>
    <div className="collection-item-photo-wrapper">
      <img className="collection-item-photo" src={item.photo} alt={`Preview of ${item.name}`} />
    </div>
  </Link>
);
