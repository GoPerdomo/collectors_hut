import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

// ========== Styles ==========
const labelBaseStyle = {
  color: "#ffffff",
  fontWeight: "bold",
};

const defaultColor = "#FF6517";

// ========== Component ==========
export default ({ label, labelStyle, backgroundColor, handleClick }) => (
  <RaisedButton
    label={label}
    labelStyle={{ ...labelBaseStyle, ...labelStyle }}
    backgroundColor={backgroundColor || defaultColor}
    onClick={handleClick}
  />
);
