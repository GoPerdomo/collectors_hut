import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';


// ========= Material-UI Styles =========
const baseStyle = {
  width: "36px",
  height: "36px",
  padding: "0",
};

const iconStyle = {
  borderRadius: "50px",
  width: "36px",
  height: "36px",
  padding: "0",
};

// ============== Component ==============
export default ({ handleClick }) => (
  <IconButton
    onClick={handleClick}
    iconStyle={iconStyle}
    style={baseStyle}
  >
    <ActionDelete
      color="#FFFFFF"
      hoverColor="#EBEBEB"
      viewBox="1 1 22 22"
    />
  </IconButton>
);
