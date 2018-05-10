import React from 'react';

import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';


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
);
