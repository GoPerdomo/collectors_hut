import React from 'react';

import TextField from 'material-ui/TextField';

// ========== Styles ==========
const defaultSyle = {
  width: "45%",
};

const defaultInputStyle = {
  position: "absolute",
  top: "10px",
};

const borderStyle = {
  borderColor: "#FF6517",
};

// ========== Component ==========
export default ({ id, style, inputStyle, errorStyle, errorText, onChange }) => (
  <TextField
    id={id}
    type="file"
    accept=".jpg, .png"
    fullWidth
    style={style || defaultSyle}
    inputStyle={inputStyle || defaultInputStyle}
    underlineFocusStyle={borderStyle}
    errorStyle={errorStyle}
    errorText={errorText}
    onChange={onChange}
  />
);
