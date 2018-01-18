import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import { editUser } from '../../store/actions';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    const { firstName, lastName } = this.props.user;

    this.state = {
      open: false,
      profileInfo: {
        firstName,
        lastName,
        photo: "",
        email: "",
        password: "",
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
    const { user, editUser } = this.props;
    const { profileInfo } = this.state;
    const { firstName, lastName } = profileInfo;

    event.preventDefault();

    editUser(user._id, profileInfo);

    this.handleRequestClose();

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
      <div>
        <RaisedButton
          onClick={this.handleButtonClick}
          labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
          backgroundColor="#ffffff"
          label={"Edit profile"}
        />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="edit-first-name"
              hintText="First Name"
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={firstName}
            />
            <TextField
              id="edit-last-name"
              hintText="Last Name"
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={lastName}
            />
            <TextField
              id="edit-photo"
              hintText="Profile Photo Link"
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={photo}
            />
            <TextField
              id="edit-email"
              hintText="Email"
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={email}
            />
            <TextField
              id="edit-password"
              hintText="Password"
              required
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              type="password"
              onChange={this.handleContentChange}
              value={password}
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
  editUser: (userId, user) => dispatch(editUser(userId, user)),
});

export default connect(null, mapDispatchToProps)(EditProfile);
