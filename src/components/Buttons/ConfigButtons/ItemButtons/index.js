import React from 'react';

import EditItem from '../../../../containers/Items/EditItem'
import DeleteItem from '../../../../containers/Items/DeleteItem';

export default ({ loggedUser, currentItem, match }) => {
  const {userId} = match.params

  if (loggedUser === userId) {
    return (
      <div className="profile-config-buttons">
        <DeleteItem />
        <EditItem userId={userId} item={currentItem} />
      </div>
    )

  } else {
    return (
      null
    )
  }
};
