import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';

import { signUp, signIn } from '../../store/actions';

import './style.css';

class SignInSignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signin: {
        email: "",
        password: "",
      },
      signup: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }
    };
  }

  componentWillMount() {
    const { loggedUser, history } = this.props;

    if (loggedUser) history.push(`/users/${loggedUser}`);
  }

  componentWillReceiveProps(props) {
    const { loggedUser, history } = props;

    if(loggedUser) {
      return history.push(`/users/${loggedUser}`)
    }
  }

  handleSignInContentChange = (event, content) => {
    let { email, password } = this.state.signin;
    const { id } = event.currentTarget;

    if (id === "signin-email") email = content;
    if (id === "signin-password") password = content;

    this.setState({
      signin: {
        email,
        password
      }
    });
  }

  handleSignUpContentChange = (event, content) => {
    let { firstName, lastName, email, password } = this.state.signup;
    const { id } = event.currentTarget;

    if (id === "signup-firstname") firstName = content;
    if (id === "signup-lastname") lastName = content;
    if (id === "signup-email") email = content;
    if (id === "signup-password") password = content;

    this.setState({
      signup: {
        firstName,
        lastName,
        email,
        password
      }
    });
  }

  handleSignInSubmit = (event) => {
    const { signIn } = this.props;
    const { email, password } = this.state.signin;

    event.preventDefault();
    if (email && password) {
      signIn({ email, password });
      this.setState({
        signin: {
          email: "",
          password: "",
        }
      })
    }
  }

  handleSignUpSubmit = (event) => {
    const { signUp } = this.props;
    const { firstName, lastName, email, password } = this.state.signup;

    event.preventDefault();
    if (firstName && lastName && email && password) {
      signUp({ firstName, lastName, email, password });
      this.setState({
        signup: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }
      })
    }
  }

  render() {
    const { signin, signup } = this.state;
    
    return (
      <Paper className="signin-signup">
        <Tabs
          tabItemContainerStyle={{ backgroundColor: "#bdbdbd" }}
          inkBarStyle={{ backgroundColor: "#00bcd4" }}
        >
          <Tab label="Sign in" >
            <div>
              <form onSubmit={this.handleSignInSubmit}>
                <TextField
                  id="signin-email"
                  hintText="Email"
                  fullWidth
                  onChange={this.handleSignInContentChange}
                  value={signin.email}
                />
                <TextField
                  id="signin-password"
                  hintText="Password"
                  type="password"
                  fullWidth
                  onChange={this.handleSignInContentChange}
                  value={signin.password}
                />
                <RaisedButton backgroundColor="#5eb8ff" type="submit" label="Sign in" fullWidth />
              </form>
            </div>
          </Tab>
          <Tab label="Sign up" >
            <div>
              <form onSubmit={this.handleSignUpSubmit}>
                <TextField
                  id="signup-firstname"
                  hintText="First Name"
                  fullWidth
                  onChange={this.handleSignUpContentChange}
                  value={signup.firstName}
                />
                <TextField
                  id="signup-lastname"
                  hintText="Last Name"
                  fullWidth
                  onChange={this.handleSignUpContentChange}
                  value={signup.lastName}
                />
                <TextField
                  id="signup-email"
                  hintText="Email"
                  fullWidth
                  onChange={this.handleSignUpContentChange}
                  value={signup.email}
                />
                <TextField
                  id="signup-password"
                  hintText="Password"
                  type="password"
                  fullWidth
                  onChange={this.handleSignUpContentChange}
                  value={signup.password}
                />
                <RaisedButton backgroundColor="#5eb8ff" type="submit" label="Sign up" fullWidth />
              </form>
            </div>
          </Tab>
        </Tabs>
      </Paper>
    )
  }
};

const mapStateToProps = (state, props) => {
  const { loggedUser } = state;

  return (
    {
      loggedUser,
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (newUserInfo) => dispatch(signUp(newUserInfo)),
  signIn: (loginInfo) => dispatch(signIn(loginInfo)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInSignUp));
