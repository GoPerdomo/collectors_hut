import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import StandardButton from '../../../components/Buttons/StandardButton';
import ProfileForm from '../../../components/Forms/ProfileForm';
import StyledDialog from '../../../components/Dialogs/StyledDialog';

import { maxNameLength, maxEmailLength } from '../../../helpers/constants';
import { editUser } from '../../../store/actions';
import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  @media (max-width: ${bp.breakFour}) {
    order: 1;
  }
  @media (max-width: ${bp.breakEight}) {
    order: 0;
  }
`

const StyledStandardButton = styled(StandardButton) `
  & button {
    @media (max-width: ${bp.breakSix}) {
      line-height: 17px !important;
    }
    @media (max-width: ${bp.breakEight}) {
      line-height: 36px !important;
    }
 }
`

// ========= Material-UI Styles =========
const styles = {
  labelStyle: {
    display: "flex",
    padding: "2px 8px",
    color: "#6D8EAD",
  },
  backgroundColor: "#ffffff",
};


// ============== Component ==============
class EditProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleButtonClick = (event) => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
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
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <Wrapper>
        <StyledStandardButton
          label="Edit Profile"
          labelStyle={styles.labelStyle}
          backgroundColor={styles.backgroundColor}
          handleClick={this.handleButtonClick}
        />
        <StyledDialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <ProfileForm
            user={this.props.user}
            handleSubmit={this.handleSubmit}
          />
        </StyledDialog>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editUser: (userId, user) => dispatch(editUser(userId, user)),
});

export default connect(null, mapDispatchToProps)(EditProfile);
