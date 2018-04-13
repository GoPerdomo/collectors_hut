import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import CollectionButtons from '../../components/Buttons/CollectionButtons';
import CollectionInfo from '../../components/Collections/CollectionInfo';

import { getProfile } from '../../store/actions';

import './style.css';

class Collection extends Component {

  componentDidMount() {
    const { currentCollection, match, getProfile } = this.props;
    const { userId } = match.params;

    if (!currentCollection) {
      getProfile(userId);
    }
  }

  render() {
    const { currentCollection } = this.props;


    return (
      <main className="collection">
        <ProfileHeader>
          <CollectionButtons {...this.props} />
        </ProfileHeader>

        {
          currentCollection &&
          <CollectionInfo {...this.props} />
        }
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { loggedUser } = state;
  const { userId, collectionId } = props.match.params;
  let currentCollection;

  if (state[userId]) {
    currentCollection = state[userId].collections.find(collection => (
      collection._id === collectionId)
    );

  }

  return (
    {
      loggedUser,
      userId,
      user: state[userId],
      collectionId,
      currentCollection
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Collection);
