import React from 'react';

import TextField from 'material-ui/TextField';

// ========== Styles ==========
const baseStyle = {
  maxHeight: "30vh",
  paddingBottom: '30px'
};

const textareaStyle = {
  maxHeight: "30vh"
};

const hintStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
  bottom: '42px',
};

const inputStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

const borderStyle = {
  borderColor: "#FF6517",
};

// ========== Component ==========
export default ({ id, maxLength, value, onChange }) => (
  <TextField
    id={id}
    hintText="Description"
    fullWidth
    multiLine
    style={baseStyle}
    textareaStyle={textareaStyle}
    hintStyle={hintStyle}
    inputStyle={inputStyle}
    underlineFocusStyle={borderStyle}
    maxLength={maxLength}
    value={value}
    onChange={onChange}
  />
);
