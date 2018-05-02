import React from 'react';

import TextField from 'material-ui/TextField';


// ========= Material-UI Styles =========
const styles = {
  base: {
    height: "40px",
  },
  hintStyle: {
    bottom: "8px",
  },
};


// ============== Component ==============
export default ({ value, onChange }) => (
  <TextField
    hintText="Find users and collections"
    style={styles.base}
    hintStyle={styles.hintStyle}
    underlineShow={false}
    value={value}
    onChange={onChange}
  />
);
