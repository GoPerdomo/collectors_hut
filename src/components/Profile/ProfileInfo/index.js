import React from 'react';

import ProfilePhoto from './ProfilePhoto';
import ProfileName from './ProfileName';
import ProfileChips from './ProfileChips';

import './style.css';

export default ({ user, userId }) => (
  <div className="profile-info">
    <ProfilePhoto user={user} userId={userId} />
    <ProfileName user={user} userId={userId}>
      <ProfileChips user={user} />
    </ProfileName>
  </div>
);
