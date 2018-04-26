import React from 'react';

import ProfilePhoto from './ProfilePhoto';
import ProfileName from './ProfileName';

import './style.css';

export default ({ user, userId }) => (
  <div className="profile-info">
    <ProfilePhoto user={user} userId={userId} />
    <ProfileName user={user} userId={userId}>
    </ProfileName>
  </div>
);
