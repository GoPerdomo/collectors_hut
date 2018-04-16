import React from 'react';

import FlatButton from 'material-ui/FlatButton';

export default ({ handleDeleteButton }) => (
  <FlatButton
    label="Delete"
    onClick={handleDeleteButton}
    style={{ marginLeft: "10px" }}
    labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
    backgroundColor="#6D8EAD"
  />
);
