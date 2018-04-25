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
export default ({ id, value, onChange }) => (
  <TextField
    id={id}
    hintText="Description"
    fullWidth
    multiLine
    hintStyle={inputStyle}
    inputStyle={inputStyle}
    underlineFocusStyle={borderStyle}
    value={value}
    onChange={onChange}
  />
);
