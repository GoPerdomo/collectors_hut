import React from 'react';
import styled from 'styled-components';

import ProfilePhoto from './ProfilePhoto';
import ProfileName from './ProfileName';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const ProfileInfo = styled.div`
  width: 65%;
  display: flex;
  align-items: center;

  @media (max-width: ${bp.breakFour}) {
    width: 75%;
  }
  @media (max-width: ${bp.minWidth}) {
    width: 100%;
    flex-direction: column;
    margin: 2em 0;
  }
`

// ============== Component ==============
export default ({ user, userId }) => (
  <ProfileInfo>
    <ProfilePhoto user={user} userId={userId} />
    <ProfileName user={user} userId={userId} />
  </ProfileInfo>
);
