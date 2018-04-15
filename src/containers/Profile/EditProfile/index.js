import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import EditProfileForm from '../../../components/Profile/EditProfileForm';

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

  handleSubmit = (event, profileInfo) => {
    const { user, editUser } = this.props;
    const { firstName, lastName, password, confirmPassword } = profileInfo;

    event.preventDefault();

    if (firstName && lastName && (password === confirmPassword)) {
      editUser(user._id, profileInfo);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <RaisedButton
          onClick={this.handleButtonClick}
          labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
          backgroundColor="#ffffff"
          label={"Edit profile"}
        />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <EditProfileForm
            user={this.props.user}
            {...this.state.profileInfo}
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
