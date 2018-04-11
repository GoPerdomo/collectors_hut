import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import ItemInfo from '../../containers/Items/ItemInfo';
import EditItem from '../../containers/Items/EditItem';
import DeleteItem from '../../containers/Items/DeleteItem';

import { getProfile } from '../../store/actions';

import './style.css';

class Item extends Component {

  componentDidMount() {
    const { currentItem, match, getProfile } = this.props;
    const { userId } = match.params;

    if (!currentItem) {
      getProfile(userId);
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
                <DeleteItem />
                <EditItem userId={userId} item={currentItem} />
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

  if (state[userId] && state[userId].collections) {
    const currentCollection = state[userId].collections.find(collection => collection._id === collectionId);

    if (currentCollection.items) {
      currentItem = currentCollection.items.find(item => item._id === itemId);
    }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
