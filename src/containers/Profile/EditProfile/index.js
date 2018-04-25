import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';

import EditProfileButton from '../../../components/Buttons/ProfileButtons/EditProfileButton';
import EditProfileForm from '../../../components/Forms/ProfileForms/EditProfileForm';

import { editUser } from '../../../store/actions';

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
    const { firstName, lastName, password, confirmPassword, passwordValidation } = editedUser.userInfo;
    const { isValidPassword } = passwordValidation;
    const { isFileTooBig } = editedUser;

    event.preventDefault();

    if (firstName && lastName && isValidPassword && (password === confirmPassword) && !isFileTooBig) {
      editUser(user._id, editedUser);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <EditProfileButton handleButtonClick={this.handleButtonClick} />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <EditProfileForm
            user={this.props.user}
            handleSubmit={this.handleSubmit}
          />
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editUser: (userId, user) => dispatch(editUser(userId, user)),
});

export default connect(null, mapDispatchToProps)(EditProfile);
