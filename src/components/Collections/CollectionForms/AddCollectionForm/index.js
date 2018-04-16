import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddCollectionForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      newCollection: {
        name: "",
        info: "",
      }
    };
  }

  handleContentChange = (event, content) => {
    let { name, info } = this.state.newCollection;
    const { id } = event.currentTarget;

    switch (id) {
      case ("new-collection-name"):
        name = content;
        break;
      case ("new-collection-info"):
        info = content;
        break;
      default:
        break;
    }

    this.setState({
      newCollection: {
        name,
        info,
      }
    });
  }

  render() {
    const { newCollection } = this.state;
    const { name, info } = newCollection;
    const { handleSubmit } = this.props

    return (
      <form onSubmit={(event) => handleSubmit(event, newCollection)}>
        <TextField
          id="new-collection-name"
          hintText="Name"
          required
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          fullWidth
          onChange={this.handleContentChange}
          value={name}
        />
        <TextField
          id="new-collection-info"
          hintText="Description"
          fullWidth
          multiLine
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          onChange={this.handleContentChange}
          value={info}
        />
        <RaisedButton
          fullWidth
          type="submit"
          label="Create"
          labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
          backgroundColor="#6D8EAD"
        />
      </form>
    )
  }
};
