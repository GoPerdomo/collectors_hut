import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  handleContentChange = (event, content) => {
    let { firstName, lastName, email, password, confirmPassword } = this.state;
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

    this.setState({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword } = this.state;
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
          required
          fullWidth
          onChange={this.handleContentChange}
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={email}
        />
        <TextField
          id="register-password"
          hintText="Password"
          type="password"
          required
          fullWidth
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          onChange={this.handleContentChange}
          value={password}
        />
        <TextField
          id="confirm-password"
          hintText="Confirm Password"
          type="password"
          required
          fullWidth
          errorText={(password === confirmPassword ? null : "Passwords don't match")}
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          onChange={this.handleContentChange}
          value={confirmPassword}
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
