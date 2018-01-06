import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/ProfileHeader';
import ItemInfo from '../../containers/ItemInfo';
import EditItem from '../../containers/EditItem';
import DeleteItem from '../../containers/DeleteItem';

import { getProfile, getItems } from '../../store/actions';

import './style.css';

class Item extends Component {

  componentDidMount() {
    const { currentItem, match, getProfile, getItems } = this.props;
    const { userId, collectionId } = match.params;

    if (!currentItem) {
      getProfile(userId);
      getItems(userId, collectionId);
    }
  }

  render() {
    const { currentItem } = this.props;
    const { userId } = this.props.match.params;

    return (
      <main className="item">
        {
          currentItem &&
          <ProfileHeader
            actionButtons={
              <div className="profile-config-buttons">
                <EditItem userId={userId} item={currentItem} />
                <DeleteItem />
              </div>
            }
          />
        }
        {
          currentItem &&
          <ItemInfo currentItem={currentItem} />
        }
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId, collectionId, itemId } = props.match.params;
  let currentItem;

  if (state[userId] && state[userId].collections && state[userId].collections[0].items) {
    currentItem = state[userId].collections
      .find(collection => collection._id === collectionId)
      .items.find(item => item._id === itemId);
  }

  return (
    {
      itemId,
      user: state[userId],
      currentItem
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
  getItems: (userId, collectionId) => dispatch(getItems(userId, collectionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
