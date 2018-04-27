import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

// ========== Styles ==========
const labelStyle = {
  color: "#ffffff",
  fontWeight: "bold",
};

const defaultColor = "#FF6517";

// ========== Component ==========
export default ({ label, handleClick }) => (
  <RaisedButton
    label={label}
    labelStyle={labelStyle}
    backgroundColor={defaultColor}
    onClick={handleClick}
  />
);
