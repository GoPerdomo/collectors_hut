import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './style.css';

class CollectionItem extends Component {

  selectItem = () => {
    const { history, userId, collectionId, itemId } = this.props;

    history.push(`/users/${userId}/collections/${collectionId}/items/${itemId}`);
  }

  render() {

    return (
      <div className="collection-item-photo-wrapper" onClick={this.selectItem}>
        <img className="collection-item-photo" src={this.props.photo} alt="" />
      </div>
    )
  }
}

export default withRouter(CollectionItem);
