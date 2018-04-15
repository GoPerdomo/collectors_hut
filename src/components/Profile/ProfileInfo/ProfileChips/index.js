import React from 'react';

import Chip from 'material-ui/Chip';

import './style.css';

export default ({ user }) => {

  const maxChips = 3;

  return (
    <div className="profile-chips">
      {
        user.collections.map((collection, index) => !(index < maxChips) ? null : (
          <Chip key={collection._id}
            style={{ backgroundColor: "#ffffff", marginRight: 3, marginBottom: 3 }}
          >
            {
              collection.name
            }
          </Chip>
        ))
      }
    </div>
  )
};
