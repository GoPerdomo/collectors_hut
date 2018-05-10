import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


// ========= Material-UI Styles =========
const styles = {
  base: {
    width: "45%",
  },
  labelStyle: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  defaultColor: "#6D8EAD",
};

// ============== Component ==============
export default ({ halfWidth, type, label, backgroundColor, onClick }) => (
  <RaisedButton
    fullWidth={!halfWidth}
    type={type || "submit"}
    style={halfWidth && styles.base}
    label={label || "Save"}
    labelStyle={styles.labelStyle}
    backgroundColor={backgroundColor || styles.defaultColor}
    onClick={onClick}
  />
);
