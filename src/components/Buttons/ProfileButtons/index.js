import React from 'react';

import InteractionButtons from '../InteractionButtons';
import EditProfile from '../../../containers/Profile/EditProfile'
import AddCollection from '../../../containers/Collections/AddCollection';

export default ({ loggedUser, user, userId }) => {

  if (loggedUser === userId) {
    return (
      <div className="profile-config-buttons">
        <EditProfile user={user} />
        <AddCollection userId={userId} />
      </div>
    )

  } else {
    return (
      <InteractionButtons />
    )
  }
};
