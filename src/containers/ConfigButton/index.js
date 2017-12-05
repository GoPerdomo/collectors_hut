import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';


class ConfigButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleButtonClick = (event) => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }


  render() {
    const { label } = this.props;

    return (
      <div>
        <RaisedButton label={label} onClick={this.handleButtonClick} />
        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          {
            this.props.children
          }
        </Dialog>
      </div>
    )
  }
}

export default ConfigButton;
