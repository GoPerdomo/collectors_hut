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
const baseStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

const underlineStyle = {
  borderColor: "#FF6517",
};


// ============== Component ==============
export default ({ id, required, style, hintStyle, inputStyle, maxLength, value, onChange }) => (
  <StyledTextField
    id={id}
    hintText="Email"
    type="email"
    required={required}
    fullWidth
    style={style}
    hintStyle={{ ...baseStyle, ...hintStyle }}
    inputStyle={{ ...baseStyle, ...inputStyle }}
    underlineFocusStyle={underlineStyle}
    maxLength={maxLength}
    value={value}
    onChange={onChange}
  />
);
