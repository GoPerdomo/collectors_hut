import React from 'react';

import ConfigButtons from '../index';
import EditProfile from '../../../../containers/Profile/EditProfile'
import AddCollection from '../../../../containers/Collections/AddCollection';


export default ({ loggedUser, user, userId }) => (
  <ConfigButtons loggedUser={loggedUser} userId={userId} >
    <EditProfile user={user} />
    <AddCollection userId={userId} />
  </ConfigButtons>
);
