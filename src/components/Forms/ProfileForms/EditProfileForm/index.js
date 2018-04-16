import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class EditProfileForm extends Component {

  constructor(props) {
    super(props);
    const { firstName, lastName } = props.user;

    this.state = {
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

  handleContentChange = (event, content) => {
    let { firstName, lastName, photo, email, password, confirmPassword } = this.state.profileInfo;
    const { id } = event.currentTarget;

    switch (id) {
      case ("edit-first-name"):
        firstName = content;
        break;
      case ("edit-last-name"):
        lastName = content;
        break;
      case ("edit-photo"):
        photo = content;
        break;
      case ("edit-email"):
        email = content;
        break;
      case ("edit-password"):
        password = content;
        break;
      case ("confirm-password"):
        confirmPassword = content;
        break;
      default:
        break;
    }

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

  render() {
    const { profileInfo } = this.state;
    const {
      firstName,
      lastName,
      photo,
      email,
      password,
      confirmPassword,
    } = profileInfo;

    const { handleSubmit } = this.props

    return (
      <form onSubmit={(event) => handleSubmit(event, profileInfo)}>
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
    )
  }
};
