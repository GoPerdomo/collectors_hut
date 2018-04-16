import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';

import { login, register } from '../../../store/actions';

import './style.css';

// TODO: Refactor

class LoginRegister extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: "",
        password: "",
      },
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    };
  }

  handleLoginContentChange = (event, content) => {
    let { email, password } = this.state.login;
    const { id } = event.currentTarget;

    if (id === "login-email") email = content;
    if (id === "login-password") password = content;

    this.setState({
      login: {
        email,
        password
      }
    });
  }

  handleRegisterContentChange = (event, content) => {
    let { firstName, lastName, email, password, confirmPassword } = this.state.register;
    const { id } = event.currentTarget;

    if (id === "register-firstname") firstName = content;
    if (id === "register-lastname") lastName = content;
    if (id === "register-email") email = content;
    if (id === "register-password") password = content;
    if (id === "confirm-password") confirmPassword = content;

    this.setState({
      register: {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }
    });
  }

  handleLoginSubmit = (event) => {
    const { login } = this.props;
    const { email, password } = this.state.login;

    event.preventDefault();

    if (email && password) {
      login({ email, password });

      this.setState({
        login: {
          email: "",
          password: "",
        }
      })
    }
  }

  handleRegisterSubmit = (event) => {
    const { register } = this.props;
    const { firstName, lastName, email, password, confirmPassword } = this.state.register;

    event.preventDefault();
    if (firstName && lastName && email && (password === confirmPassword)) {
      register({ firstName, lastName, email, password });
      this.setState({
        register: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }
      })
    }
  }

  render() {
    const { login, register } = this.state;

    return (
      <section className="login-register">
        <h1>Login to your account or register</h1>
        <Paper>
          <Tabs
            tabItemContainerStyle={{ backgroundColor: "#6D8EAD" }}
            inkBarStyle={{ backgroundColor: "#FF6517" }}
          >
            <Tab label="Login" >
              <div>
                <form onSubmit={this.handleLoginSubmit}>
                  <TextField
                    id="login-email"
                    hintText="Email"
                    required
                    fullWidth
                    onChange={this.handleLoginContentChange}
                    underlineFocusStyle={{ borderColor: "#FF6517" }}
                    value={login.email}
                  />
                  <TextField
                    id="login-password"
                    hintText="Password"
                    type="password"
                    required
                    fullWidth
                    underlineFocusStyle={{ borderColor: "#FF6517" }}
                    onChange={this.handleLoginContentChange}
                    value={login.password}
                  />
                  <RaisedButton
                    fullWidth
                    type="submit"
                    label="Login"
                    labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
                    backgroundColor="#FF6517"
                  />
                </form>
              </div>
            </Tab>
            <Tab label="Register" >
              <div>
                <form onSubmit={this.handleRegisterSubmit}>
                  <TextField
                    id="register-firstname"
                    hintText="First Name"
                    required
                    fullWidth
                    onChange={this.handleRegisterContentChange}
                    underlineFocusStyle={{ borderColor: "#FF6517" }}
                    value={register.firstName}
                  />
                  <TextField
                    id="register-lastname"
                    hintText="Last Name"
                    required
                    fullWidth
                    onChange={this.handleRegisterContentChange}
                    underlineFocusStyle={{ borderColor: "#FF6517" }}
                    value={register.lastName}
                  />
                  <TextField
                    id="register-email"
                    hintText="Email"
                    required
                    fullWidth
                    onChange={this.handleRegisterContentChange}
                    underlineFocusStyle={{ borderColor: "#FF6517" }}
                    value={register.email}
                  />
                  <TextField
                    id="register-password"
                    hintText="Password"
                    type="password"
                    required
                    fullWidth
                    underlineFocusStyle={{ borderColor: "#FF6517" }}
                    onChange={this.handleRegisterContentChange}
                    value={register.password}
                  />
                  <TextField
                    id="confirm-password"
                    hintText="Confirm Password"
                    type="password"
                    required
                    fullWidth
                    errorText={(register.password === register.confirmPassword ? null : "Passwords don't match")}
                    underlineFocusStyle={{ borderColor: "#FF6517" }}
                    onChange={this.handleRegisterContentChange}
                    value={register.confirmPassword}
                  />
                  <RaisedButton
                    fullWidth
                    type="submit"
                    label="Register"
                    labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
                    backgroundColor="#FF6517"
                  />
                </form>
              </div>
            </Tab>
          </Tabs>
        </Paper>
      </section>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  register: (newUserInfo) => dispatch(register(newUserInfo)),
  login: (loginInfo) => dispatch(login(loginInfo)),
});

export default withRouter(connect(null, mapDispatchToProps)(LoginRegister));
