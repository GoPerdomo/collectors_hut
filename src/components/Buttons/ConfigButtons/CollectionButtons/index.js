import React from 'react';

import InteractionButtons from '../../InteractionButtons';
import EditCollection from '../../../../containers/Collections/EditCollection'
import DeleteCollection from '../../../../containers/Collections/DeleteCollection';
import AddItem from '../../../../containers/Items/AddItem';

export default ({ loggedUser, userId, collectionId, currentCollection }) => {

  if (loggedUser === userId) {
    return (
      <div className="profile-config-buttons">
        <DeleteCollection />
        <EditCollection userId={userId} collection={currentCollection} />
        <AddItem userId={userId} collectionId={collectionId} />
      </div>
    )

  } else {
    return (
      <InteractionButtons />
    )
  }
};
