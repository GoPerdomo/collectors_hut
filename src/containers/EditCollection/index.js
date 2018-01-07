import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog/Dialog';

import { editCollection } from '../../store/actions';


class EditCollection extends Component {

  constructor(props) {
    super(props);
    const { name, info } = this.props.collection;

    this.state = {
      open: false,
      collectionInfo: {
        name,
        info,
      }
    };
  }

  handleButtonClick = (event) => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
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

    this.handleRequestClose();

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
      <div>
        <RaisedButton
          onClick={this.handleButtonClick}
          labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
          backgroundColor="#ffffff"
          label={"Edit collection"}
        />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <form onSubmit={this.handleSubmit}>
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
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editCollection: (userId, collectionId, collection) => dispatch(editCollection(userId, collectionId, collection)),
});

export default connect(null, mapDispatchToProps)(EditCollection);
