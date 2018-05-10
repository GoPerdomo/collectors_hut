import React from 'react';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledTextField = styled(TextField) `
  @media (max-width: ${bp.breakEight}) {
    width: 100% !important;
  }
`

// ========= Material-UI Styles =========
const styles = {
  defaultSyle: {
    width: "45%",
  },
  defaultInputStyle: {
    height: "auto",
    position: "absolute",
    top: "10px",
    left: "0",
  },
  borderStyle: {
    borderColor: "#FF6517",
  },
};

// ============== Component ==============
export default ({ id, style, inputStyle, errorStyle, errorText, onChange }) => (
  <StyledTextField
    id={id}
    type="file"
    accept=".jpg, .png"
    fullWidth
    style={{ ...styles.defaultSyle, ...style }}
    inputStyle={{ ...styles.defaultInputStyle, ...inputStyle }}
    underlineFocusStyle={styles.borderStyle}
    errorStyle={errorStyle}
    errorText={errorText}
    onChange={onChange}
  />
);
