import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

export default ({ handleClick }) => (
  <RaisedButton
    labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
    backgroundColor="#FF6517"
    label="Login"
    onClick={handleClick}
  />
);
