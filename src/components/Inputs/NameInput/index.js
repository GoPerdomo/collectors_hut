import React from 'react';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';


// ========== Styled Components ==========
const StyledTextField = styled(TextField)`
  background-color: #ffffff !important;
  & input {
    &:invalid {
      box-shadow: none;
    }
  }
`

// ========= Material-UI Styles =========
const inputStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

const borderStyle = {
  borderColor: "#FF6517",
};


// ============== Component ==============
export default ({ id, hintText, required, maxLength, value, onChange }) => (
  <StyledTextField
    id={id}
    hintText={hintText || "Name"}
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
