import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        <TextField
          id="login-email"
          hintText="Email"
          required
          fullWidth
          onChange={this.handleContentChange}
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          value={email}
        />
        <TextField
          id="login-password"
          hintText="Password"
          type="password"
          required
          fullWidth
          underlineFocusStyle={{ borderColor: "#FF6517" }}
          onChange={this.handleContentChange}
          value={password}
        />
        <RaisedButton
          fullWidth
          type="submit"
          label="Login"
          labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
          backgroundColor="#FF6517"
        />
      </form>
    )
  }
};
