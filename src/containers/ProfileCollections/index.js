import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import ProfileItems from '../../components/ProfileItems';

import './style.css';

class ProfileCollections extends Component {

  selectCollection = () => {
    const { history, userId, collection } = this.props;

    history.push(`/users/${userId}/collections/${collection._id}`);
  }

  render() {
    const { collection } = this.props;
    const maxItems = 6;

    return (
      <Paper
        className={
          `profile-collection-preview ${collection.items && collection.items.length <= maxItems / 2 ? 'shorter-wrapper' : ''}`
        }
        style={{ backgroundColor: "#6D8EAD" }}
        zDepth={0}
      >
        <div
          className={`profile-collection-items-preview ${collection.items && collection.items.length <= maxItems / 2 ? 'shorter-info' : ''}`}
          onClick={this.selectCollection}
        >
          <div className="profile-collection-items-wrapper">
            {
              collection.items && collection.items.map((item, index) => {
                if (index < maxItems)
                  return (
                    <div key={item._id}>
                      <ProfileItems photo={item.photo} />
                    </div>
                  )
                else
                  return null;
              })
            }
          </div>
        </div>
        <div className={
          `profile-collection-preview-info ${collection.items && collection.items.length <= maxItems / 2 ? 'shorter-info' : ''}`
        }>
          <div className="profile-collection-preview-info-title">
            <h2 onClick={this.selectCollection}>{collection.name}</h2>
          </div>
          <div className={
            `profile-collection-preview-description ${collection.items && collection.items.length <= maxItems / 2 ? 'shorter-description' : ''}`
          }
          >
            <p>{collection.info}</p>
          </div>
        </div>
      </Paper>
    )
  }
}

export default withRouter(connect()(ProfileCollections));
