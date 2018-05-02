import React from 'react';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';


// ========== Styled Components ==========
const StyledTextField = styled(TextField)`
& input {
  &:invalid {
    box-shadow: none;
  }
}
`

// ========= Material-UI Styles =========
const styles = {
  inputStyle: {
    padding: "0 .5em",
    boxSizing: 'border-box',
  },
  borderStyle: {
    borderColor: "#FF6517",
  },
};

// ============== Component ==============
export default ({ id, hintText, value, onChange, errorText }) => (
  <StyledTextField
    id={id}
    hintText={hintText || "Password"}
    type="password"
    required
    fullWidth
    hintStyle={styles.inputStyle}
    inputStyle={styles.inputStyle}
    underlineFocusStyle={styles.borderStyle}
    value={value}
    onChange={onChange}
    errorText={errorText}
  />
);
