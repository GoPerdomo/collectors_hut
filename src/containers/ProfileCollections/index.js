import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import ProfileItems from '../../components/ProfileItems';

import { getItems } from '../../store/actions';

import './style.css';

class ProfileCollections extends Component {

  componentDidMount() {
    const { userId, collection, getItems } = this.props;

    getItems(userId, collection._id)
  }

  selectCollection = () => {
    const { history, userId, collection } = this.props;

    history.push(`/users/${userId}/collections/${collection._id}`);
  }

  render() {
    const { collection, index } = this.props;
    const maxItems = 6;

    return (
      <Paper
        className={`profile-collection-preview ${index % 2 ? 'reverse' : ''}`}
        zDepth={2}
      >
        <div className="profile-collection-items-preview" onClick={this.selectCollection} >
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
        <div className="profile-collection-preview-description">
          <h3 onClick={this.selectCollection}>{collection.name}</h3>
          <p>{collection.info}</p>
        </div>
      </Paper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getItems: (userId, collectionId) => dispatch(getItems(userId, collectionId))
})

export default withRouter(connect(null, mapDispatchToProps)(ProfileCollections));
