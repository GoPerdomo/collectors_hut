import React from 'react';

import TextField from 'material-ui/TextField';

// ========== Styles ==========
const inputStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

const borderStyle = {
  borderColor: "#FF6517",
};

// ========== Component ==========
export default ({ id, hintText, value, onChange }) => (
  <TextField
    id={id}
    hintText={hintText}
    type="number"
    fullWidth
    hintStyle={inputStyle}
    inputStyle={inputStyle}
    underlineFocusStyle={borderStyle}
    value={value}
    onChange={onChange}
  />
);
