import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

export default () => (
  <div className="profile-config-buttons">
    <RaisedButton
      labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
      backgroundColor="#FFFFFF"
      label="Message"
    />
    <RaisedButton
      labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
      backgroundColor="#FF6517"
      label="Follow"
    />
  </div>
);
