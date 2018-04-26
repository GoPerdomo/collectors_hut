import React from 'react';
import { Link } from 'react-router-dom';

import { maxProfilePreviewItems, profilePreviewCols } from '../../../../utils/constants';

import './style.css';

const getStyle = items => {
  const maxItems = items.length > maxProfilePreviewItems ? maxProfilePreviewItems : items.length;
  const rows = Math.ceil(maxItems / profilePreviewCols);

  return {
    overflow: 'hidden',
    width: '33.333%',
    height: `${100 / rows}%`,
  }
};

export default ({ userId, collection }) => {
  const { items } = collection;

  return (
    <div className="profile-items-preview">
      <Link
        to={`/users/${userId}/collections/${collection._id}`}
        className="profile-items-preview-wrapper"
      >
        {
          items.map((item, index) => !(index < maxProfilePreviewItems) ? null : (
            <div key={item._id} style={getStyle(items)}>
              <img className="profile-items-preview-photo" src={item.photo} alt={item.name} />
            </div>
          ))
        }
      </Link>
    </div>
  )
};
