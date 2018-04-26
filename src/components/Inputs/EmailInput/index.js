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
export default ({ id, required, maxLength, value, onChange }) => (
  <TextField
    id={id}
    hintText="Email"
    type="email"
    required={required}
    fullWidth
    hintStyle={inputStyle}
    inputStyle={inputStyle}
    underlineFocusStyle={borderStyle}
    maxLength={maxLength}
    value={value}
    onChange={onChange}
  />
);
