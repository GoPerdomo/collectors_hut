import React from 'react';

import TextField from 'material-ui/TextField';

export default ({ id, hintText, value, onChange, errorText }) => (
  <TextField
    id={id}
    hintText={hintText}
    type="password"
    required
    fullWidth
    underlineFocusStyle={{ borderColor: "#FF6517" }}
    value={value}
    onChange={onChange}
    errorText={errorText}
  />
);
