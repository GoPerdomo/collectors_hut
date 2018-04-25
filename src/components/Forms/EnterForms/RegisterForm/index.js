import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import PasswordInput from '../../../Inputs/PasswordInput';

import hasNumber from '../../../../utils/hasNumber';
import passErrorGenerator from '../../../../utils/passErrorGenerator';

const minPassLength = 8;

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
        <TextField
          id="register-firstname"
          hintText="First Name"
          required
          fullWidth
          onChange={this.handleContentChange}
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={firstName}
        />
        <TextField
          id="register-lastname"
          hintText="Last Name"
          required
          fullWidth
          onChange={this.handleContentChange}
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={lastName}
        />
        <TextField
          id="register-email"
          hintText="Email"
          type="email"
          required
          fullWidth
          onChange={this.handleContentChange}
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={email}
        />
        <PasswordInput
          id="register-password"
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
        <RaisedButton
          fullWidth
          type="submit"
          label="Register"
          labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
          backgroundColor="#FF6517"
        />
      </form>
    )
  }
};
