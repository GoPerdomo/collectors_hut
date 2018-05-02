import React from 'react';
import styled from 'styled-components';

import Chip from 'material-ui/Chip';

import { maxChips } from '../../../../utils/constants';


// ========== Styled Components ==========
const ProfileChips = styled.div`
  display: flex;
  max-width: 343px;
  margin-bottom: 40px;

  & span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
// ========= Material-UI Styles =========
const styles = {
  chipStyle: {
    backgroundColor: "#ffffff",
    marginRight: 3,
    marginBottom: 3,
  },
}

// ============== Component ==============
export default ({ user }) => {

  return (
    <ProfileChips>
      {
        user.collections.map((collection, index) => !(index < maxChips) ? null : (
          <Chip key={collection._id} style={styles.chipStyle}>
            {collection.name}
          </Chip>
        ))
      }
    </ProfileChips>
  )
};
