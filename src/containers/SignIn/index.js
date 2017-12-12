import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import ConfigButton from '../../containers/ConfigButton';

import { signIn } from '../../store/actions';

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleContentChange = (event, content) => {
    let { email, password } = this.state;
    const { id } = event.currentTarget;

    if (id === "signin-email") email = content;
    if (id === "signin-password") password = content;

    this.setState({ email, password });
  }

  handleSubmit = (event) => {
    const { signIn } = this.props;
    const { email, password } = this.state;

    event.preventDefault();
    if (email && password) {
      signIn({ email, password });
      this.setState({
        email: "",
        password: "",
      })
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <ConfigButton label="Sign in">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="signin-email"
            hintText="Email"
            fullWidth
            onChange={this.handleContentChange}
            value={email}
          />
          <TextField
            id="signin-password"
            hintText="Password"
            type="password"
            fullWidth
            onChange={this.handleContentChange}
            value={password}
          />
          <RaisedButton type="submit" label="Sign In" fullWidth />
        </form>
      </ConfigButton>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (loginInfo) => dispatch(signIn(loginInfo))
});

export default connect(null, mapDispatchToProps)(SignIn);
