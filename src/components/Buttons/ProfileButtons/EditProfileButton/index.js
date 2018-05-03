import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


// ========= Material-UI Styles =========
const styles = {
  labelStyle: {
    display: "flex",
    padding: "2px 8px",
    fontWeight: "bold",
    color: "#6D8EAD",
  },
  backgroundColor: "#ffffff",
};


// ============== Component ==============
export default ({ handleButtonClick }) => (
  <RaisedButton
    onClick={handleButtonClick}
    labelStyle={styles.labelStyle}
    backgroundColor={styles.backgroundColor}
    label="Edit profile"
  />
);
