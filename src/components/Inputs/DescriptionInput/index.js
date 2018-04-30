import React from 'react';

import TextField from 'material-ui/TextField';

// ========== Styles ==========
const baseHintStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
  top: '12px',
};

const inputStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

const borderStyle = {
  borderColor: "#FF6517",
};

// ========== Component ==========
export default ({ id, hintText, rows, style, textareaStyle, hintStyle, maxLength, value, onChange }) => (
  <TextField
    id={id}
    hintText={hintText || "Description"}
    rows={rows || 5}
    rowsMax={rows || 5}
    fullWidth
    multiLine
    style={style}
    textareaStyle={textareaStyle}
    hintStyle={{ ...baseHintStyle, ...hintStyle }}
    inputStyle={inputStyle}
    underlineFocusStyle={borderStyle}
    maxLength={maxLength}
    value={value}
    onChange={onChange}
  />
);
