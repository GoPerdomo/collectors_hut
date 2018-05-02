import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default ({ value, onChange }) => (
  <SelectField
    underlineShow={false}
    value={value}
    onChange={onChange}
  >
    <MenuItem value={"user"} primaryText={"Users"} />
    <MenuItem value={"collection"} primaryText={"Collections"} />
  </SelectField>
);
