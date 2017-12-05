import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import ConfigButton from '../../containers/ConfigButton';

class AddItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
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
    return (
      <ConfigButton label="Add item">
        <form onSubmit={this.handleSubmit}>
          <TextField
            // id="new-collection-name"
            // hintText="Name"
            fullWidth
            onChange={this.handleContentChange}
          // value={this.state.newCollection.name}
          /><br />
          <TextField
            // id="new-collection-info"
            // hintText="Description"
            fullWidth
            multiLine
            onChange={this.handleContentChange}
          // value={this.state.newCollection.info}
          /><br />
          <RaisedButton type="submit" label="Create" fullWidth />
        </form>
      </ConfigButton>
    )
  }
}

export default AddItem;
