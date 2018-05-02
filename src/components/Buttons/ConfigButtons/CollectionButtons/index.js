import React from 'react';

import ConfigButtons from '../index';
import EditCollection from '../../../../containers/Collections/EditCollection'
import DeleteCollection from '../../../../containers/Collections/DeleteCollection';
import AddItem from '../../../../containers/Items/AddItem';

export default ({ loggedUser, userId, collectionId, currentCollection }) => (
  <ConfigButtons loggedUser={loggedUser} userId={userId} >
    <DeleteCollection />
    <EditCollection userId={userId} collection={currentCollection} />
    <AddItem userId={userId} collectionId={collectionId} />
  </ConfigButtons>
);
