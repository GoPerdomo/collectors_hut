import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class EditCollectionForm extends Component {

  constructor(props) {
    super(props);
    const { name, info } = props.collection;

    this.state = {
      collectionInfo: {
        name,
        info,
      }
    };
  }

  handleContentChange = (event, content) => {
    let { name, info } = this.state.collectionInfo;
    const { id } = event.currentTarget;

    switch (id) {
      case ("edit-collection-name"):
        name = content;
        break;
      case ("edit-collection-info"):
        info = content;
        break;
      default:
        break;
    }

    this.setState({
      collectionInfo: {
        name,
        info,
      }
    });
  }

  render() {
    const { collectionInfo } = this.state;
    const { name, info } = collectionInfo;
    const { handleSubmit } = this.props

    return (
      <form onSubmit={(event) => handleSubmit(event, collectionInfo)}>
        <TextField
          id="edit-collection-name"
          hintText="Name"
          fullWidth
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          onChange={this.handleContentChange}
          value={name}
        />
        <TextField
          id="edit-collection-info"
          hintText="Description"
          fullWidth
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          multiLine
          onChange={this.handleContentChange}
          value={info}
        />
        <RaisedButton
          fullWidth
          type="submit"
          label="Save"
          labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
          backgroundColor="#6D8EAD"
        />
      </form>
    )
  }
};
