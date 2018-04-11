import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import ItemInfo from '../../containers/Items/ItemInfo';
import ItemButtons from '../../components/Buttons/ItemButtons';

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

    return (
      <main className="item">
        <ProfileHeader>
          <ItemButtons {...this.props} {...this.p} />
        </ProfileHeader>

        {
          currentItem &&
          <ItemInfo currentItem={currentItem} />
        }
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { loggedUser } = state;
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
      loggedUser,
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
