import React from 'react';

import ConfigButtons from '../index';
import EditItem from '../../../../containers/Items/EditItem'
import DeleteItem from '../../../../containers/Items/DeleteItem';

export default ({ loggedUser, currentItem, match }) => {
  const { userId } = match.params

  return (
    <ConfigButtons loggedUser={loggedUser} userId={userId} >
      <DeleteItem />
      <EditItem userId={userId} item={currentItem} />
    </ConfigButtons>
  )
};
