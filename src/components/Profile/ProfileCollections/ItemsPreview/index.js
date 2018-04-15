import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default ({ userId, collection, maxItems }) => {
  const { items } = collection;

  return (
    <div className={`profile-items-preview`}>
      <Link
        to={`/users/${userId}/collections/${collection._id}`}
        className="profile-items-preview-wrapper"
      >
        {
          items.map((item, index) => !(index < maxItems) ? null : (
            <div key={item._id} className="profile-items-preview-photo-wrapper">
              <img className="profile-items-preview-photo" src={item.photo} alt={item.name} />
            </div>
          ))
        }
      </Link>
    </div>
  )
};
