import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import { deleteCollection } from '../../store/actions';

class DeleteCollection extends Component {

  handleClick = () => {
    const { userId, collectionId } = this.props.match.params;
    const { deleteCollection, history } = this.props;

    deleteCollection(userId, collectionId);
    history.push(`/users/${userId}`);
  }

  render() {
    return (
      <RaisedButton
        backgroundColor="#5eb8ff"
        style={{ marginLeft: "30px" }}
        label="Delete Collection"
        onClick={this.handleClick}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteCollection: (userId, collectionId) => {
    dispatch(deleteCollection(userId, collectionId))
  },
});

export default withRouter(connect(null, mapDispatchToProps)(DeleteCollection));
