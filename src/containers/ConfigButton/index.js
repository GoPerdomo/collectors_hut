import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover/Popover';

class ConfigButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleButtonClick = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }


  render() {
    const { label } = this.props;

    return (
      <div>
        <RaisedButton label={label} onClick={this.handleButtonClick} />
        <Popover
          style={{ width: "30%" }}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ "horizontal": "left", "vertical": "top" }}
          targetOrigin={{ "horizontal": "right", "vertical": "top" }}
          onRequestClose={this.handleRequestClose}
        >
          {
            this.props.children
          }
        </Popover>
      </div>
    )
  }
}

export default ConfigButton;
