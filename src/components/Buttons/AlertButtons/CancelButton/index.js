import React from 'react';

import FlatButton from 'material-ui/FlatButton';

export default ({ handleRequestClose }) => (
  <FlatButton
    label="Cancel"
    onClick={handleRequestClose}
    style={{ marginLeft: "10px" }}
    labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
    backgroundColor="#FF6517"
  />
);
