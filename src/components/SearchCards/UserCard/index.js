import React from 'react';
import styled from 'styled-components';

import { Card } from 'material-ui/Card';

import UserCardHeader from './UserCardHeader';


// ========== Styled Components ==========
const StyledCard = styled(Card) `
  text-align: left;
  margin-bottom: 30px;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`

// ========= Material-UI Styles =========
const styles = {
  base: {
    backgroundColor: "#6D8EAD",
  },
};

// ============== Component ==============
export default ({ user, loggedUser }) => (
  <StyledCard zDepth={2} style={styles.base}  >
    <UserCardHeader user={user} />
  </StyledCard>
);
