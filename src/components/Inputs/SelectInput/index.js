import React from 'react';
import styled from 'styled-components';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledSelectField = styled(SelectField) `
  @media (max-width: ${bp.minWidth}) {
    width: 100% !important;
  }
`

// ========= Material-UI Styles =========
const styles = {
  inputStyle: {
    padding: "0 .5em",
    boxSizing: 'border-box',
  },
};

// ============== Component ==============
export default ({ id, fullWidth, hintText, style, value, onChange, menuItems }) => (
  <StyledSelectField
    id={id}
    fullWidth={fullWidth}
    hintText={hintText || "Condition"}
    value={value}
    style={style}
    hintStyle={styles.inputStyle}
    inputStyle={styles.inputStyle}
    onChange={onChange}
  >
    {
      menuItems &&
      menuItems.map(item => <MenuItem key={item} value={item} primaryText={item} />)
    }
  </StyledSelectField>
);
