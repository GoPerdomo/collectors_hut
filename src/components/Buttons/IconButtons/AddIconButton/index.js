import React from 'react';
import styled from 'styled-components';

import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';

import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  /* @media (max-width: ${bp.breakFour}) {
    position: absolute;
    bottom: 20px;
    right: 15px;
  }
  @media (max-width: ${bp.breakEight}) {
    position: static;
  } */
`

// ========= Material-UI Styles =========
const baseStyle = {
  width: "36px",
  height: "36px",
  padding: "0",
  backgroundColor: "inherit",
};

const iconStyle = {
  borderRadius: "50px",
  backgroundColor: "#ffffff",
  width: "36px",
  height: "36px",
  padding: "0",
};

// ============== Component ==============
export default ({ handleClick }) => (
  <Wrapper>
    <IconButton
      onClick={handleClick}
      style={baseStyle}
      iconStyle={iconStyle}
    >
      <ContentAddCircle
        color="#FF6517"
        hoverColor="#d95a2f"
        viewBox="1 1 22 22"
      />
    </IconButton>
  </Wrapper>
);
