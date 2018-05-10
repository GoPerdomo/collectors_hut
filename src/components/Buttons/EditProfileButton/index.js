import React from 'react';
import styled from 'styled-components';

import StandardButton from '../StandardButton';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledStandardButton = styled(StandardButton)`
  @media (max-width: ${bp.breakFour}) {
    order: 1;
  }
  @media (max-width: ${bp.breakEight}) {
    order: -1;
  }

  & button {
    @media (max-width: ${bp.breakSix}) {
      line-height: 17px !important;
    }
    @media (max-width: ${bp.breakEight}) {
      line-height: 36px !important;
    }
 }
`

// ========= Material-UI Styles =========
const styles = {
  labelStyle: {
    display: "flex",
    padding: "2px 8px",
    color: "#6D8EAD",
  },
  backgroundColor: "#ffffff",
};

// ============== Component ==============
export default ({ handleClick }) => (
  <StyledStandardButton
    label="Edit Profile"
    labelStyle={styles.labelStyle}
    backgroundColor={styles.backgroundColor}
    handleClick={handleClick}
  />
);
