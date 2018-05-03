import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

// ========== Styles ==========
const labelBaseStyle = {
  color: "#ffffff",
  fontWeight: "bold",
};

const defaultColor = "#FF6517";

// ========== Component ==========
export default ({ className, label, labelStyle, backgroundColor, handleClick }) => (
  <RaisedButton
    className={className}
    label={label}
    labelStyle={{ ...labelBaseStyle, ...labelStyle }}
    backgroundColor={backgroundColor || defaultColor}
    onClick={handleClick}
  />
);
