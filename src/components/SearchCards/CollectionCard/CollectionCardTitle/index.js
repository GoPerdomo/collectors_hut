import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CardTitle } from 'material-ui/Card';

import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledCardTitle = styled(CardTitle) `
  @media (max-width: ${bp.breakSix}) {
    padding: 1em !important;
  }
`

const StyledLink = styled(Link) `
  color: #000;
`

// ========= Material-UI Styles =========
const styles = {
  base: {
    padding: "1em 2em",
    wordBreak: 'break-word',
  },
};


// ============== Component ==============
export default ({ userId, collection }) => (
  <StyledCardTitle
    style={styles.base}
    title={
      <StyledLink to={`/users/${userId}/collections/${collection._id}`} >
        {collection.name}
      </StyledLink>
    }
  />
);
