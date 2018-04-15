import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

export default ({ user, collection }) => {
  const { items } = collection;
  const maxItems = 3;

  return (
    <NavLink to={`/users/${user._id}/collections/${collection._id}`} >
      <div className="collection-preview">
        {
          items &&
          items.map((item, index) => !(index < maxItems) ? null : (
            <img key={item._id} src={item.photo} alt={`Preview of ${item.name}`} />
          ))
        }
      </div>
    </NavLink>
  )
};
