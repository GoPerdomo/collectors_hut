import React, { Component } from 'react';

import NameInput from '../../../Inputs/NameInput';
import EmailInput from '../../../Inputs/EmailInput';
import PasswordInput from '../../../Inputs/PasswordInput';
import FileInput from '../../../Inputs/FileInput';
import SubmitButton from '../../../Buttons/SubmitButton';

import { minPassLength, maxFileSize, maxNameLength, maxEmailLength } from '../../../../utils/constants';
import hasNumber from '../../../../utils/hasNumber';
import passErrorGenerator from '../../../../utils/passErrorGenerator';

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
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={(event) => handleSubmit(event, this.state)}>
        <NameInput
          id="edit-first-name"
          hintText="First Name"
          maxLength={maxNameLength}
          value={firstName}
          onChange={this.handleContentChange}
        />
        <NameInput
          id="edit-last-name"
          hintText="Last Name"
          maxLength={maxNameLength}
          value={lastName}
          onChange={this.handleContentChange}
        />
        <EmailInput
          id="edit-email"
          maxLength={maxEmailLength}
          value={email}
          onChange={this.handleContentChange}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%" }}>
            <PasswordInput
              id="edit-password"
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
          <FileInput
            id="edit-profile-photo"
            style={{ width: "45%", height: "96px" }}
            inputStyle={{ position: "absolute", top: "40%" }}
            errorStyle={{ top: "25px" }}
            errorText={isFileTooBig ? `Image exceeds the size limit of ${maxFileSize / 1000000} Mb` : null}
            onChange={this.handleContentChange}
          />
        </div>
        <SubmitButton />
      </form>
    )
  }
};
