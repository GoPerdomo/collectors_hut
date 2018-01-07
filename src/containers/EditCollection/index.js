import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import ConfigButton from '../../containers/ConfigButton';

import { editCollection } from '../../store/actions';

class EditCollection extends Component {

  constructor(props) {
    super(props);
    const { name, info } = this.props.collection;

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

    if (id === "edit-collection-name") name = content;
    if (id === "edit-collection-info") info = content;

    this.setState({
      collectionInfo: {
        name,
        info,
      }
    });
  }

  handleSubmit = (event) => {
    const { userId, collection, editCollection } = this.props;
    const { collectionInfo } = this.state;
    const { name, info } = collectionInfo;

    event.preventDefault();


    editCollection(userId, collection._id, collectionInfo);

    this.setState({
      collectionInfo: {
        name,
        info,
      }
    })
  }

  render() {
    const { name, info } = this.state.collectionInfo;

    return (
      <ConfigButton label="Edit collection">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="edit-collection-name"
            hintText="Name"
            fullWidth
            onChange={this.handleContentChange}
            value={name}
          />
          <TextField
            id="edit-collection-info"
            hintText="Description"
            fullWidth
            multiLine
            onChange={this.handleContentChange}
            value={info}
          />
          <RaisedButton
            fullWidth
            type="submit"
            label="Save"
            labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
            backgroundColor="#ffffff"
          />
        </form>
      </ConfigButton>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editCollection: (userId, collectionId, collection) => dispatch(editCollection(userId, collectionId, collection)),
});

export default connect(null, mapDispatchToProps)(EditCollection);
