import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class ProfileCollections extends Component {

  componentWillMount() {
    const { userId } = this.props;

    const httpHeaders = {
      "method": 'GET',
      "Content-Type": "application/json"
    };

    fetch(`http://localhost:3030/api/users/5a1da1bf972c7b073ae06e17/collections/${this.props.collection._id}`, httpHeaders)
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

  render() {
    const { collection, index } = this.props;

    return (
      <div className={`collection ${index % 2 ? 'reverse' : ''}`}>
        <div className="collection-photos-preview">
          {
            collection.items && collection.items.map((item, index) => {
              if (index < 6)
                return <img key={item._id} src={item.photo} alt="TODO: Add a nonredundant alt" />
              else
                return undefined
            })
          }
        </div>
        <div className="collection-description">
          <h3>{collection.name}</h3>
          <p>{collection.info}</p>
        </div>
      </div>
    )
  }
}

export default connect(null)(ProfileCollections);
