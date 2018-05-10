import React from 'react';
import styled from 'styled-components';

import StandardButton from '../StandardButton';


// ========== Styled Components ==========
const StyledStandardButton = styled(StandardButton) `

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
    label="Edit Item"
    labelStyle={styles.labelStyle}
    backgroundColor={styles.backgroundColor}
    handleClick={handleClick}
  />
);
