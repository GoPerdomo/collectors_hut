import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';

import bp from '../../../../utils/breakpoints';


// ========== Styled Components ==========
const ProfilePhoto = styled.div`
  margin: 0;
  margin-right: 3%;
  height: 140px;
  width: 140px;
  min-width: 140px;

  @media (max-width: ${bp.minWidth}) {
    margin: 0 0 1em;
  }

  & img {
    cursor: pointer;
    object-fit: cover;
    object-position: center;
  }
`

// ========= Material-UI Styles =========
const styles = {
  avatarStyle: {
    width: "100%",
    height: "100%",
  },
};

// ============== Component ==============
export default ({ user, userId }) => (
  <ProfilePhoto>
    <Link to={`/users/${userId}`}>
      <Avatar
        src={user.photo}
        alt={`Photo of ${user.firstName} ${user.lastName}`}
        style={styles.avatarStyle}
        backgroundColor="#ffffff"
      />
    </Link>
  </ProfilePhoto>
);
