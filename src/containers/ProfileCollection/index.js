import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style.css';

class ProfileCollections extends Component {

  selectItem = () => {
    const { history, userId, collectionId, itemId } = this.props;

    history.push(`/users/${userId}/collections/${collectionId}/items/${itemId}`);
  }

  render() {

    return (
      <img className="collection-item-photo" src={ this.props.photo } alt="TODO: Add a nonredundant alt" onClick={ this.selectItem }/>
    )
  }
}

export default withRouter(connect(null)(ProfileCollections));
