import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProfileForm from '../../../components/Forms/ProfileForm';

import { maxNameLength, maxEmailLength, profileFormSpeed } from '../../../helpers/constants';
import { editUser } from '../../../store/actions';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? "400px" : "0"};
  transition: height ${profileFormSpeed}ms;
  overflow: hidden;
`

const Title = styled.h2`
  color: #ffffff;
`

// ============== Component ==============
class EditProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      success: false,
    }
  }

  handleSubmit = (event, editedUser) => {
    const { user, editUser } = this.props;
    const { firstName, lastName, email, password, confirmPassword, passwordValidation } = editedUser.userInfo;
    const { isValidPassword } = passwordValidation;
    const { isFileTooBig } = editedUser;
    const isValidName = !!(firstName && lastName && firstName.length <= maxNameLength && lastName.length <= maxNameLength);
    const isValidEmail = email.length <= maxEmailLength;

    event.preventDefault();

    if (isValidName && isValidEmail && isValidPassword && (password === confirmPassword) && !isFileTooBig) {
      editUser(user._id, editedUser);
      this.setState({ success: true });
    }
  }

  render() {
    const { success } = this.state;
    const { user, isOpen, closeForm } = this.props;

    return (
      <Wrapper isOpen={isOpen}>
        <Title>Edit profile</Title>
        <ProfileForm
          closeForm={closeForm}
          success={success}
          user={user}
          handleSubmit={this.handleSubmit}
          resetSuccess={() => this.setState({ success: false })}
        />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editUser: (userId, user) => dispatch(editUser(userId, user)),
});

export default connect(null, mapDispatchToProps)(EditProfile);
