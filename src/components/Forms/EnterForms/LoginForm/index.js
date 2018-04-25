import React, { Component } from 'react';

import EmailInput from '../../../Inputs/EmailInput';
import PasswordInput from '../../../Inputs/PasswordInput';
import SubmitButton from '../../../Buttons/SubmitButton';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }

  handleContentChange = (event, content) => {
    let { email, password } = this.state;
    const { id } = event.currentTarget;

    switch (id) {
      case ("login-email"):
        email = content;
        break;
      case ("login-password"):
        password = content;
        break;
      default:
        break;
    }

    this.setState({
      email,
      password,
    });
  }

  render() {
    const { email, password } = this.state;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={event => {
        handleSubmit(event, this.state);
        this.setState({ email: "", password: "" })
      }}>
        <EmailInput
          id="login-email"
          required
          value={email}
          onChange={this.handleContentChange}
        />
        <PasswordInput
          id="login-password"
          hintText="Password"
          value={password}
          onChange={this.handleContentChange}
        />
        <SubmitButton label="Login" backgroundColor="#FF6517" />
      </form>
    )
  }
};
