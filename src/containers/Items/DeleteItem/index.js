import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DeleteIconButton from '../../../components/Buttons/IconButtons/DeleteIconButton';
import StyledDialog from '../../../components/Dialogs/StyledDialog';
import CancelButton from '../../../components/Buttons/AlertButtons/CancelButton';
import DeleteButton from '../../../components/Buttons/AlertButtons/DeleteButton';

import { deleteItem } from '../../../store/actions';


// ============== Component ==============
class DeleteItem extends Component {

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

  handleDeleteButton = () => {
    const { userId, collectionId, itemId } = this.props.match.params;
    const { deleteItem, history } = this.props;

    deleteItem(userId, collectionId, itemId);
    history.push(`/users/${userId}/collections/${collectionId}`);
  }

  render() {

    return (
      <div>
        <DeleteIconButton handleClick={this.handleButtonClick} />

        <StyledDialog
          title="Are you sure you want to delete?"
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          actions={[
            <DeleteButton handleDeleteButton={this.handleDeleteButton} />,
            <CancelButton handleRequestClose={this.handleRequestClose} />,
          ]}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (userId, collectionId, itemId) => {
    dispatch(deleteItem(userId, collectionId, itemId))
  },
});

export default withRouter(connect(null, mapDispatchToProps)(DeleteItem));
