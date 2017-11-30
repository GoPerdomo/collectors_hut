import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfileItemsPreview from '../../components/ProfileItemsPreview';

import './style.css';

class ProfileCollectionsPreview extends Component {

  componentDidMount() {
    const { userId } = this.props;

    const httpHeaders = {
      "method": 'GET',
      "Content-Type": "application/json"
    };

    fetch(`http://localhost:3030/api/users/${userId}/collections/${this.props.collection._id}`, httpHeaders)
      .then(res => res.json())
      .then(collection => {
        const collectionId = collection._id;
        this.props.dispatch({
          type: "SET_COLLECTION_ITEMS",
          payload: { collectionId, userId, items: collection.items }
        })
      })
      .catch(err => console.error(err));

  }

  selectCollection = () => {
    this.props.history.push(`/users/${this.props.userId}/collections/${this.props.collection._id}`);
  }

  render() {
    const { collection, index } = this.props;

    return (
      <div className={`profile-collection-preview ${index % 2 ? 'reverse' : ''}`}>
        <div className="profile-collection-items-preview" onClick={ this.selectCollection }>
          {
            collection.items && collection.items.map((item, index) => {
              if (index < 6)
                return <ProfileItemsPreview key={item._id} photo={item.photo} />
              else
                return undefined;
            })
          }
        </div>
        <div className="profile-collection-preview-description">
          <h3>{collection.name}</h3>
          <p>{collection.info}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null)(ProfileCollectionsPreview));
