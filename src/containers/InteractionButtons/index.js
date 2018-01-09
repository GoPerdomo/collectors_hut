import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class InteractionButtons extends Component {

  render() {
    return (
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
    )
  }
}

export default InteractionButtons;
