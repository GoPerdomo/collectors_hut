import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bp from '../../../../helpers/breakpoints';

// ========== Styled Components ==========
const ProfileName = styled.h1`
  cursor: pointer;
  width: fit-content;
  margin: 0;
  text-align: left;
  color: #FFFFFF;
  font-size: 2.3em;
  word-break: break-word;

  @media (max-width: ${bp.breakNine}) {
    text-align: center;
  }
`

// ============== Component ==============
export default ({ user, userId }) => (
  <Link to={`/users/${userId}`}>
    <ProfileName>
      {user.firstName} {user.lastName}
    </ProfileName>
  </Link>
);
