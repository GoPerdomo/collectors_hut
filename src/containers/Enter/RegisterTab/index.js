import React from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../../../components/Forms/EnterForms/RegisterForm';

import { maxNameLength, maxEmailLength } from '../../../helpers/constants';
import { register } from '../../../store/actions';

const RegisterTab = ({ register, isDuplicatedEmail }) => {

  const handleRegisterSubmit = (event, registerInfo) => {
    const { firstName, lastName, email, password, confirmPassword, passwordValidation } = registerInfo;
    const { isValidPassword } = passwordValidation;
    const isValidName = !!(firstName && lastName && firstName.length <= maxNameLength && lastName.length <= maxNameLength);
    const isValidEmail = !!(email && email.length <= maxEmailLength);

    event.preventDefault();
    
    if (isValidName && isValidEmail && isValidPassword && (password === confirmPassword)) {
      register({ firstName, lastName, email, password });
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <RegisterForm handleSubmit={handleRegisterSubmit} />
      <span style={isDuplicatedEmail ? { display: "block", position: "absolute", left: "0", right: "0", marginTop: "0.5em", color: "red", fontSize: "1.2em", textAlign: "center" } : { display: "none" }}>
        Email is already in use
      </span>
    </div>
  )
};

const mapStateToProps = state => {
  const { isDuplicatedEmail } = state;

  return {
    isDuplicatedEmail,
  }
};

const mapDispatchToProps = dispatch => ({
  register: (newUserInfo) => dispatch(register(newUserInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTab);
