import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import { deleteItem } from '../../store/actions';

class DeleteItem extends Component {

  handleClick = () => {
    const { userId, collectionId, itemId } = this.props.match.params;
    const { deleteItem, history } = this.props;

    deleteItem(userId, collectionId, itemId);
    history.push(`/users/${userId}/collections/${collectionId}`);
  }

  render() {
    return (
      <RaisedButton
        labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
        backgroundColor="#ffffff"
        label="Delete Item"
        onClick={this.handleClick}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (userId, collectionId, itemId) => {
    dispatch(deleteItem(userId, collectionId, itemId))
  },
});

export default withRouter(connect(null, mapDispatchToProps)(DeleteItem));
