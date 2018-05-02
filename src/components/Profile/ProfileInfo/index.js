import React from 'react';
import styled from 'styled-components';

import ProfilePhoto from './ProfilePhoto';
import ProfileName from './ProfileName';


// ========== Styled Components ==========
const ProfileInfo = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`

// ============== Component ==============
export default ({ user, userId }) => (
  <ProfileInfo>
    <ProfilePhoto user={user} userId={userId} />
    <ProfileName user={user} userId={userId} />
  </ProfileInfo>
);
