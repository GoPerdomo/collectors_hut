import React from 'react';

import TextField from 'material-ui/TextField';

// ========== Styles ==========
const baseStyle = {
  maxHeight: "30vh",
  paddingBottom: '30px'
};

const baseTextareaStyle = {
  maxHeight: "30vh"
};

const baseHintStyle = {
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
export default ({ id, hintText, style, textareaStyle, hintStyle, maxLength, value, onChange }) => (
  <TextField
    id={id}
    hintText={hintText || "Description"}
    fullWidth
    multiLine
    style={{ ...baseStyle, ...style }}
    textareaStyle={{ ...baseTextareaStyle, ...textareaStyle }}
    hintStyle={{ ...baseHintStyle, ...hintStyle }}
    inputStyle={inputStyle}
    underlineFocusStyle={borderStyle}
    maxLength={maxLength}
    value={value}
    onChange={onChange}
  />
);
