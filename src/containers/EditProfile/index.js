import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import ConfigButton from '../../containers/ConfigButton';

import { editUser } from '../../store/actions';
import { getItems } from '../../store/actions';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    const { firstName, lastName } = this.props.user;

    this.state = {
      profileInfo: {
        firstName,
        lastName,
        photo: "",
        email: "",
        password: "",
      }
    };
  }

  handleContentChange = (event, content) => {
    let { firstName, lastName, photo, email, password } = this.state.profileInfo;
    const { id } = event.currentTarget;

    if (id === "edit-first-name") firstName = content;
    if (id === "edit-last-name") lastName = content;
    if (id === "edit-photo") photo = content;
    if (id === "edit-email") email = content;
    if (id === "edit-password") password = content;


    this.setState({
      profileInfo: {
        firstName,
        lastName,
        photo,
        email,
        password,
      }
    });
  }

  handleSubmit = (event) => {
    const { user, editUser, getItems } = this.props;
    const { profileInfo } = this.state;
    const { firstName, lastName } = profileInfo;

    event.preventDefault();

    editUser(user._id, profileInfo);
    for (const collection of user.collections) getItems(user._id, collection._id)

    this.setState({
      profileInfo: {
        firstName,
        lastName,
        photo: "",
        email: "",
        password: "",
        collections: user.collections,
      }
    });
  }

  render() {
    const { firstName, lastName, photo, email, password } = this.state.profileInfo;

    return (
      <ConfigButton label="Edit profile">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="edit-first-name"
            hintText="First Name"
            fullWidth
            onChange={this.handleContentChange}
            value={firstName}
          />
          <TextField
            id="edit-last-name"
            hintText="Last Name"
            fullWidth
            onChange={this.handleContentChange}
            value={lastName}
          />
          <TextField
            id="edit-photo"
            hintText="Profile Photo"
            fullWidth
            onChange={this.handleContentChange}
            value={photo}
          />
          <TextField
            id="edit-email"
            hintText="Email"
            fullWidth
            onChange={this.handleContentChange}
            value={email}
          />
          <TextField
            id="edit-password"
            hintText="Password"
            fullWidth
            type="password"
            onChange={this.handleContentChange}
            value={password}
          />
          <RaisedButton type="submit" label="Save" fullWidth />
        </form>
      </ConfigButton>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editUser: (userId, user) => dispatch(editUser(userId, user)),
  getItems: (userId, collectionId) => dispatch(getItems(userId, collectionId)),
});

export default connect(null, mapDispatchToProps)(EditProfile);
