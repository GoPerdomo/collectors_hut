import React from 'react';

import TextField from 'material-ui/TextField';

// ========== Styles ==========
const defaultInputStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

const underlineStyle = {
  borderColor: "#FF6517",
};

// ========== Component ==========
export default ({ id, required, style, inputStyle, maxLength, value, onChange }) => (
  <TextField
    id={id}
    hintText="Email"
    type="email"
    required={required}
    fullWidth
    style={style}
    hintStyle={defaultInputStyle}
    inputStyle={{ ...defaultInputStyle, ...inputStyle }}
    underlineFocusStyle={underlineStyle}
    maxLength={maxLength}
    value={value}
    onChange={onChange}
  />
);
