import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dialog from 'material-ui/Dialog';

import DeleteCollectionButton from '../../../components/Buttons/CollectionButtons/DeleteCollectionButton';
import CancelButton from '../../../components/Buttons/ConfirmButtons/CancelButton';
import DeleteButton from '../../../components/Buttons/ConfirmButtons/DeleteButton';

import { deleteCollection } from '../../../store/actions';

class DeleteCollection extends Component {

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
    const { userId, collectionId } = this.props.match.params;
    const { deleteCollection, history } = this.props;

    deleteCollection(userId, collectionId);
    history.push(`/users/${userId}`);
  }

  render() {
    
    return (
      <div>
        <DeleteCollectionButton handleButtonClick={this.handleButtonClick} />

        <Dialog
          title="Are you sure you want to delete?"
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          contentStyle={{ width: "35%" }}
          actions={[
            <CancelButton handleRequestClose={this.handleRequestClose} />,
            <DeleteButton handleDeleteButton={this.handleDeleteButton} />,
          ]}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteCollection: (userId, collectionId) => {
    dispatch(deleteCollection(userId, collectionId))
  },
});

export default withRouter(connect(null, mapDispatchToProps)(DeleteCollection));
