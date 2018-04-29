import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// ========== Styles ==========
const inputStyle = {
  padding: "0 .5em",
  boxSizing: 'border-box',
};

// ========== Component ==========
export default ({ id, fullWidth, hintText, style, value, onChange, menuItems }) => (
  <SelectField
    id={id}
    fullWidth={fullWidth}
    hintText={hintText || "Condition"}
    value={value}
    style={style}
    hintStyle={inputStyle}
    inputStyle={inputStyle}
    onChange={onChange}
  >
    {
      menuItems &&
      menuItems.map(item => <MenuItem key={item} value={item} primaryText={item} />)
    }
  </SelectField>
);
