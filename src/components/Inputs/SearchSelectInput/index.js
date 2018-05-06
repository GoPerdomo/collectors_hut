import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


// ========= Material-UI Styles =========
const styles = {
  labelStyle: {
    padding: 0,
  },
  innerDivStyle: {
    padding: "0 15px",
  },
};

// ============== Component ==============
export default ({ value, onChange }) => (
  <SelectField
    underlineShow={false}
    value={value}
    labelStyle={styles.labelStyle}
    onChange={onChange}
  >
    <MenuItem
      innerDivStyle={styles.innerDivStyle}
      value={"user"} primaryText={"Users"}
    />
    <MenuItem
      innerDivStyle={styles.innerDivStyle}
      value={"collection"} primaryText={"Collections"}
    />
  </SelectField>
);
