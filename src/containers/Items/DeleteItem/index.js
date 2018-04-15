import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import DeleteItemButton from '../../../components/Buttons/ItemButtons/DeleteItemButton';

import { deleteItem } from '../../../store/actions';

// TODO: Refactor

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
        <DeleteItemButton handleButtonClick={this.handleButtonClick} />

        <Dialog
          title="Are you sure you want to delete?"
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          contentStyle={{ width: "35%" }}
          actions={[
            <FlatButton
              label="Cancel"
              onClick={this.handleRequestClose}
              labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
              backgroundColor="#FF6517"
            />,
            <FlatButton
              label="Delete"
              onClick={this.handleDeleteButton}
              style={{ marginLeft: "10px" }}
              labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
              backgroundColor="#6D8EAD"
            />,
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
