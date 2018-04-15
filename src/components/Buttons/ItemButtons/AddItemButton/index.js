import React from 'react';

import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';

export default ({ handleButtonClick }) => (
  <IconButton
    onClick={handleButtonClick}
    iconStyle={{ borderRadius: "50px", backgroundColor: "ffffff", width: "36px", height: "36px", padding: "0" }}
    style={{ width: "36px", height: "36px", padding: "0" }}
  >
    <ContentAddCircle
      color="#FF6517"
      hoverColor="#d95a2f"
      viewBox="1 1 22 22"
    />
  </IconButton>
);
