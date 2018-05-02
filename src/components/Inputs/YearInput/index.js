import React from 'react';

import TextField from 'material-ui/TextField';

import { maxYearValue } from '../../../utils/constants';

// ========== Styles ==========
const inputStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

const borderStyle = {
  borderColor: "#FF6517",
};

// ========== Component ==========
export default ({ id, hintText, value, onChange }) => (
  <TextField
    id={id}
    hintText={hintText}
    pattern="[0-9]*"
    fullWidth
    hintStyle={inputStyle}
    inputStyle={inputStyle}
    underlineFocusStyle={borderStyle}
    min={1}
    max={maxYearValue}
    value={value}
    onChange={onChange}
  />
);
