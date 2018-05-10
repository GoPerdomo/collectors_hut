import React, { Component } from 'react';
import styled from 'styled-components';

import NameInput from '../../Inputs/NameInput';
import EmailInput from '../../Inputs/EmailInput';
import PasswordInput from '../../Inputs/PasswordInput';
import FileInput from '../../Inputs/FileInput';
import SubmitButton from '../../Buttons/SubmitButton';

import { minPassLength, maxFileSize, maxNameLength, maxEmailLength, profileFormSpeed } from '../../../helpers/constants';
import hasNumber from '../../../helpers/hasNumber';
import passErrorGenerator from '../../../helpers/passErrorGenerator';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const PasswordFileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  background-color: #ffffff;

  @media (max-width: ${bp.breakEight}) {
    flex-direction: column;
  }
`

const PasswordWrapper = styled.div`
  width: 45%;

  @media (max-width: ${bp.breakEight}) {
    width: 100%;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

// ========= Material-UI Styles =========
const styles = {
  fileInput: {
    base: {
      height: "96px",
    },
    inputStyle: {
      position: "absolute",
      top: "40%",
    },
    errorStyle: {
      top: "25px",
    },
  },
  buttons: {
    labelStyle: {
      color: "#6D8EAD",
    },
    cancelBackgroundColor: "#FFFFFF",
    saveBackgroundColor: "#FF6517",
  },
};

// ============== Component ==============
export default class EditProfileForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      userInfo: this.getFormData(),
      userPhoto: {},
      isFileTooBig: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { success } = this.props;
    if (success) this.clearForm()
  }

  getFormData = () => {
    const { firstName, lastName } = this.props.user;
    return {
      firstName,
      lastName,
      email: "",
      password: "",
      confirmPassword: "",
      passwordValidation: {
        isValidPassword: false,
        passwordIsLongEnough: false,
        passwordHasNumber: false,
      }
    };
  }

  handleContentChange = (event, content) => {
    let { firstName, lastName, email, password, confirmPassword, passwordValidation } = this.state.userInfo;
    let { isValidPassword, passwordIsLongEnough, passwordHasNumber } = passwordValidation;
    let { userPhoto, isFileTooBig } = this.state;
    const { id } = event.currentTarget;
    const file = event.target.files && event.target.files[0];

    switch (id) {
      case ("edit-first-name"):
        firstName = content;
        break;
      case ("edit-last-name"):
        lastName = content;
        break;
      case ("edit-email"):
        email = content;
        break;
      case ("edit-password"):
        password = content;
        break;
      case ("confirm-password"):
        confirmPassword = content;
        break;
      case ("edit-profile-photo"):
        if (file && file.size < maxFileSize) {
          userPhoto = file;
          isFileTooBig = false;
        } else {
          userPhoto = {};
          isFileTooBig = true;
        }
        break;
      default:
        break;
    }

    passwordIsLongEnough = password.length >= minPassLength;
    passwordHasNumber = hasNumber(password);
    isValidPassword = !!(password && passwordIsLongEnough && passwordHasNumber);

    this.setState({
      userInfo: {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        photoType: userPhoto.type,
        passwordValidation: {
          isValidPassword,
          passwordIsLongEnough,
          passwordHasNumber,
        }
      },
      userPhoto,
      isFileTooBig,
    });
  }

  clearForm = () => {
    const { closeForm, resetSuccess } = this.props;

    closeForm();
    resetSuccess();
    setTimeout(() => this.setState({
      userInfo: this.getFormData(),
      userPhoto: {},
      isFileTooBig: false,
    }), profileFormSpeed);
  }

  render() {
    const { userInfo, isFileTooBig } = this.state;
    const { firstName, lastName, email, password, confirmPassword, passwordValidation } = userInfo;
    const { passwordIsLongEnough, passwordHasNumber } = passwordValidation;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={(event) => handleSubmit(event, this.state)}>
        <NameInput
          id="edit-first-name"
          hintText="First Name"
          maxLength={maxNameLength}
          value={firstName}
          onChange={this.handleContentChange}
        />
        <NameInput
          id="edit-last-name"
          hintText="Last Name"
          maxLength={maxNameLength}
          value={lastName}
          onChange={this.handleContentChange}
        />
        <EmailInput
          id="edit-email"
          maxLength={maxEmailLength}
          value={email}
          onChange={this.handleContentChange}
        />
        <PasswordFileWrapper>
          <PasswordWrapper>
            <PasswordInput
              id="edit-password"
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
          </PasswordWrapper>
          <FileInput
            id="edit-profile-photo"
            style={styles.fileInput.base}
            inputStyle={styles.fileInput.inputStyle}
            errorStyle={styles.fileInput.errorStyle}
            errorText={isFileTooBig ? `Image exceeds the size limit of ${maxFileSize / 1000000} Mb` : null}
            onChange={this.handleContentChange}
          />
        </PasswordFileWrapper>
        <ButtonsWrapper>
          <SubmitButton
            type="button"
            label="Cancel"
            labelStyle={styles.buttons.labelStyle}
            backgroundColor={styles.buttons.cancelBackgroundColor}
            halfWidth
            onClick={this.clearForm}
          />
          <SubmitButton backgroundColor={styles.buttons.saveBackgroundColor} halfWidth />
        </ButtonsWrapper>
      </form>
    )
  }
};
