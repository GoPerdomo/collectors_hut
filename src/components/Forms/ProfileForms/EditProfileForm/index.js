import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class EditProfileForm extends Component {

  constructor(props) {
    super(props);
    const { firstName, lastName } = props.user;

    this.state = {
      userInfo: {
        firstName,
        lastName,
        email: "",
        password: "",
        confirmPassword: "",
      },
      userPhoto: {},
    };
  }

  handleContentChange = (event, content) => {
    let { firstName, lastName, email, password, confirmPassword } = this.state.userInfo;
    let { userPhoto } = this.state;
    const { id } = event.currentTarget;

    switch (id) {
      case ("edit-first-name"):
        firstName = content;
        break;
      case ("edit-last-name"):
        lastName = content;
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
      case ("edit-profile-photo"):
        if (event.target.files[0]) userPhoto = event.target.files[0];
        break;
      default:
        break;
    }

    this.setState({
      userInfo: {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        photoType: userPhoto.type,
      },
      userPhoto,
    });
  }

  render() {
    const { userInfo } = this.state;
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = userInfo;

    const { handleSubmit } = this.props

    return (
      <form onSubmit={(event) => handleSubmit(event, this.state)}>
        <TextField
          id="edit-first-name"
          required
          fullWidth
          hintText="First Name"
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={firstName}
          onChange={this.handleContentChange}
        />
        <TextField
          id="edit-last-name"
          required
          fullWidth
          hintText="Last Name"
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={lastName}
          onChange={this.handleContentChange}
        />
        <TextField
          id="edit-email"
          hintText="Email"
          fullWidth
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={email}
          onChange={this.handleContentChange}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%" }}>
            <TextField
              id="edit-password"
              required
              fullWidth
              hintText="Password"
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              type="password"
              value={password}
              onChange={this.handleContentChange}
            />
            <TextField
              id="confirm-password"
              fullWidth
              required
              hintText="Confirm Password"
              errorText={(password === confirmPassword ? null : "Passwords don't match")}
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              type="password"
              value={confirmPassword}
              onChange={this.handleContentChange}
            />
          </div>
          <TextField
            id="edit-profile-photo"
            type="file"
            fullWidth
            accept=".jpg, .png"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            inputStyle={{ position: "absolute", top: "40%" }}
            style={{ width: "45%", height: "96px" }}
            onChange={this.handleContentChange}
          />
        </div>
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
