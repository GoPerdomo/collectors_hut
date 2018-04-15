import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

export default ({ handleButtonClick }) => (
  <RaisedButton
    onClick={handleButtonClick}
    labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
    backgroundColor="#ffffff"
    label={"Edit collection"}
  />
);
