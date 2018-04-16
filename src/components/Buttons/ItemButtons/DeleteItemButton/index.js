import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

export default ({ handleButtonClick }) => (
  <IconButton
    onClick={handleButtonClick}
    iconStyle={{ borderRadius: "50px", width: "36px", height: "36px", padding: "0" }}
    style={{ width: "36px", height: "36px", padding: "0" }}
  >
    <ActionDelete
      color="#FFFFFF"
      hoverColor="#EBEBEB"
      viewBox="1 1 22 22"
    />
  </IconButton>
);
