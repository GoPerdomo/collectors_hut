import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import { editUser } from '../../../store/actions';

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
        confirmPassword: "",
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
    let { firstName, lastName, photo, email, password, confirmPassword } = this.state.profileInfo;
    const { id } = event.currentTarget;

    if (id === "edit-first-name") firstName = content;
    if (id === "edit-last-name") lastName = content;
    if (id === "edit-photo") photo = content;
    if (id === "edit-email") email = content;
    if (id === "edit-password") password = content;
    if (id === "confirm-password") confirmPassword = content;

    this.setState({
      profileInfo: {
        firstName,
        lastName,
        photo,
        email,
        password,
        confirmPassword,
      }
    });
  }

  handleSubmit = (event) => {
    const { user, editUser } = this.props;
    const { profileInfo } = this.state;
    const { firstName, lastName, password, confirmPassword } = profileInfo;

    event.preventDefault();

    if (firstName && lastName && (password === confirmPassword)) {      
      editUser(user._id, profileInfo);
      this.handleRequestClose();
    }


    this.setState({
      profileInfo: {
        firstName,
        lastName,
        photo: "",
        email: "",
        password: "",
        confirmPassword: "",
        collections: user.collections,
      }
    });
  }

  render() {
    const { firstName, lastName, photo, email, password, confirmPassword } = this.state.profileInfo;

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
              required
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={firstName}
            />
            <TextField
              id="edit-last-name"
              hintText="Last Name"
              required
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
              fullWidth
              required
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              type="password"
              onChange={this.handleContentChange}
              value={password}
            />
            <TextField
              id="confirm-password"
              hintText="Confirm Password"
              fullWidth
              required
              errorText={(password === confirmPassword ? null : "Passwords don't match")}
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              type="password"
              onChange={this.handleContentChange}
              value={confirmPassword}
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
