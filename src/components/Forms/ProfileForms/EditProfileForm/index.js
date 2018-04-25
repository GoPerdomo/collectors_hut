import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PasswordInput from '../../../Inputs/PasswordInput';

import hasNumber from '../../../../utils/hasNumber';
import passErrorGenerator from '../../../../utils/passErrorGenerator';

const minPassLength = 8;
const maxFileSize = 2000000;

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
        passwordValidation: {
          isValidPassword: false,
          passwordIsLongEnough: false,
          passwordHasNumber: false,
        }
      },
      userPhoto: {},
      isFileTooBig: false,
    };
  }

  handleContentChange = (event, content) => {
    let { firstName, lastName, email, password, confirmPassword, passwordValidation } = this.state.userInfo;
    let { isValidPassword, passwordIsLongEnough, passwordHasNumber } = passwordValidation;
    let { userPhoto, isFileTooBig } = this.state;
    const { id } = event.currentTarget;
    const file = event.target.files && event.target.files[0];

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
        if (file && file.size < maxFileSize) {
          userPhoto = file;
          isFileTooBig = false;
        } else {
          userPhoto = {};
          isFileTooBig = true;
        }
        break;
      default:
        break;
    }

    passwordIsLongEnough = password.length >= minPassLength;
    passwordHasNumber = hasNumber(password);
    isValidPassword = !!(password && passwordIsLongEnough && passwordHasNumber);

    this.setState({
      userInfo: {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        photoType: userPhoto.type,
        passwordValidation: {
          isValidPassword,
          passwordIsLongEnough,
          passwordHasNumber,
        }
      },
      userPhoto,
      isFileTooBig,
    });
  }

  render() {
    const { userInfo, isFileTooBig } = this.state;
    const { firstName, lastName, email, password, confirmPassword, passwordValidation } = userInfo;
    const { passwordIsLongEnough, passwordHasNumber } = passwordValidation;
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
            <PasswordInput
              id="edit-password"
              hintText="Password"
              value={password}
              onChange={this.handleContentChange}
              errorText={password && passErrorGenerator(minPassLength, passwordIsLongEnough, passwordHasNumber)}
            />
            <PasswordInput
              id="confirm-password"
              hintText="Confirm Password"
              value={confirmPassword}
              onChange={this.handleContentChange}
              errorText={!(password === confirmPassword) ? "Passwords don't match" : null}
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
            errorStyle={{ top: "25px" }}
            errorText={isFileTooBig ? `Image exceeds the size limit of ${maxFileSize / 1000000} Mb` : null}
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
