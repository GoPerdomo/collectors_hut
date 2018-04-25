import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

// ========== Styles ==========
const labelStyle = {
  color: "#ffffff",
  fontWeight: "bold",
};

const defaultColor = "#6D8EAD";

// ========== Component ==========
export default ({ label, backgroundColor }) => (
  <RaisedButton
    fullWidth
    type="submit"
    label={label || "Save"}
    labelStyle={labelStyle}
    backgroundColor={backgroundColor || defaultColor}
  />
);
