import React, { Component } from 'react';

import NameInput from '../../../Inputs/NameInput';
import EmailInput from '../../../Inputs/EmailInput';
import PasswordInput from '../../../Inputs/PasswordInput';
import SubmitButton from '../../../Buttons/SubmitButton';

import { minPassLength, maxNameLength, maxEmailLength } from '../../../../helpers/constants';
import hasNumber from '../../../../helpers/hasNumber';
import passErrorGenerator from '../../../../helpers/passErrorGenerator';

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordValidation: {
        isValidPassword: false,
        passwordIsLongEnough: false,
        passwordHasNumber: false,
      }
    }
  }

  handleContentChange = (event, content) => {
    let { firstName, lastName, email, password, confirmPassword, passwordValidation } = this.state;
    let { isValidPassword, passwordIsLongEnough, passwordHasNumber } = passwordValidation;
    const { id } = event.currentTarget;

    switch (id) {
      case ("register-firstname"):
        firstName = content;
        break;
      case ("register-lastname"):
        lastName = content;
        break;
      case ("register-email"):
        email = content;
        break;
      case ("register-password"):
        password = content;
        break;
      case ("confirm-password"):
        confirmPassword = content;
        break;
      default:
        break;
    }

    passwordIsLongEnough = password.length >= minPassLength;
    passwordHasNumber = hasNumber(password);
    isValidPassword = !!(password && passwordIsLongEnough && passwordHasNumber);

    this.setState({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      passwordValidation: {
        isValidPassword,
        passwordIsLongEnough,
        passwordHasNumber,
      }
    });
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, passwordValidation } = this.state;
    const { passwordIsLongEnough, passwordHasNumber } = passwordValidation;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={event => handleSubmit(event, this.state)}>
        <NameInput
          id="register-firstname"
          hintText="First Name"
          maxLength={maxNameLength}
          value={firstName}
          onChange={this.handleContentChange}
        />
        <NameInput
          id="register-lastname"
          hintText="Last Name"
          maxLength={maxNameLength}
          value={lastName}
          onChange={this.handleContentChange}
        />
        <EmailInput
          id="register-email"
          required
          maxLength={maxEmailLength}
          value={email}
          onChange={this.handleContentChange}
        />
        <PasswordInput
          id="register-password"
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
        <SubmitButton label="Register" backgroundColor="#FF6517" />
      </form>
    )
  }
};
