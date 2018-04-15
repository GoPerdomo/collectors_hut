import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import ItemInfo from '../../containers/Items/ItemInfo';
import ItemButtons from '../../components/Buttons/ItemButtons';
import Loading from '../../components/Loading';

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
    const { user, currentCollection, currentItem } = this.props;

    if (!user) {
      return (
        <main className="profile">
          <Loading />
        </main>
      )
    }

    return (
      <main className="item">
        <ProfileHeader>
          <ItemButtons {...this.props} {...this.p} />
        </ProfileHeader>

        <ItemInfo currentItem={currentItem} currentCollection={currentCollection} />
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { loggedUser } = state;
  const { userId, collectionId, itemId } = props.match.params;
  let currentCollection;
  let currentItem;

  if (state[userId] && state[userId].collections) {
    currentCollection = state[userId].collections.find(collection => collection._id === collectionId);

    if (currentCollection.items) {
      currentItem = currentCollection.items.find(item => item._id === itemId);
    }
  }

  return (
    {
      loggedUser,
      itemId,
      user: state[userId],
      currentCollection,
      currentItem
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
