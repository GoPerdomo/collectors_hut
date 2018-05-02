import React from 'react';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';


// ========== Styled Components ==========
const StyledTextField = styled(TextField) `
& textarea {
  &:invalid {
    box-shadow: none;
  }
}
`

// ========= Material-UI Styles =========
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

// ============== Component ==============
export default ({ id, required, hintText, rows, style, textareaStyle, hintStyle, maxLength, value, onChange }) => (
  <StyledTextField
    id={id}
    hintText={hintText || "Description"}
    required={required}
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
